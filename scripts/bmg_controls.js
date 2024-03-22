function updateTimeDisplay()	// update the time display at bottom right
{
	// updates the current time stamp at the bottom right, mm:ss, show FPS for now
	// getAudioLength();											// update every second, in Android, it takes several seconds for it to update right
	// trace("		at ::: " + soundTrack.position + "ms");
	var kText = mmssFormat(vT) + " of " + smA.label;
	if (testMode) kText += " FPS: " + VE.lastFPS;
	divTimeDisplay.innerHTML = kText;
	if (!slideComplete) testSlideComplete();
}
function testSlideComplete()
{
	if (slideCompleteThreshold > 0)
	{
		if ((vT/smA.length) > slideCompleteThreshold)
		{
			// trace("slide reached completion threshold");
			slideComplete = true;
			SCORM_finish();
		}
	}
	else
	{
		if (vT > (smA.length - slideCompleteEdge))
		{
			// trace("slide reached completion edge");
			slideComplete = true;
			SCORM_finish();
		}
	}
}
function updatePlayhead()		// position the playhead according to vT
{
	// playhead is positioned according to vT which ranges from 0 to audio length (smA.length)
	// a div showing blue is revealed to the left of the playhead
	
	var xPos = within(0, vT / smA.length * PHd.width, smA.length);		// calculate from vT/audio length
	//trace ("xPos - vT: " + vT + ", vT/length: " + (vT / smA.length) + ", length: " + smA.length);
	
	PHd.divBlue.style.width = xPos + "px";		// blue shading to the left of playhead is a scaling div
	xPos -= 4;									// adjust because playhead sticks out a bit at 0 due to its width
	PHd.div.style.left = xPos + "px";			// position the playhead
	if (vT > 0 && playSlideActive)
	{
		disablePlaySlide();
	}
}
function playPause()			// Play/Pause button functionality
{
	// if it's stopped, never started, start from current position (user could've moved the playhead)
	// if it's playing, pause
	// if it's paused, unpause
	// if it's finished and the playhead is at the end, restart from the beginning, otherwise, user has moved the playhead, play from current position 
	if (playSlideActive)
	{
		disablePlaySlide();
	}
	// trace ("playPause soundMode: " + soundMode);
	switch(soundMode)
	{
		
				case mSTOPPED:	playAudio();		trace("		was stopped, playing");
		break;	case mPLAYING:	pauseAudio();		trace("		was playing, pausing");
		break;	case mPAUSED:	
			if (isAndroid || iPad)
			{
				playPauseAndroid();					trace("		was paused in android, playing");
			}
			else
			{
				playPauseAndroid();
				//playAudio();						trace("		was paused, playing");
			}
		
		break;	case mFINISHED:						trace("		was finished, playing from 0");
			if (vT == smA.length) vT = 0;
			playAudio();
			break;
	}
}

