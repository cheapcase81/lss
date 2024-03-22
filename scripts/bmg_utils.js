var showDebug = true;			// IE slows down to a crawl even if messages are not visible but generated
var alertFallback = false;		// IE fallback to post messages
var SCORM_ActivityMode = false;	// if true, handle special issuing completion status
var SCORM_active = false;		// has SCORM been closed already?

if (typeof console === "undefined" || typeof console.log === "undefined") {	// IE has trouble with the console object
	console = {};
	if (alertFallback) {
		console.log = function(msg) {
			alert(msg);
		};
	} else {
		console.log = function() {};
	}
}
function trace(kLog) {			// shorthand and conditional
	if (showDebug) { console.log(kLog); }
}
function trace2(kLog) {			// shorthand and conditional
	if (showDebug) { console.log(kLog); }
}
function within(kA, kB, kC)		// verify a number is in range and valid
{
	if (kB < kA) return (kA);
	if (kB > kC) return (kC);
	if (isNaN(kB)) return (kA);
	return(kB);
}
function mmssFormat(kMSec)		// convert milliseconds to mm:ss, return as object literal or string
{
	var sec = Math.floor((kMSec / 1000) % 60);
	var min = Math.floor((kMSec / 60000) % 60);
	return (min + ':' + (sec < 10 ? '0' + sec : sec));
}
function getUrlVars()
{
    var hashes = window.location.href;
	var kStart = hashes.indexOf('?') + 1;
	var kEnd = hashes.indexOf('#');
	if (kEnd == -1) kEnd = hashes.length;
	if (kStart > -1)
	{
		hashes = hashes.slice(kStart, kEnd);
		var hashList = hashes.split('&');
		
		for(var i = 0; i < hashList.length; i++)
		{
			var hash = hashList[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
	}
}
function setCookie(cookieName, cookieValue)
{
	document.cookie=cookieName + "=" + cookieValue;
}
function getCookie(cookieName)
{
	var i, x, y, cookieValue, ARRcookies;
	
	ARRcookies=document.cookie.split(";");
	cookieValue = "";
	
	for (i = 0; i < ARRcookies.length; i++)
	{
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g,"");
		if (x == cookieName)
		{
			cookieValue = unescape(y);
		}
	}
	return cookieValue;
}
function setupCopyright()
{
	var footerC = document.getElementById("BMG_copyright");
	var copyRight = "";
	copyRight += "Copyright Lean Methods Group. ";
	copyRight += "All rights reserved.";
	copyRight += "<br>No portion may be copied, rewritten, reproduced, modified or used to create any derivative works.";
	footerC.innerHTML = copyRight;
}
	

// SCORM 
//------------------------------------------------------------------------------
var API = null;							// handle to the SCORM API
var MAX_PARENTS_TO_SEARCH = 500;		// number of parent levels to search for the API
var SCORM_version	= "not found";		// "2004" for version 2004 or "1112" for version 1.1/1.2
var API_version		= "not found";		// as specified by the API

function SCORM_showErrors()
{
	if (SCORM_version == "2004")
	{
		trace2("		API Error String: " + API.GetErrorString(API.GetLastError()));
		trace2("		API Error Diagnostic: " + API.GetDiagnostic(API.GetLastError()));
	}
	else
	{
		trace2("		API Error String: " + API.LMSGetErrorString(API.LMSGetLastError()));
		trace2("		API Error Diagnostic: " + API.LMSGetDiagnostic(API.LMSGetLastError()));
	}
}
function SCORM_showValue(kText, k2004_variable, k1112_variable)
{
	if (SCORM_version == "2004")
	{
		trace2("	" + kText + ": " + k2004_variable + ": "	+ API.GetValue(k2004_variable));
	}
	else if (SCORM_version == "1112")
	{
		trace2("	" + kText + ": " + k1112_variable + ": " + API.LMSGetValue(k1112_variable));
	}
}
function SCORM_setValue(k2004_variable, k2004_value, k1112_variable, k1112_value)
{
	if (SCORM_version == "2004")
	{
		API.SetValue(k2004_variable, k2004_value);
	}
	else if (SCORM_version == "1112")
	{
		API.LMSSetValue(k1112_variable, k1112_value);
	}
	//SCORM_showErrors()
}
function SCORM_getValue(k2004_variable, k1112_variable)
{
	if (SCORM_version == "2004")
	{
		return (API.GetValue(k2004_variable));
	}
	else if (SCORM_version == "1112")
	{
		return (API.LMSGetValue(k1112_variable));
	}
	//SCORM_showErrors()
}
function SCORM_terminate()
{
	if (SCORM_version == "2004")
	{
		API.Terminate("");
	}
	else if (SCORM_version == "1112")
	{
		API.LMSFinish("");
	}
}
function SCORM_initialize()
{
	if (SCORM_version == "2004")
	{
		return (API.Initialize(""));
	}
	else if (SCORM_version == "1112")
	{
		return (API.LMSInitialize(""));
	}
}
function SCORM_commit()
{
	if (SCORM_version == "2004")
	{
		return (API.Commit(""));
	}
	else if (SCORM_version == "1112")
	{
		return (API.LMSCommit(""));
	}
}
function ScanForAPI_2004(win)
{
	//trace2(" ScanForAPI_2004() - Scanning for SCORM 2004 API");
	//trace2("--------------------------------------------------------");
	var nParentsSearched  = 0;
	
	while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win))
	{
		nParentsSearched++;
		//trace2("	parent search " + nParentsSearched + " of " + MAX_PARENTS_TO_SEARCH);
		if (nParentsSearched > MAX_PARENTS_TO_SEARCH)
		{
			//trace2("	limit on parent levels exceeded, API for SCORM 2004 not found");
			return null;
		}
		win = win.parent;		// try one level higher
	}
	if (win.API_1484_11 != null)
	{
		//trace2("	Success in finding the SCORM 2004 API - returning handle");
		SCORM_version = "2004";
		return win.API_1484_11;
	}
	else
	{
		//trace2("	Reached final parent without finding the v2004 API");
		return null;
	}
}

