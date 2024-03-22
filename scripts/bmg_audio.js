function playAudio()			// start playing audio, always pickup from position vT
{
	// trace ("-----------------------playAudio()");
	if (iPad && smA.audioTriggered == false)				// iPad, user clicked play, but the audio has not been triggered yet
	{
		iPadTrace("playAudio: iPad Trigger - RS: " + soundTrack.readyState);
		smA.audioTriggered = true;							// remember the audio has been triggered, use this section only once
		smA.playWaiting = true;								// flag so that when the audio finishes loading, it will start playing
		soundTrack.play();									// request a play, in iPad, it triggers the loading
		soundTrack.pause();									// but don't let it play yet
		divTimeDisplay.innerHTML = "Audio loading...";		// user just clicked manual (>) Play button, notify user it's loading
	}
	else if (smA.audioLoaded)								// audio has finished loading (onload()) triggered
	{
		// trace ("sma.audioLoaded");
		// iPadTrace("playAudio: audioLoaded - PW: " + smA.playWaiting + ", RS: " + soundTrack.readyState);
		
		if (soundTrack.duration < 1 && (isAndroid == false))						// somehow, the sound is not present, 0 ms loaded
		{
			// trace ("		soundTrack duration < 1 - reload");
			// iPadTrace("this track is NO GOOD!!!, reloading...");					// no good, try to load again.
			
			soundTrack.unload();
			smA.audioTriggered = false;
			smA.playWaiting = true;
			createSoundTrack();
			soundTrack.play();
		}
		else
		{
			// trace ("		sound track is OK");			// everything should be working
			// trace ("		play audio from " + vT);		// show starting point
			// iPadTrace("sound track is OK!!!");
			
			smA.playWaiting = false;						// is this necessary?
			soundMode = mPLAYING;							// actively playing now
			soundTrack.stop();								// stop first
			clearTimeout(VE.timer);							// stop the automatic time updates
			soundTrack.setPosition(vT);						// set the playhead position
			soundTrack.play();								// now play
			startUpdating();								// start showing the playhead position and the current time display
		}
	}
	else
	{
		// trace ("	audio is not loaded, waiting...");
		// iPadTrace("playAudio: not loaded, RS: " + soundTrack.readyState);
		// divTitle.innerHTML = "Audio is triggered but not loaded, should auto start";
		smA.playWaiting = true;		// if the audio is not loaded yet, play sets a flag to play the audio as soon as the audio finishes loading
	}
}
function playAndroid()			// play in Android after user has clicked manual Play
{
	// trace("playAndroid()");
	// soundTrack.unload();
	// smA.audioTriggered = false;
	// smA.playWaiting = true;
	// createSoundTrack();
	
	soundTrack.play();
	startUpdating();
	
	// trace("playing at " + soundTrack.position + "ms");
}
function playPauseAndroid()
{
	// trace("Android from " + vT + "ms");
	// trace("togglePause()");
	
	smA.playWaiting = false;						// is this necessary?
	soundMode = mPLAYING;							// actively playing now
	clearTimeout(VE.timer);							// stop the automatic time updates
	soundTrack.setPosition(vT);						// set the playhead position
	soundTrack.resume();
	soundTrack.setPosition(vT);						// set the playhead position
	// trace("togglePause() end");
	startUpdating();								// start showing the playhead position and the current time display
	// trace("playing at " + soundTrack.position + "ms");
}
function pauseAudio()			// stop playing audio
{
	// iPadTrace("-------- PAUSE.  RS: " + soundTrack.readyState);
	smA.playWaiting = false;
	soundMode = mPAUSED;
	// trace("pausing at " + soundTrack.position + "ms");
	if (isAndroid)
	{
		soundTrack.pause();
	}
	else
	{
		//soundTrack.stop();
		soundTrack.pause();
	}
	stopUpdating();
}
function getAudioLength()		// return the length of the audio, estimated if loading, exact if loaded
{		
	switch(soundTrack.readyState)
	{
		case 0:	// uninitialised - hasn't started loading at all
			smA.length = smA.soundLength;
			smA.label = "INIT";
			// trace("	get audioLength 0: uninitialized, hasn't started loading at all, pulling from hard coded length: " + smA.length);
			break;
		case 1: // loading, return a Sound Manager estimate
			smA.length = smA.soundLength;
			smA.label = mmssFormat(smA.length) + " est";
			// trace("	get audioLength 1: loading, return hard coded length: " + smA.length);
			break;
		case 2: // failed/error
			smA.length = smA.soundLength;
			smA.label = "ERR";
			// trace("	get audioLength 2: failed/error, return hard coded length: " + smA.length);
			break;
		case 3: // loaded/success, return exact length
			// trace("	get audioLength 3: success");
			/*
			if (soundTrack.duration > 1) 
			{
				smA.length = soundTrack.duration;		// sometimes, this returns 0, otherwise, this is precise to ms
				trace("		using soundTrack.duration: " + smA.length);
			}
			else if (soundTrack.durationEstimate > 1)
			{
				smA.length = soundTrack.durationEstimate;		// unknown precision or predictability
				// trace("		using soundTrack.durationEstimate: " + smA.length);
			}
			else
			{
				smA.length = smA.soundLength;			// use the pre-configured length, sometimes off by a few ms.
				// trace("		using sma.soundLength: " + smA.length);
			}*/
			smA.length = smA.soundLength;		// forced to hard coded
			// trace("		using sma.soundLength: " + smA.length);
			
			smA.label = mmssFormat(smA.length);
			break;
	}
	// trace ("getAudioLength: " + smA.soundLength);

	if (smA.length == 0) smA.length = -1;		// prevent division by zero
	// iPadTrace(":::: RS:" + soundTrack.readyState + ", Dur: " + soundTrack.duration + ", Est: " + soundTrack.durationEstimate + ", Used: " + smA.length);
}
function getAudioPosition()		// return the current playing position of the audio
{
	switch(soundTrack.readyState)
	{
		case 0:	// uninitialised - hasn't started loading at all
		case 2: // failed/error
			return(0);
			break;
		case 1: // loading
		case 3: // loaded/success
			return(soundTrack.position);
			break;
	}
}
function audioFinished()
{
	// trace("audio finished, calling SCORM finish()");
	soundFinishedPlaying = true;
	SCORM_finish();
	
	// in test mode, if autoNext is turned on, and there's a next slide, launch it
	if (testMode == 1)
	{
		if (autoNext == 1)
		{
			// b_nextSlide_up();
		}
	}
}
	