function CC_update()
{
	if (vCC.h != vCC.hTarget)
	{
		vCC.h += (vCC.hTarget > vCC.h) ? 2 : -2;
	}
	vCC.divArea.style.height = vCC.h + 'px';
	vCC.divArea.style.display = (vCC.h == 0) ? 'none' : 'block';
	if (vCC.h != vCC.hTarget) 	vCC.timer = window.setTimeout(CC_update, 30);		// continue updating CC area
}
function setup_CC()
{
	// instant setting of the closed caption area for instant setting, setup on page load to follow user preferences
	vCC.cc = 0;
	var vCC_cookie = getCookie("bmgi_player_cc");
	if (vCC_cookie == "1")
	{
		vCC.cc = 1;
	}
	vCC.divButton.style.backgroundPosition =  (-48 * (vCC.cc)) + 'px 0px';		// show correct state in button
	vCC.h = vCC.hMax * vCC.cc;													// height of CC div
	vCC.last = -1;																// reset last displayed value to force refresh
	vCC.divArea.style.height = vCC.h + 'px';									// set div height
	vCC.divArea.style.display = (vCC.h == 0) ? 'none' : 'block';				// set div visibility
}	
function b_playSlide_click()
{
	// start the slide
	divPlaySlide.fadeTo("fast", 0, function() { divPlaySlide.hide(); });
	playSlideActive = false;
	if (isAndroid)
	{
		// playAndroid();
		playPause();
	}
	else
	{
		playPause();
	}
}
function enablePlaySlide()
{
	divPlaySlide.show();
	divPlaySlide.fadeTo("fast", 1);
	playSlideActive = true;
}
function disablePlaySlide()
{
	divPlaySlide.hide();
	playSlideActive = false;
}
function autoPlay()
{
	divPlaySlide.hide();
	playSlideActive = false;
	playPause();
}
function enableDisableControls()
{
	// enable or disable controls depending if launched direct or from the menu
	testMode = (vars["testMode"] == "enabled") ? 1 : 0;
	// trace("testMode: " + testMode);
	
	// figure out own slideID, what's next, what's behind
	var nSlides = slideList.length;
	for (i = 0; i < nSlides; i++)
	{
		if (slideList[i] == slideID)
		{
			// trace("matched slide to #" + i);
			if (i > 0) prevSlideID = slideList[i-1];
			if (i < nSlides - 1) nextSlideID = slideList[i+1];
		}
	}
	if (testMode == 1)
	{
		divAutoNext.style.display = 'block';
		if (nextSlideID != "") divNextSlide.style.display = 'block';
		if (prevSlideID != "") divPrevSlide.style.display = 'block';
		divSlideGuide.style.display = 'block';
		
		// trace("autoNext initially: " + autoNext);
		var kNext = Number(vars["autoNext"]);
		if (kNext == NaN) kNext = 0;
		if (kNext > 0) 
		{
			// trace("autoNext enabled from url");
			autoNext = 1;
		}
		// trace("autoNext is finally: " + autoNext);
		divAutoNext.style.backgroundPosition =  (-552 + 48 * (autoNext)) + 'px 0px';
	}
}



// Scroll Bar Actions
//_________________________________________________________________________

function b_scroll_down(e)
{
	// user started to click on the scroll area
	//
	//trace("scroll down");
	
	b_down = "scroll";
	shiftDown = e.shiftKey;
	controlDown = e.ctrlKey;
	
	PHd.left = $('#scrollGray').offset().left;						// calculate relative position of click
	var x = within(0, e.pageX - PHd.left - 8, PHd.width);
	
	var target = e.target != null ? e.target : e.srcElement;		// IE uses srcElement, others use target
	target.ondragstart = function() { return false; };				// prevent IE from trying to drag an image
	
	vT = x / PHd.width * smA.length;								// adjust vT based on location of playhead
	staticUpdate();													// adjust scene in real-time
	iPadTrace("b_scrollDown to " + x + " pX: " + e.pageX);

	smA.wasPlaying = (soundMode == mPLAYING);						// remember if audio was playing
	if (smA.wasPlaying) pauseAudio();								// audio is paused while playhead moves, restored on release
	lastMouseX = x;		// previously -1
	initialMouseX = x;
	
	$(document).bind('mousemove', b_scrollMove);
	document.onmouseup = b_scroll_up;
	document.body.focus();										// cancel out any text selections
	document.onselectstart = function () { return false; };		// prevent text selection in IE
	return false;												// prevent text selection (except IE)*/
}
function b_scroll_up()					// playhead released
{
	// user released the playhead.  stop functions that track user position, restore audio playing if it was initially playing
	trace("scroll up");
	iPadTrace("b_scroll_up");
	
	$('#scrollGray').unbind('mousemove');
	$(document).unbind('mousemove');
	document.onmousemove = null;
	document.onmouseup = null;
	document.onselectstart = null;
	
	if (vT < smA.length && smA.wasPlaying) 
	{
		if (isAndroid)
		{
			playPauseAndroid();
		}
		else
		{
			playPauseAndroid();
			//playAudio();
		}
	}
}
function b_scrollMove(e)
{
	iPadTrace("b_scrollMove");
	// mouse is moving
	if (shiftDown == true)
	{
		var newX = e.pageX - PHd.left - 8;
		if (newX != lastMouseX)
		{
			lastMouseX = newX;
			var dX = (newX - initialMouseX) * 0.1;
			var x = within(0, initialMouseX + dX, PHd.width);
			vT = x / PHd.width * smA.length;
			staticUpdate();
		}
	}
	else
	{
		//trace ("mouse moving - ex: " + e.pageX);
		x = within(0, e.pageX - PHd.left - 8, PHd.width);
		if (x != lastMouseX)
		{
			lastMouseX = x;
			vT = x / PHd.width * smA.length;
			staticUpdate();
		}
	}	
}


