function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NWwAwDEKNK":
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

