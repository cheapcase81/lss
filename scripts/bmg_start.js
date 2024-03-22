$(function() {

	// gather references to objects in the DOM
	divTimeDisplay	= document.getElementById("timeDisplay");
	divCopyright	= document.getElementById("BMG_copyright");
	divTitle		= document.getElementById("courseTitle");
	diviPadDebug	= document.getElementById("iPadDebugText");
	PHd.div			= document.getElementById("playHead");
	PHd.divBlue		= document.getElementById("scrollBlue");
	PHd.divGray		= document.getElementById("scrollGray");
	vCC.divButton	= document.getElementById("b_cc");
	vCC.divArea		= document.getElementById("ccArea");
	vCC.divText		= document.getElementById("ccText");
	FwRw.divR		= document.getElementById("b_rew");
	FwRw.divF		= document.getElementById("b_ffwd");
	divAutoNext		= document.getElementById("b_auto");
	divNextSlide	= document.getElementById("b_next");
	divPrevSlide	= document.getElementById("b_prev");
	divSlideGuide	= document.getElementById("b_guide");
	divSlideIndex	= document.getElementById("b_index");
	divPlaySlide	= $("#playSlide");
	
	PHd.width = PHd.divGray.offsetWidth - 20;		// adjust the scrollable area to accomodate button width and shadow
	
	document.getElementById("iPadDebug").style.display = "none";	// hide ipad debug panel by default
	if ($.browser.msie)
	{
		if ($.browser.version < 9)
		{
			$('.altPNG').css("display", "none");					// in IE < 9, hide all alternate PNG elements
		}
	}
	
	// enable/disable these lines to get the iPad debug window
	if (iPad) 
	{
		// document.getElementById("iPadDebug").style.display = "true";
		// iPadTraceConsole = true;
	}

	for (iV = 0; iV < nV; iV++)		// collect object references for all vector objects
	{
		veK[iV]	= document.getElementById(vvv[iV].ID);			// a standard DOM reference for simple functions
		veJ[iV]	= $("#" + vvv[iV].ID);							// jQuery references for jQuery functions
	}
	
	if (hasMovieMaps)
	{
		for (j = 0; j < mmNC; j++)
		{
			mmK[j] = document.getElementById(mmChildren[j]);		// DOM pointer to each movieMap child
		}
		for (j = 0; j < nV; j++)	// initialize movieMap object children to their state on frame 1
		{
			if (vvv[j].vID == 31)	setMovieMapFrame1(j);
			vvv[j].loop = (vvv[j].p + vvv[j].dp > vvv[j].np);
		}
	}
	setup_CC();				// initialize CC
	setupCopyright();		// setup the copyright notice
	initSlideObjects();		// allow test slide initialization
	reportLoaded('dom');	// the DOM is loaded at this point
	
	
	smA.length = smA.soundLength;
	
	if (iPad) 
	{
		document.getElementById("loadingAudio").style.display = "none";		// in an iPad, don't show audio loading, it never loads, so it never goes away
		
		PHd.iPadX = $('#scrollBlue').offset().left;
		PHd.iPadY = $('#scrollBlue').offset().top; 
	
		PHd.div.ontouchmove = function(e)
		{
			if (e.touches.length == 1)
			{
				b_down = "scroll";
				e.preventDefault();
				e.stopPropagation();
				var touch = e.touches[0]; // Get the information for finger #1
				var dx = touch.pageX - PHd.iPadX;
				var dy = touch.pageY - PHd.iPadY;
				iPadTrace("touchMove x:" + touch.pageX + ", y: " + touch.pageY + " par: " + PHd.iPadX + ", " + PHd.iPadY + " dxdy: " + dx + ", " + dy);
				
				var x = within(0, dx - 8, PHd.width);
				if (x != lastMouseX)
				{
					iPadTrace("x: " + x);
					lastMouseX = x;
					vT = x / PHd.width * smA.length;
					staticUpdate();
				}
			}
		}
		PHd.div.ontouchstart = function(e)
		{
			b_down = "scroll";
			e.stopPropagation();
			smA.wasPlaying = (soundMode == mPLAYING);						// remember if audio was playing
			if (smA.wasPlaying) pauseAudio();								// audio is paused while playhead moves, restored on release
			lastMouseX = -1;
		}
		PHd.divGray.ontouchstart = function(e)
		{
			if (e.touches.length == 1)
			{
				b_down = "scroll";
				e.preventDefault();
				var touch = e.touches[0]; // Get the information for finger #1
				var dx = touch.pageX - PHd.iPadX;
				
				var dy = touch.pageY - PHd.iPadY;
				iPadTrace("touchSTART x:" + touch.pageX + ", y: " + touch.pageY + " par: " + PHd.iPadX + ", " + PHd.iPadY + " dxdy: " + dx + ", " + dy);
				var x = within(0, dx - 8, PHd.width);
				if (x != lastMouseX)
				{
					iPadTrace("x: " + x);
					lastMouseX = x;
					vT = x / PHd.width * smA.length;
					staticUpdate();
				}
				smA.wasPlaying = (soundMode == mPLAYING);						// remember if audio was playing
				if (smA.wasPlaying) pauseAudio();								// audio is paused while playhead moves, restored on release
				lastMouseX = -1;
			}
		}
		PHd.divGray.ontouchend = function(e)
		{
			e.preventDefault();
			iPadTrace("touchEND");
			if (smA.wasPlaying) 
			{
				// playAudio();
				playPauseAndroid();
			}
		}
		
		FwRw.divF.ontouchstart = function(e)	// FastForward or Rewind clicked
		{
			//iPadTrace2("FFWD down");
			// clicking the buttons only starts a timer.  If held long enough (> FwRw.timeSkip) starts fluidly scanning
			//e.preventDefault();
			b_down = "ffwd";
			FwRw.dir = 1;													// preserve direction +1/-1
			FwRw.timer = window.setTimeout(ffwdRewFluid, FwRw.timeSkip);		// start timer, in a short while, begin fluid advance/rew
			FwRw.timeClicked = new Date().getTime();							// time clicked
			iPadTrace2("FFWD down - t: " + FwRw.timeSkip);
		}
		FwRw.divR.ontouchstart = function(e)	// FastForward or Rewind clicked
		{
			//iPadTrace2("REW down");
			// clicking the buttons only starts a timer.  If held long enough (> FwRw.timeSkip) starts fluidly scanning
			//e.preventDefault();
			b_down = "rew";
			FwRw.dir = -1;													// preserve direction +1/-1
			FwRw.timer = window.setTimeout(ffwdRewFluid, FwRw.timeSkip);		// start timer, in a short while, begin fluid advance/rew
			FwRw.timeClicked = new Date().getTime();							// time clicked
			iPadTrace2("REW down - t: " + FwRw.timeSkip);
		}
		FwRw.divF.ontouchend = function(e)	// FastForward or Rewind clicked
		{
			iPadTrace2("FFWD up");
			e.preventDefault();
			clearTimeout(FwRw.timer);					// cancel any pending timer
			var timeNow = new Date().getTime();			
			var dTime = timeNow - FwRw.timeClicked;		// how long since clicked
			if (dTime < FwRw.timeSkip)					// quick click, go forward one quick step
			{
				ffwdRewAdjust(FwRw.skip);
			}
		}
		FwRw.divR.ontouchend = function(e)	// FastForward or Rewind clicked
		{
			iPadTrace2("REW up");
			e.preventDefault();
			clearTimeout(FwRw.timer);					// cancel any pending timer
			var timeNow = new Date().getTime();			
			var dTime = timeNow - FwRw.timeClicked;		// how long since clicked
			if (dTime < FwRw.timeSkip)					// quick click, go forward one quick step
			{
				ffwdRewAdjust(FwRw.skip);
			}
		}
	}
	else
	{
		$("#scrollGray").bind('mousedown', b_scroll_down);
	}
});