// FFWD / REWIND handlers
//_________________________________________________________________________

function b_ffwdRew_down(kEvent, kDir)	// FastForward or Rewind clicked
{
	// clicking the buttons only starts a timer.  If held long enough (> FwRw.timeSkip) starts fluidly scanning
	
	if (kDir == 1)
	{
		//trace("ffwd down");
		b_down = "ffwd";
	}
	else
	{
		//trace("rew down");
		b_down = "rew";
	}
	if (iPad)
	{
		kEvent.preventDefault();
	}
	else
	{
		shiftDown	= kEvent.shiftKey;
		controlDown	= kEvent.ctrlKey;
		FwRw.dir 	= kDir;													// preserve direction +1/-1
		// trace(" FFWD/REW isAndroid: " + isAndroid);
		if (isAndroid == false)	
		{
			// trace("activating FFWD/REW fluid");
			FwRw.timer 	= window.setTimeout(ffwdRewFluid, FwRw.timeSkip);		// start timer, in a short while, begin fluid advance/rew, disabled in Android
		}
		FwRw.timeClicked = new Date().getTime();							// time clicked
		document.onmouseup = b_ffwdRew_up;
	}
}
function b_ffwdRew_up(kEvent, kDir)		// ffwd/rew button released
{
	// releasing the button in a short time (< FwRw.timeSkip) makes the playhead skip one interval (FwRw.skip)
	// otherwise, user must've been fluidly scanning, nothing to do
	if (b_down == "ffwd" || b_down == "rew")
	{
		if (kDir == 1)
		{
			//trace("ffwd up");
		}
		else
		{
			//trace("rew up");
		}
		if (!iPad)
		{
			// iPadTrace2("FFWD/REW up");
			if (isAndroid == false)	clearTimeout(FwRw.timer);					// cancel any pending timer
			var timeNow = new Date().getTime();			
			var dTime = timeNow - FwRw.timeClicked;		// how long since clicked
			if (isAndroid)
			{
				ffwdRewAdjust(FwRw.skip);
			}
			else
			{
				if (dTime < FwRw.timeSkip)					// quick click, go forward one quick step
				{
					ffwdRewAdjust(FwRw.skip);
				}
			}
			document.onmouseup = null;
		}
	}
}
function ffwdRewAdjust(kDT)		// centralized place to adjust vT from a ffwd/rew event
{
	// adjust the current time and consequently the scene and if playing, the audio position
	// used during a FFWD or REW event
	// user tapped the FFW or REW buttons without holding down, this is the button release handler, do an instant skip
	
	// iPadTrace2("adjust");
	timeChange = kDT;
	if (shiftDown) timeChange = 0.1 * kDT;
	if (controlDown)
	{
		timeChange = 0.001 * kDT;
		var vTemp = vT + (FwRw.dir * timeChange);
		var vInRange = false;
		var nextUp = -1;
		var nextDown = -1;
		var dUp = 9999999;
		var dDown = 9999999;
		
		for (i = 0; i < nV; i++)
		{
			if (vvv[i].t0 <= vTemp && vvv[i].t1 >= vTemp) 
			{
				vInRange = true;		// new position is within a vector, all is ok
			}
			var dt0 = vvv[i].t0 - vTemp;		// check distance to start of each vector
			if (dt0 > 0 && dt0 < dUp)			// if it's in the future, and it's the shortest distance
			{
				dUp = dt0;						// track this
				nextUp = i;						// remember this vector as the next one coming up
			}
			var dt1 = vTemp - vvv[i].t1;		// check distance to end of vector
			if (dt1 > 0 && dt1 < dDown)			// if it's in the past and it's the closest
			{
				dDown = dt1;					// track this
				nextDown = i;					// remember this vector as the next one prior
			}
		}
		if (vInRange == false)					// moving to a dead area, fast forward to next available vector
		{
			if (FwRw.dir > 0)					// user is fast forwarding
			{
				if (nextUp > -1)				// if there is a next vector
				{
					timeChange = dUp;			// calculate time distance to start that one next
				}
			}
			else								// user was rewinding
			{
				if (nextDown > -1)				// and there is a previous vector
				{
					timeChange = dDown;			// calculate time distance to end of previous vector
				}
			}
		}
	}
	// trace ("FFW/REW - vT0: " + vT);
	vT = within(0, vT + (FwRw.dir * timeChange), smA.length);
	// trace ("		vT1: " + vT);
	switch(soundMode)
	{
		case mSTOPPED: 
		case mFINISHED:
		case mPAUSED:
			staticUpdate();
			break;
		case mPLAYING:
			smA.buffering = true;
			// trace("set position only");
			soundTrack.setPosition(vT);			// possible buffering may take place here if sound was not fully loaded
			// trace("set position end");
			break;
	}
}
function ffwdRewFluid()			// update vT when ffwd/rew is being held down
{
	// after a small pause (FwRw.timeSkip), this function starts getting called to fluidly scan the timeline
	// user is holding down the FFw or Rew buttons
	// iPadTrace2("FF/RW fluid");
	
	ffwdRewAdjust(FwRw.flow);
	FwRw.timer = window.setTimeout(ffwdRewFluid, FwRw.rate);
}



