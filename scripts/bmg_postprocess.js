nV = vvv.length;
vT = 0;

vCC.nCC = ccText.length - 1;

if (hasMovieMaps)
{
	// trace("postProcess: hasMovieMaps");
	// initialize children
	//=====================================
		mmNC = mmChildren.length;		// total number of serialized movieMap children
		for (j = 0; j < mmNC; j++)
		{
			mmLast[j]	= -99999;										// the last frame updated, forces a match on first entry
		}
	
	// unpack state index.  Indices are:
	//		-i = a static state for the frame, needs no interpolation
	//		+i = a dynamic state (will be different next frame), requires interpolation
	//		 0 = the child is not visible in this frame
	//		.nnn = repeat the last value nnn times
	//=====================================
	//trace("unpacking index");
	for (j = 0; j < mmNC; j++)
	{
		mmIndex[j] = [];
		nK = mmIndexPacked[j].length;
		lastValue = 0;
		
		for (k = 0; k < nK; k++)
		{
			mmI = mmIndexPacked[j][k];
			if (mmI > 0 && mmI < 1)
			{
				nRepeat = Math.round(mmI * 100);		// it's a repeat code
				for (r = 0; r < nRepeat; r++)
				{
					mmIndex[j].push(lastValue);
				}
			}
			else
			{
				mmIndex[j].push(mmI);
				lastValue = mmI;
			}
		}
	}
}