soundManager.setup({

  // location: path to SWF files, as needed (SWF file name is appended later.)
  url: '../scripts/swf/',
  waitForWindowLoad: true,

  // optional: version of SM2 flash audio API to use (8 or 9; default is 8 if omitted, OK for most use cases.)
  flashVersion: 9,

  // use soundmanager2-nodebug-jsmin.js, or disable debug mode (enabled by default) after development/testing
  debugMode: false,

  // good to go: the onready() callback
  onready: function() {

	// SM2 has started - now you can create and play sounds!
	// divTitle.innerHTML = "not loaded";
	createSoundTrack();
  },

  // optional: ontimeout() callback for handling start-up failure
  ontimeout: function() {
  
	// console.log('sound timedout!', this);
	// iPadTrace("soundManager onTIMEOUT");
	// Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
	// See the flashblock demo when you want to start getting fancy.
  }

});
soundManager.altURL = '../scripts/swf/'; 
soundManager.debugFlash = false;
soundManager.useHighPerformance = true; 
soundManager.useFastPolling = true; 
soundManager.preferFlash = false;
soundManager.html5PollingInterval = 30; 	// update audio position this often, will interpolate if fps is faster


function createSoundTrack()
{
	// trace("function createSoundTrack()");
	soundTrack = soundManager.createSound(
	{
		id: 'aSound',
		url: [smA.filename + '.ogg',smA.filename + '.mp3'],
		autoLoad: true,
		onload: function()
		{	
			// trace(">>> ONLOAD triggered    smA.playWaiting was: " + smA.playWaiting);
			// iPadTrace("ONLOAD completed");
			
			getAudioLength();
			staticUpdate();
			smA.audioLoaded = true;
			smA.audioTriggered = true;
			reportLoaded('audio');	// audo finished loading
			
			//divTitle.innerHTML = "Sound Loaded, playWaiting was: " + smA.playWaiting;
			// console.log('sound loaded!', this);			// full disclosure on the sound object
			// trace("		soundTrack.duration: " + soundTrack.duration + "ms");
			// trace("		soundTrack.estimatedDuration: " + soundTrack.estimatedDuration + "ms");
			// trace("		smA.soundLength: " + smA.soundLength + "ms");
			
			if (smA.playWaiting) playAudio();		// used previously clicked play, but audio is just waiting for the sound file to finish loading
		},
		
		onfinish: function()
		{
			soundMode = mFINISHED;
			// trace("audio finished");
			stopUpdating();
			vT = smA.length;		// force vT to stay at the end of the slide
			staticUpdate();
			audioFinished();
		},
		ondataerror: function ()
		{
			// iPadTrace("onDATAERROR");
		}
	});
}
// trace("Sound Manager initialized");