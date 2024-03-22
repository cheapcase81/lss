	var iPad = (navigator.platform.indexOf("iPad") != -1 || navigator.platform.indexOf("iPhone") != -1);
	var isAndroid = (navigator.userAgent.indexOf("Android") != -1);
	trace ("isAndroid: " + isAndroid);
	trace ("iPad: " + iPad);
	
	var iPadTraceConsole 	= false;
	
	var qStartTime = new Date().getTime();
	// console.log("HTML started loading at " + qStartTime);
	var mSTOPPED	= 0;			// the sound has been stopped, or never started
	var mPLAYING	= 1;			// the sound is currently playing
	var mPAUSED		= 2;			// the sound was playing, it is now paused
	var mFINISHED	= 3;			// the sound reached the end
	var soundMode	= mSTOPPED;		// the current play mode
	
	var soundTrack;					// will hold the Sound Manager one and only sound object (the audio)
	
	var soundFinishedPlaying = false;		// sound track was completed
	var slideComplete = false;				// has the slide been marked as complete?
	var slideCompleteThreshold = 0;			// how much of the slide audio has to be completed before marking the slide as complete
	var slideCompleteEdge = 3000;			// how many ms from the end
	
	var smA = new Object();			// holds all variables related to the Sound Manager audio object
		smA.length = 0;				// the total length of the audio, estimated while loading, exact after
		smA.label = "0:00";			// same as above, formatted once in MM:SS format for display
		smA.lastPos = 0;			// audio position in the last frame (aT0)
		smA.lastTime = 0;			// the system time at the last position update (aTime)
		smA.wasPlaying = false;		// was the audio playing when the user clicked on the playhead? (so it can be restored)
		smA.buffering = true;		// this is held true until the sound position changes at least once (extrapolating ok if needed)
		smA.filename = "";			// the name of the audio file to load (the slide soundtrack)
		smA.audioTriggered = false;	// on an iPad the sound must be triggered manually, this tracks if it has automatically or not
		smA.audioLoaded = false;	// has the sound loaded or not
		smA.playWaiting = false;	// if running on an iPad, sound cannot preload.  When you click Play, the sound will preload.
		smA.soundLength = 38872;	// length is known before audio loads because we are custom-generating each HTML slide to known specs
		
	var iV = 0;						// used to count through vectors
	var vT0 = -1;					// the parametric time of the last scene update
	var vBottom = 0;				// vectors below this number don't have to be checked (include this one)
	var vTop = 0;					// vectors above this number don't have to be checked (exclude this one)
	var nV = 0;						// number of vectors
	var vv;
	
	var vT = 0;						// vector time.  The scene, scroll bar, and controls key off this
	
	var VE = new Object();						// the vector engine object
		VE.frameRate = 45;						// target frame rate
		VE.frameTime = 1000 / VE.frameRate;		// ms per frame
		VE.playing = false;						// if the engine is playing (keying off audio)
		VE.timer = null;						// ID of the timer that triggers the next udpate (cancellable)
		VE.lastTime = 0;						// the system time of the last update
		VE.fps = 0;								// stores the number of frames in the last second (increases from 0 every second, not displayed)
		VE.lastFPS = 0;							// stores the count for the last second (displayed)
		VE.lastSecond = -2;						// remember which second was previous, when it changes, update FPS
		VE.nFrames = 0;							// counts number of frames drawn every second
		
	var vCC = new Object();			// closed captioning
		vCC.hTarget = 0;			// target height for cc area
		vCC.h = 0;					// current height for cc area
		vCC.hMax = 24;				// height of cc area when maximized
		vCC.cc = 0;					// 0 = off, 1 = on
		vCC.div;					// DOM reference to cc button
		vCC.timer;					// reference to the timer that updates the CC area height
		vCC.divArea;				// DOM reference to cc area
		vCC.divText;				// DOM reference to cc text
		vCC.iCC = 0;				// the current selected text to display
		vCC.last = -1;				// the last displayed text entry, only display when it changes
	
	var ccText = ["no CC data available"];				// array of closed-captioning text
	var ccTime = [0, 9999];								// array of time for each ccText entry
	
	var autoNext = 0;				// enables / disables autonext on slide end

	var elementsLoaded = 0;			// tracks if the audio, images, and code have loaded
	var DOMLoaded = false;			// has the DOM finished loading
	var windowLoaded = false;		// has the window finished loading
	var audioReported = false;		// has the audio been reported at least once as loaded

	var lastMouseX = -1;			// track, mouseMove handler otherwise triggers when there is no change
	var initialMouseX = -1;			// the initial point when scrolling
	var divTimeDisplay;				// DIV that contains the time string (TimeDisplayArea)
	var divCopyright;				// DIV that holds the copyright, used as a quick Trace target
	var divTitle;					// DIV that holds the title, used as a quick Trace target
	var diviPadDebug;				// DIV to show debug data when running on an iPad
	var iPadTraceText = "";			// iPad Debug Trace text
	
	var divAutoNext;				// DIV for the autoNext button
	var divNextSlide;				// DIV for the next slide button
	var divPrevSlide;				// DIV for the prev slide button
	var divSlideIndex;				// DIV for the slide index
	var divSlideGuide;				// DIV for the slide index
	var divPlaySlide;				// play button in middle of lide

	var b_down;						// remember which button was pressed down
	var FwRw = new Object();
		FwRw.timer = null;			// ffwd/rewind timer (cancellable)
		FwRw.timeClicked = 0;		// the time the ffwd/rewind button was clicked.  If < 300ms, do a one-time big skip only
		FwRw.timeSkip = 300;		// threshold in ms, if released before this, do a simple skip, if held longer, constant adjust
		FwRw.dir = 0;				// direction for ffwd (+1) or rewind (-1)
		FwRw.skip = 5000;			// ms for a ffwd/rew skip (button tapped)
		FwRw.flow = 500;			// ms for a ffwd/rew continuous adjustment (button held down)
		FwRw.rate = 100;			// ms how often to update the position when ffwd/rew is held down
		FwRw.divF;					// reference to the Fast Forward button
		FwRw.divR;					// reference to the Rewind button
		
	var PHd = new Object();			// the Playhead object
		PHd.div = null;				// the Playhead div
		PHd.divGray = null;			// the gray shaded track below the playhead (unloaded)
		PHd.divBlue = null;			// the blue shaded track below the playhead (played)
		PHd.divWhite = null;		// the white shaded track below the playhead (loaded)
		PHd.left = 0;				// the left side of the control
		PHd.width = 556;			// the width of the control, after adjusting for the playhead width and shadow
		PHd.iPadX;					// stores coordinates of gray scroll area in an iPad
		PHd.iPadY;
	
	var vars = [];					// holds URL parameters
	var testMode = "";				// "enabled" if true
	var slideList = [];				// slidelist
	var slideID = "";				// the ID of this slide
	var nextSlideID = "";			// the next slide
	var prevSlideID = "";			// the prev slide
	var shiftDown = false;			// is the shift key down or not when clicking FFWD or REW
	var controlDown = false;		// is the control key down or not when clicking FFWD or REW
	 
	var playSlideActive = false;	// tracks if the slide center play button is displayed

	var vvv = [];		// array of vector events
	var veJ = [];		// jQuery object reference
	var veK = [];		// DOM object reference
	
		// movieMap variables
		// ---------------------------------------------
			var hasMovieMaps	= false;			// does slide contain any movieMaps (will require preprocessing)
			var mmNC			= 0;				// number of movieMap children for the entire slide (they are serialized)
			
			var mmChildren		= [];				// array of children div names
			var mmLast			= [];				// last unique state per child updated, skip updates if static and same as last time
			var mmK				= [];				// DOM references to each child div

			// unique state data - array of unique possible state combinations
			// -----------------------------------------------------------------------------------------------
			var mmX		= [];						// x position per unique state data
			var mmY		= [];						// y position
			var mmW		= [];						// width
			var mmH		= [];						// height
			var mmA		= [];						// alpha

			// indices into state data arrays, one per child per frame
			// -----------------------------------------------------------------------------------------------
			var mmIndexPacked	= [];				// packed array of indices into mmData, per child, per frame
			var mmIndex			= [];				// unpacked verion of mmIndexPacked
	
	var vTime = 0;
	var qV;
	var qTimer0 =  new Date().getTime();
	
// trace("Global variables initialized");