/* Buttons Down
----------------------------------------------------------------*/

function b_CC_down()
{
	b_down = "cc";
	//trace("cc down");
	vCC.cc = 1 - vCC.cc;
	vCC.divButton.style.backgroundPosition =  (-48 * (vCC.cc)) + 'px -48px';
	document.onmouseup = b_CC_up;
}
function b_home_down()
{
	b_down = "home";
	//trace("home down");
}



function b_playPause_down()
{
	b_down = "playPause";
	//trace("playPause down");
}
function b_guide_down()
{
	b_down = "guide";
	//trace("guide down");
}
function b_prevSlide_down()
{
	b_down = "prevSlide";
	//trace("prevSlide down");
}
function b_nextSlide_down()
{
	b_down = "nextSlide";
	//trace("nextSlide down");
}
function b_autoNext_down()
{
	b_down = "autoNext";
	//trace("autoNext down");
	autoNext = 1 - autoNext;
	divAutoNext.style.backgroundPosition =  (-552 + 48 * (autoNext)) + 'px -48px';
	document.onmouseup = b_autoNext_up;
}
/* Buttons Up
----------------------------------------------------------------*/

function b_CC_up()
{
	if (b_down == "cc")
	{
		//trace("cc up");
		vCC.divButton.style.backgroundPosition =  (-48 * (vCC.cc)) + 'px 0px';
		vCC.hTarget = vCC.hMax * vCC.cc;
		vCC.timer = window.setTimeout(CC_update, 40);		// start updating CC area
		vCC.last = -1;
		vUpdateCC_up();
		setCookie("bmgi_player_cc", vCC.cc);				// remember in a cookie
		document.onmouseup = null;
	}
}
function b_home_up()					// |<- button pressed (home)
{
	if (b_down == "home")
	{
		//trace("home up");
		vT = 0;
		switch(soundMode)
		{
					case mSTOPPED:		staticUpdate();	enablePlaySlide();
			break;	case mPLAYING:		playAudio();
			break;	case mPAUSED:		staticUpdate();	enablePlaySlide();
			break;	case mFINISHED:		staticUpdate();	enablePlaySlide();
			break;
		}
	}
}
function b_playPause_up()				// Play/Pause button
{
	if (b_down == "playPause")
	{
		//trace ("playPause up");
		playPause();
	}
}
function b_guide_up()
{
	if (b_down == "guide")
	{
		//trace("guide up");
		window.location.href = "../index.html";
	}
}
function b_prevSlide_up()
{
	if (b_down == "prevSlide")
	{
		//trace("prevSlide up");
		if (prevSlideID != "")	window.location.href = prevSlideID + ".html?testMode=enabled&autoNext=" + autoNext;
	}
}
function b_nextSlide_up()
{
	if (b_down == "nextSlide")
	{
		//trace("nextSlide up");
		if (nextSlideID != "")	window.location.href = nextSlideID + ".html?testMode=enabled&autoNext=" + autoNext;
	}
}
function b_autoNext_up()
{
	if (b_down == "autoNext")
	{
		//trace("autoNext up");
		divAutoNext.style.backgroundPosition =  (-552 + 48 * (autoNext)) + 'px 0px';
		document.onmouseup = null;
	}
}

// trace("Controls initialized");