function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LGrR5IW1VR":
        Script1();
        break;
  }
}

function Script1()
{
  SCORM_SetCompleted();
SCORM_CommitData();
ExecFinish("Finish");
}