$(window).load(function () {
  reportLoaded('window');
  getUrlVars();
  enableDisableControls();
  getSCORMAPI(window);
});

$(window).unload(function () {
	SCORM_finish();
});


function iPadTrace(kText)
{
	if (iPad && iPadTraceConsole)
	{
		iPadTraceText += kText + "<br />";
		diviPadDebug.innerHTML = iPadTraceText;
	}
}
function iPadTrace2(kText)
{
	if (iPad)
	{
	//	iPadTraceText += kText + "<br />";
	//	diviPadDebug.innerHTML = iPadTraceText;
	}
}

function reportLoaded(kValue)
{
	// trace ("report loaded : " + kValue);
	switch(kValue)
	{
				case 'dom':		
								$("#loadingData").fadeOut('fast');
								DOMLoaded = true;
								iPadTrace("DOM done");
								console.log("loading time to DOM ready: " + (new Date().getTime() - qStartTime) + 'ms');
								elementsLoaded++;
								
		break;	case 'window':	$("#loadingImages").fadeOut('fast');
								windowLoaded = true;
								iPadTrace("Window done");
								console.log("loading time to Window ready: " + (new Date().getTime() - qStartTime) + 'ms');
								elementsLoaded++;
								
		break;	case 'audio':	if (audioReported) return;			// ignore multiple audio reports - typical of Android
		
								if (!iPad)
								{
									$("#loadingAudio").fadeOut('fast');
									console.log("loading time to Audio ready: " + (new Date().getTime() - qStartTime) + 'ms');
									elementsLoaded++;
									audioReported = true;
								}
		break;
	}
	if (iPad && kValue != 'audio')
	{
		if (DOMLoaded && windowLoaded)
		{
			iPadTrace ("iPad slide is ready, no audio needed");
			$("#slideLoading").fadeOut('fast');
			divTimeDisplay.innerHTML = "Ready.";
			enablePlaySlide();											// show the manual (>) play button
		}
	}
	else if (elementsLoaded == 3)
	{
		$("#slideLoading").fadeOut('fast');
		
		if (iPad)
		{
			// not possible to get here, audio never loads
		}
		else if (isAndroid)
		{
			// trace("		Android slide ready");
			divTimeDisplay.innerHTML = "Ready.";
			enablePlaySlide();
		}
		else	// non tablet
		{
			// trace("		Desktop slide ready");
			// enablePlaySlide();		// this format, you get a button to start playing
			autoPlay();					// this format, slide autoplays
		}
	}
}