function ScanForAPI_1112(win)
{
	//trace2(" ScanForAPI_1112() - Scanning for SCORM v1.1/1.2 API");
	//trace2("--------------------------------------------------------");
	var nParentsSearched  = 0;

	while ( (win.API == null) && (win.parent != null) && (win.parent != win) )
	{
		nParentsSearched++;
		//trace2("	parent search " + nParentsSearched + " of " + MAX_PARENTS_TO_SEARCH);
		if (nParentsSearched > MAX_PARENTS_TO_SEARCH)
		{
			//trace2("	limit on parent levels exceeded, API for SCORM v1.1/1.2 not found");
			return null;
		}
		win = win.parent;		// try one level higher
   }
	if (win.API != null)
	{
		//trace2("	Success in finding the SCORM 1.1/1.2 API - returning handle");
		SCORM_version = "1112";
		return win.API;
	}
	else
	{
		//trace2("	Reached final parent without finding the v1.1/1.2 API");
		return null;
	}
}

function getSCORMAPI(win)
{
	var API_initialized = false;
	
	//trace2("getSCORMAPI()");
	//trace2("=====================================================");
	if ((win.parent != null) && (win.parent != win))
	{
		//trace2("	searching for APIv2004, method 1: start with win.parent");
		API = ScanForAPI_2004(win.parent);
	}
	if ((API == null) && (win.opener != null))
	{
		//trace2("	previous method failed.  Searching for APIv2004, method 2: start with win.opener");
		API = ScanForAPI_2004(win.opener);
	}
	if (API == null)
	{
		//trace2("	SCORM API v2004 was not found, now trying SCORM 1.1/1.2");
		//trace2("	searching for APIv1112, method 1: start with current window");
		API = ScanForAPI_1112(window);
	}
	if ( (API == null) && (window.opener != null) && (typeof(window.opener) != "undefined") )
	{
		//trace2("	previous method failed.  Searching for APIv1112, method 2: start with win.opener");
		API = ScanForAPI_1112(window.opener);
	}
	if (API == null)
	{
		//trace2("	Unable to find either a v2004 or v1112 SCORM API adapter");
		SCORM_active = false;
	}
	else
	{
		//trace2("	Initializing SCORM " + SCORM_version);
		API_initialized = SCORM_initialize();
		if (API_initialized)
		{
			SCORM_active = true;
			//trace2("	SCORM API initialized, SCORM_active = " + SCORM_active);
			// SCORM_showValue("slide init", "cmi.exit", "cmi.core.exit");
			// SCORM_showValue("on slide enter", "cmi.completion_status", "cmi.core.lesson_status");
		}
		else
		{
			SCORM_active = false;
			//trace2("	SCORM API found but did not initialize, SCORM_active = " + SCORM_active);
			// SCORM_showErrors();
		}
	}
}

function SCORM_finish()
{
	//trace2("SCORM_finish()");
	//trace2("--------------------------------------------------------");
	if (SCORM_active)
	{
		//trace2("	SCORM_active = true, now resetting to false");
		SCORM_active = false;
		
		if (API != null)
		{
			// trace2("	API is not null");
			// trace2("	SCORM_ActivityMode = " + SCORM_ActivityMode + ", soundFinishedPlaying = " + soundFinishedPlaying + ", slideComplete = " + slideComplete);
					
			// trace2("	SCORM version " + SCORM_version);
			// SCORM_showValue("before", "cmi.exit", "cmi.core.exit");
			// SCORM_showValue("on slide exit - before", "cmi.completion_status", "cmi.core.lesson_status");
				
			if (SCORM_ActivityMode || soundFinishedPlaying || slideComplete)
			{
				SCORM_setValue("cmi.exit",				"normal",		"cmi.core.exit",			"logout");
				SCORM_setValue("cmi.completion_status",	"completed",	"cmi.core.lesson_status",	"completed");
				//SCORM_setValue("cmi.completion_status",	"completed",	"cmi.core.lesson_status",	"incomplete");
				SCORM_commit();
			}
			else
			{
				// trace2("	sound was not finished, and not in activity mode, and slide was not complete");
				// trace2("	must have left the window on a regular slide, but without reaching threshold");
				
				if (SCORM_getValue("cmi.completion_status", "cmi.core.lesson_status") != "completed")
				{
					// trace2("	activity was not previously completed, marking as incomplete");
					// SCORM_setValue("cmi.exit", "suspend", "cmi.core.exit", "suspend");
					SCORM_setValue("cmi.exit", "logout", "cmi.core.exit", "logout");
					SCORM_setValue("cmi.completion_status",	"incomplete",	"cmi.core.lesson_status",	"incomplete");
					SCORM_commit();
				}
				else
				{
					// trace2("	this slide was previously marked as completed, left as is");
				}
			}
			// trace2("	-------------------------");
			// SCORM_showValue("after", "cmi.exit", "cmi.core.exit");
			// SCORM_showValue("after", "cmi.completion_status", "cmi.core.lesson_status");
				
			SCORM_terminate();
			// trace2("SCORM_terminate() called");
		}
		else
		{
			// trace2("	API was null on exit - no actions taken");
		}
	}
	else
	{
		// trace2("	SCORM_active is false - no actions taken");
	}
}