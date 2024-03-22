var nFindAPITries = 0;
var API = null;
var nMaxTries = 500;
var APIVersion = "";

/*Search for the API - with a limit of 500 tries*/
function ScanForAPI(win)
{
	while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win))
	{
		nFindAPITries++;
		if (nFindAPITries > nMaxTries)
		{
			return null;
		}
		win = win.parent;
	}
	return win.API_1484_11;
}

/*Get the API and Initialize it*/
function GetAPI(win)
{
	if ((win.parent != null) && (win.parent != win))
	{
		API = ScanForAPI(win.parent);
	}
	if ((API == null) && (win.opener != null))
	{
		API = ScanForAPI(win.opener);
	}
	if (API != null)
	{
		APIVersion = API.version;
		API.Initialize("");
	}
}

function BMGIfinish() {

	if (API != null) {
		// Status elements to update:
		// Score --- SetValue("cmi.score.raw", "100");
		
		// Left the slide/window in the normal fashion
		if(jpaudio_completed)
		{
			API.SetValue("cmi.exit","normal");
			API.SetValue("cmi.completion_status", "completed");
		// Left the slide/window before the audio ended
		} else {
			API.SetValue("cmi.exit","suspend");
			API.SetValue("cmi.completion_status", "incomplete");
		}
		
		// Terminate/close the API connection for this SCO
		API.Terminate("");
		
	} else {
	
		alert('Communication with API unsuccessful');
		
	}
}