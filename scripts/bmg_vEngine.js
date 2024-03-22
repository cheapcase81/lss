function manageTimeDisplay(kUpdate)	// update FPS and time every second
{
	VE.fps++;					// count another frame
	
	var timeNow = new Date().getTime();
	var currentSecond = Math.floor(timeNow / 1000);
	if (kUpdate == 1) updateTimeDisplay();				// update it always if scrubbing timeline
	
	if (currentSecond != VE.lastSecond)					// if it's a different second, update the time display
	{
		if (kUpdate == 0) updateTimeDisplay();			// only update it once a second if running dynamic updates
		VE.lastFPS = VE.fps;							// only show totals
		VE.fps = 0;
		VE.lastSecond = currentSecond;
		// if (currentSecond % 2 == 0) iPadTrace ("     VT: " + vT + ", AP: " + getAudioPosition());
	}
}
function startUpdating()		// initialize the animation update loop based on playing audio
{
	VE.playing = true;						// activate vector engine playing to audio
	VE.fps = 0;								// reset frame count
	VE.lastTime = new Date().getTime();		// remember last update time
	
	getAudioLength();						// check the audio time again, sound may have finished loading
	smA.lastPos = getAudioPosition();		// check the current audio position, need to interpolate sometimes
	smA.lastTime = VE.lastTime;				// the time of the last known audio position update
	smA.buffering = true;
	// iPadTrace ("Updating Started ........");
	
	VE.timer = window.setTimeout(dynamicUpdate, VE.frameTime);		// setup first update
}
function stopUpdating()			// stop the updating loop.  Any timer pending is cancelled
{
	// iPadTrace ("..... Updating Stopped");
	clearTimeout(VE.timer);
	VE.playing = false;
}
function dynamicUpdate()		// update everything based on the audio position
{
	// calculate the time for the next update for smooth animation
	
	var timeNow = new Date().getTime();				// current time
	var dTime = timeNow - VE.lastTime;				// how long since last update
	var nextUpdateTime = 2 * VE.frameTime - dTime;	// time to next update, try to sustain even frame rate
	if (nextUpdateTime < 15) nextUpdateTime = 15;	// not too agressive, could even be in the past
	VE.lastTime = timeNow;							// remember for next time
	
	vT = getAudioPosition();						// sets vT from the audio current position
	var vTActual = vT;
	if (vT == smA.lastPos)							// polling interval has not updated the sound position, extrapolate
	{
		if (smA.buffering == false)					// but only if not buffering (assumed before first update)
		{
			vT += (timeNow - smA.lastTime);			// use time since last audio position was reported instead
			//trace("---,NOW," + vTActual + "," + vT + "," + (vT / smA.length) + "," + smA.length);
		}
		else
		{
			//trace("---,BUF," + vTActual + "," + vT + "," + (vT / smA.length) + "," + smA.length);
		}
	}
	else								// there is a new position reported, vT is ok, remember this one
	{
		smA.buffering = false;			// sound is considered no longer buffering after at least one update
		smA.lastPos = vT;				// remember last position
		smA.lastTime = timeNow;			// remember time of last position update
		//trace("---,POS," + vTActual + "," + vT + "," + (vT / smA.length) + "," + smA.length);
	}
	if (vT > smA.length) vT = smA.length;
	manageTimeDisplay(0);
	updateScene();
	updatePlayhead();
	
	if (VE.playing)
	{
		VE.timer = window.setTimeout(dynamicUpdate, nextUpdateTime);		// cue next update
	}
}
function staticUpdate()			// update everything based on vT (audio is not playing)
{
	manageTimeDisplay(1);		// update the timer every time too
	updateScene();
	updatePlayhead();
}
function updateScene()
{
	if (vT > vT0)					// time moved forward, this part is optimized for increasing vT
	{
		while(vBottom < nV && vvv[vBottom].t1 <= vT) setVector(vBottom++, 1);		// look for contiguous vectors now fully in the past
		while(vTop < nV && vvv[vTop].t0 <= vT) vTop++;								// look for new future vectors now in the present
		vUpdateActiveVectors();													// update all vectors within range
		if (vCC.cc == 1) vUpdateCC_up();										// optimized to look for the next CC
	}
	else if (vT < vT0)				// time moved back, this part is optimized for decreasing vT
	{
		while(vTop > 0 && vvv[vTop - 1].t0 >= vT) setVector(--vTop, 0);			// look for top vectors now back in the future
		while(vBottom > 0 && vvv[vBottom - 1].t1 >= vT) vBottom--;				// look for bottom vectors now in the present
		vUpdateActiveVectors();													// update all vectors within range
		if (vCC.cc == 1) vUpdateCC_down();										// optimized to look for the previous CC
	}
	vT0 = vT;
}	
function vUpdateActiveVectors()		// update all vectors within range, include vBottom, exclude vTop
{
	for (iV = vBottom; iV < vTop; iV++)
	{
		setVector(iV, within(0, (vT - vvv[iV].t0) / vvv[iV].dt, 1));
	}
}
function vUpdateCC_up()
{
	// locate the correct line of text
	while(ccTime[vCC.iCC + 1] <= vT && vCC.iCC < vCC.nCC) { vCC.iCC++; } // trace ("next cc: " + vCC.iCC); }
	if (vCC.iCC != vCC.last)		// only update when it changes
	{
		vCC.divText.innerHTML = ccText[vCC.iCC];
		vCC.last = vCC.iCC;
	}
}
function vUpdateCC_down()
{
	// locate the correct line of text
	while(ccTime[vCC.iCC] > vT && vCC.iCC > 0) { vCC.iCC--; } // trace ("previous cc: " + vCC.iCC); }
	if (vCC.iCC != vCC.last)		// only update when it changes
	{
		vCC.divText.innerHTML = ccText[vCC.iCC];
		vCC.last = vCC.iCC;
	}
}
function setMovieMapFrame1(kO)
{
	child0 = vvv[kO].child0;										// base child for this object
	
	for (cJ = 0; cJ < vvv[kO].nC; cJ++)								// step through all children of this object
	{
		childID = child0 + cJ;										// index for specific child, serialized list for entire slide
		mmI1 = mmIndex[childID][1];									// indexed entry for this child, this frame, points to a unique position
		mmLast[childID] = mmI1;
		
		if (mmI1 == 0)
		{
			mmK[childID].style.display = 'none';					// object does not exist on frame 1
		}
		else
		{
			mmI1 = Math.abs(mmI1);									// object does exist on frame 1, initialize
			mmK[childID].style.left		= mmX[mmI1] + "px";
			mmK[childID].style.top		= mmY[mmI1] + "px";
			mmK[childID].style.width	= mmW[mmI1] + "px";
			mmK[childID].style.height	= mmH[mmI1] + "px";
			mmK[childID].style.opacity	= mmA[mmI1];
			mmK[childID].style.filter	= 'alpha(opacity=' + (mmA[mmI1] * 100) + ')';
			mmK[childID].style.display	= 'block';
		}
	}
}
	
	
	
function setVector(kV, kP)					// set the value of vector kV at parametric time kP (0 .. 1)
{
	var qW;
	var qH;
	var qX;
	var qY;
	var qA;
	var qB;
	var qC;
	var qP;
	var qVis;
	
	var qE = vEase(kP, vvv[kV].ease);				// parametric 0 to 1, now modulated by ease curve
	switch(vvv[kV].vID)
	{
		// motion
		//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
		case 1:	// x
			qX = vvv[kV].x + vvv[kV].dx * qE;		// an x-position vector
			veK[kV].style.left	= qX + "px";
			break;
		case 2:	// y
			qY = vvv[kV].y + vvv[kV].dy * qE;		// a y-position vector
			veK[kV].style.top	= qY + "px";
			break;
		case 3:	// xy
			qX = vvv[kV].x + vvv[kV].dx * qE;		// an x-position vector
			qY = vvv[kV].y + vvv[kV].dy * qE;		// a y-position vector
			veK[kV].style.left	= qX + "px";
			veK[kV].style.top	= qY + "px";
			break;
			
		// scales
		//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
		case 10:	// sl
			qW = vvv[kV].w + vvv[kV].dw * qE;		// simply scale from left
			veK[kV].style.width = qW + "px";
			break;
		case 11:	// st
			qH = vvv[kV].h + vvv[kV].dh * qE;		// simply scale from top
			veK[kV].style.height = qH + "px";
			break;
		case 12:	// sr
			qW = vvv[kV].w + vvv[kV].dw * qE;		// width
			qX = vvv[kV].x - qW;					// base x locks right edge
			veK[kV].style.left	= qX + "px";
			veK[kV].style.width	= qW + "px";
			break;
		case 13:	// sb
			qH = vvv[kV].h + vvv[kV].dh * qE;		// height
			qY = vvv[kV].y - qH;					// base y locks bottom edge
			veK[kV].style.height	= qH + "px";
			veK[kV].style.top		= qY + "px";
			break;
		case 14:	// sx
			qW = vvv[kV].w + vvv[kV].dw * qE;		// width
			qX = vvv[kV].x - qW / 2;				// base x anchors center
			veK[kV].style.left	= qX + "px";
			veK[kV].style.width	= qW + "px";
			break;
		case 15:	// sy
			qH = vvv[kV].h + vvv[kV].dh * qE;		// height
			qY = vvv[kV].y - qH / 2;				// base y is center
			veK[kV].style.height	= qH + "px";
			veK[kV].style.top		= qY + "px";
			break;
		case 16:	// sxy
			qW = vvv[kV].w + vvv[kV].dw * qE;		// width
			qH = vvv[kV].h + vvv[kV].dh * qE;		// height
			qX = vvv[kV].x - qW / 2;				// base x locks center
			qY = vvv[kV].y - qH / 2;				// base y locks center
			veK[kV].style.left		= qX + "px";
			veK[kV].style.width 	= qW + "px";
			veK[kV].style.height	= qH + "px";
			veK[kV].style.top		= qY + "px";
			break;
		case 17:	// s (scale from anchor point)
			qX = vvv[kV].x + vvv[kV].dx * qE;		// x location
			qY = vvv[kV].y + vvv[kV].dy * qE;		// y location
			qW = vvv[kV].w + vvv[kV].dw * qE;		// width
			qH = vvv[kV].h + vvv[kV].dh * qE;		// height
			veK[kV].style.left		= qX + "px";
			veK[kV].style.top		= qY + "px";
			veK[kV].style.width 	= qW + "px";
			veK[kV].style.height	= qH + "px";
			break;
			
		// wipes
		//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
		case 20:	// wl
			qW = vvv[kV].w + vvv[kV].dw * qE;					// a wipe from left
			veK[kV].style.width = qW + "px";
			break;
		case 21:	// wt
			qH = vvv[kV].h + vvv[kV].dh * qE;					// a wipe from top
			veK[kV].style.height = qH + "px";
			break;
		case 22:	// wr
			qW = Math.floor(vvv[kV].w + vvv[kV].dw * qE);		// width, rounding prevents pixel jumps
			qX = Math.floor(vvv[kV].x - qW);					// base x is right edge
			qB = vvv[kV].bw - qW;								// background reverse offset
			veK[kV].style.left	= qX + "px";
			veK[kV].style.width	= qW + "px";
			veK[kV].style.backgroundPosition = -qB + 'px 0px';
			break;
		case 23:	// wb
			qH = Math.floor(vvv[kV].h + vvv[kV].dh * qE);		// height
			qY = Math.floor(vvv[kV].y - qH);					// base y is bottom edge
			qC = vvv[kV].bh - qH;								// background reverse offset
			veK[kV].style.height	= qH + "px";
			veK[kV].style.top		= qY + "px";
			veK[kV].style.backgroundPosition = '0px ' + -qC + 'px';
			break;
		case 24:	// wx
			qW = Math.floor(vvv[kV].w + vvv[kV].dw * qE);		// width
			qX = Math.floor(vvv[kV].x - qW / 2);				// base x is center
			qB = Math.floor((vvv[kV].bw - qW) / 2);								// background reverse offset
			veK[kV].style.left	= qX + "px";
			veK[kV].style.width	= qW + "px";
			veK[kV].style.backgroundPosition = -qB + 'px 0px';
			break;
		case 25:	// wy
			qH = Math.floor(vvv[kV].h + vvv[kV].dh * qE);		// height
			qY = Math.floor(vvv[kV].y - qH / 2);				// base y is center
			qC = Math.floor((vvv[kV].bh - qH) / 2);								// background reverse offset
			veK[kV].style.height	= qH + "px";
			veK[kV].style.top		= qY + "px";
			veK[kV].style.backgroundPosition = '0px ' + -qC + 'px';
			break;
		case 26:	// wxy
			qW = Math.floor(vvv[kV].w + vvv[kV].dw * qE);		// width
			qH = Math.floor(vvv[kV].h + vvv[kV].dh * qE);		// height
			qX = Math.floor(vvv[kV].x - qW / 2);				// base x is center
			qY = Math.floor(vvv[kV].y - qH / 2);				// base y is center
			qB = Math.floor((vvv[kV].bw - qW) / 2);								// background reverse offset
			qC = Math.floor((vvv[kV].bh - qH) / 2);								// background reverse offset
			veK[kV].style.left		= qX + "px";
			veK[kV].style.top		= qY + "px";
			veK[kV].style.width		= qW + "px";
			veK[kV].style.height	= qH + "px";
			veK[kV].style.backgroundPosition = -qB + 'px ' + -qC + 'px';
			break;
			
		case 30:	// p - spritesheet
			qP = (Math.floor(vvv[kV].p + vvv[kV].dp * qE) - 1) % vvv[kV].np;	// the current frame number, base 0
			qX = qP % vvv[kV].px;												// which column, px = number of frames in x
			qY = Math.floor(qP / vvv[kV].px);									// which row, py = number of frames in y
			qB = qX * vvv[kV].pw;												// pw = width of one frame
			qC = qY * vvv[kV].ph;												// ph = height of one frame
			
			veK[kV].style.backgroundPosition = -qB + 'px ' + -qC + 'px';	// show current frame as background
			//trace("np: " + vvv[kV].np + " dp: " + vvv[kV].dp + ", p: " + vvv[kV].p + ", qE: " + qE + ", qP: " + qP + " x: " + qX + " y: " + qY + " b:" + qB + " c: " + qC);
			break;
			
		case 31:	// p - movieMap
			//trace("--------------------------------------------vector 31");
			qP = (vvv[kV].p + vvv[kV].dp * qE);						// the current frame number, base 1, up to precisely (p + dP)
			qP0 = Math.floor(qP);									// the base frame - base for interpolation
			qP1 = Math.floor(qP + 1);								// the ceiling frame
			qDP = qP - qP0;											// fractional distance between previous and next frame
			child0 = vvv[kV].child0;								// base child for this object
			//trace("		qE:" + qE + ", qp: " + qP + ", qP0: " + qP0 + ", qP1: " + qP1 + ", qDP: " + qDP + ", nP: " + vvv[kV].np);
			if (vvv[kV].loop)										// if it's a looping one, cycle with 1st frame instead of final frame
			{
				qP0 = ((qP0 - 1) % vvv[kV].np) + 1;					
				qP1 = ((qP1 - 1) % vvv[kV].np) + 1;						
				//trace(" loop - qE:" + qE + ", qp: " + qP + ", qP0: " + qP0 + ", qP1: " + qP1 + ", qDP: " + qDP + ", c0: " + child0 + ", nC: " + vvv[kV].nC);
			}
			
			for (cJ = 0; cJ < vvv[kV].nC; cJ++)						// step through all children of this object
			{
				childID = child0 + cJ;								// index for specific child, serialized list for entire slide
				mmI1 = mmIndex[childID][qP0];						// indexed entry for this child, this frame, points to a unique position
				//trace (" > child " + childID + ", mmI1: " + mmI1);
				if (mmI1 > 0)										// this is a dynamic and visible frame, do a full interpolated update
				{
					mmI2 = Math.abs(mmIndex[childID][qP1]);				// data for the next frame
					if (mmI2 == 0) mmI2 = mmI1;							// if object ends here, don't extrapolate to empty frame, hold this frame steady
					mmLast[childID] = mmI1;
					//trace("interpolated update - mmI2: " + mmI2);

					qX = mmX[mmI1] + (mmX[mmI2] - mmX[mmI1]) * qDP;		// interpolated x position
					qY = mmY[mmI1] + (mmY[mmI2] - mmY[mmI1]) * qDP;		// interpolated y position
					qW = mmW[mmI1] + (mmW[mmI2] - mmW[mmI1]) * qDP;		// interpolated width
					qH = mmH[mmI1] + (mmH[mmI2] - mmH[mmI1]) * qDP;		// interpolated height
					qA = mmA[mmI1] + (mmA[mmI2] - mmA[mmI1]) * qDP;		// interpolated alpha
					
					//trace("x: " + qX + ", y: " + qY + ", w: " + qW + ", h: " + qH + ", a: " + qA);
					
					mmK[childID].style.left		= qX + "px";
					mmK[childID].style.top		= qY + "px";
					mmK[childID].style.width	= qW + "px";
					mmK[childID].style.height	= qH + "px";
					mmK[childID].style.opacity	= qA;
					mmK[childID].style.filter	= 'alpha(opacity=' + (qA * 100) + ')';
					mmK[childID].style.display	= 'block';
				}
				else if (mmI1 != mmLast[childID])
				{
					//trace("static update - mmLast: " + mmLast[childID]);
					mmLast[childID] = mmI1;
					
					// it's static, but different from previous update
					if (mmI1 == 0)
					{
						// trace("object not present here - hidding it now");
						// not visible, and it wasn't last time, make invisible now
						mmK[childID].style.display = 'none';
					}
					else
					{
						// it's static, and visible, update without interpolation
						mmI1 = -mmI1;
						// trace ("static update to index " + mmI1);
						mmK[childID].style.left		= mmX[mmI1] + "px";
						mmK[childID].style.top		= mmY[mmI1] + "px";
						mmK[childID].style.width	= mmW[mmI1] + "px";
						mmK[childID].style.height	= mmH[mmI1] + "px";
						mmK[childID].style.opacity	= mmA[mmI1];
						mmK[childID].style.filter	= 'alpha(opacity=' + (mmA[mmI1] * 100) + ')';
						mmK[childID].style.display	= 'block';
					}
				}
			}
			break;
		
		// Alpha - uncommon by itself, most vectors have a built-in alpha that handles visibility integrally

		case 40:	// alpha
			qA = vvv[kV].a + vvv[kV].da * qE;					// an alpha vector, can use ease curves
			veK[kV].style.opacity = qA;
			veK[kV].style.filter = 'alpha(opacity=' + (qA * 100) + ')';
			veK[kV].style.display = (qA == 0) ? 'none' : 'block';
			break;
			
	}
	switch(vvv[kV].alpha)	// handle concurrent automatic alpha
	{
		case 1:		// set to a set level
			qA = vvv[kV].aa;
			veJ[kV].fadeTo(0, qA);
			break;
		case 2:		// auto linear fade
			qA = vvv[kV].aa + vvv[kV].daa * kP;
			veJ[kV].fadeTo(0, qA);
			break;
		case 3:		// two-value envelope
			if (kP < 0.5)
			{
				qA = vvv[kV].aa + vvv[kV].daa * kP * 2;
			}
			else
			{
				qA = vvv[kV].a2 + vvv[kV].da2 * (kP - 0.5) * 2;
			}
			veJ[kV].fadeTo(0, qA);
			break;
	}
	switch(kP)
	{
		case 0:		// what happens before this vector
			qVis = ((vvv[kV].vis & 4) == 0) ? 'none' : 'block';
			veK[kV].style.display = qVis;
			break;
		case 1:		// what happens after this vector
			qVis = ((vvv[kV].vis & 1) == 0) ? 'none' : 'block';
			veK[kV].style.display = qVis;
			break;
		default:
			qVis = ((vvv[kV].vis & 2) == 0) ? 'none' : 'block';
			veK[kV].style.display = qVis;
			break;
	}
}
// trace("Vector Engine initialized");