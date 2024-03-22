function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gJYZb1zZi7":
        Script1();
        break;
      case "6pBdMj5M6Vh":
        Script2();
        break;
      case "68ovvQ2bi2K":
        Script3();
        break;
      case "6QS8VEO4Vjh":
        Script4();
        break;
      case "65wEhltrClW":
        Script5();
        break;
      case "6qeaETsxbGe":
        Script6();
        break;
      case "65eZlsHoIEi":
        Script7();
        break;
      case "6ni4yEzBtTq":
        Script8();
        break;
      case "66RDnAEefNP":
        Script9();
        break;
      case "5xZQ7WrXZlo":
        Script10();
        break;
      case "6a4UW0z1dqb":
        Script11();
        break;
      case "6IJyK4vuwNp":
        Script12();
        break;
      case "6XDR7y01AnN":
        Script13();
        break;
      case "5WJFt13U6kZ":
        Script14();
        break;
      case "6AprKCJQf7T":
        Script15();
        break;
      case "6cYu9yNsOpm":
        Script16();
        break;
      case "5Xw5VypCmNz":
        Script17();
        break;
      case "5x1RM4ThXLe":
        Script18();
        break;
      case "5rB5VKPagTr":
        Script19();
        break;
      case "6ODYKQ9hkCb":
        Script20();
        break;
      case "5tOVkwgKb7w":
        Script21();
        break;
      case "6JacCeLvYMq":
        Script22();
        break;
      case "69Pd2I5W0ai":
        Script23();
        break;
      case "5eg5Sht1pPW":
        Script24();
        break;
      case "6FFXOFF7wIi":
        Script25();
        break;
      case "5zVTtDSIgwB":
        Script26();
        break;
      case "6XngfEMDRwl":
        Script27();
        break;
      case "6OlreKTBaDN":
        Script28();
        break;
      case "63xRWkze9Qw":
        Script29();
        break;
      case "6IOH9uYhSti":
        Script30();
        break;
      case "6R103bT9twb":
        Script31();
        break;
      case "5l3yfPrZ3br":
        Script32();
        break;
      case "5vsJrPSjy4S":
        Script33();
        break;
      case "66H41oaWYYJ":
        Script34();
        break;
      case "5qo4Ak9ZuI6":
        Script35();
        break;
      case "6QJe1aABAfs":
        Script36();
        break;
      case "6iF11IHkQkQ":
        Script37();
        break;
      case "6fEDHYeQp1P":
        Script38();
        break;
      case "60Z6dqicUNC":
        Script39();
        break;
      case "6Ct1g5dnl3f":
        Script40();
        break;
      case "6CUzj4Koe5x":
        Script41();
        break;
      case "6Ywy6D8r9sR":
        Script42();
        break;
      case "5sBvpLGLYXF":
        Script43();
        break;
      case "5XoajtoEwhU":
        Script44();
        break;
      case "6LATfthVJC3":
        Script45();
        break;
      case "5ltOqCUGrxm":
        Script46();
        break;
      case "6l81azI6qTS":
        Script47();
        break;
      case "6Xbt85X5kKJ":
        Script48();
        break;
      case "66N8gufb2Mk":
        Script49();
        break;
      case "6CIKMPZTbSp":
        Script50();
        break;
      case "5vJSUZwUj3u":
        Script51();
        break;
      case "6Nz491qVHzd":
        Script52();
        break;
      case "5jHo9UJFN7S":
        Script53();
        break;
      case "6GJ6gxLGxzh":
        Script54();
        break;
      case "6dGmBJqkcqF":
        Script55();
        break;
      case "6qbqNjx0Wmj":
        Script56();
        break;
      case "6p1bpYsE0gO":
        Script57();
        break;
      case "62YyFCMIH44":
        Script58();
        break;
      case "64t4lwx4CmO":
        Script59();
        break;
      case "5hAEkc1GwHv":
        Script60();
        break;
      case "5cecxYVvb7j":
        Script61();
        break;
  }
}

function Script1()
{
  SCORM_SetCompleted();
SCORM_CommitData();
ExecFinish("Finish");
}

function Script2()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script3()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace5++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script4()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script5()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script6()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script7()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script8()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script9()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace5++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script10()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script11()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script12()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script13()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace5++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script14()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script15()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script16()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script17()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script18()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script19()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script20()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script21()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script22()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script23()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script24()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script25()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script26()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script27()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script28()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script29()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script30()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace5++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script31()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace5++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script32()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script33()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script34()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script35()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script36()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script37()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script38()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script39()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script40()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script41()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script42()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script43()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script44()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace5++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script45()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace5++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script46()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script47()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script48()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script49()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script50()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script51()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script52()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace5++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script53()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace2++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script54()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script55()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script56()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script57()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script58()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script59()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace4++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

function Script60()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces");

var nFace1 = player.GetVar("Face1");
var nFace2 = player.GetVar("Face2");
var nFace3 = player.GetVar("Face3");
var nFace4 = player.GetVar("Face4");
var nFace5 = player.GetVar("Face5");

nFace1++;
nTotal++;

var nPercent1 = (nFace1/nTotal)*100;
var nPercent2 = (nFace2/nTotal)*100;
var nPercent3 = (nFace3/nTotal)*100;
var nPercent4 = (nFace4/nTotal)*100;
var nPercent5 = (nFace5/nTotal)*100;

player.SetVar("Face1", nFace1);
player.SetVar("Face2", nFace2);
player.SetVar("Face3", nFace3);
player.SetVar("Face4", nFace4);
player.SetVar("Face5", nFace5);

player.SetVar("F1Per", nPercent1);
player.SetVar("F2Per", nPercent2);
player.SetVar("F3Per", nPercent3);
player.SetVar("F4Per", nPercent4);
player.SetVar("F5Per", nPercent5);

player.SetVar("TotalFaces", nTotal);
}

function Script61()
{
  var player = GetPlayer();

var nTotal = player.GetVar("TotalFaces")

var nFace1 = player.GetVar("Face1")
var nFace2 = player.GetVar("Face2")
var nFace3 = player.GetVar("Face3")
var nFace4 = player.GetVar("Face4")
var nFace5 = player.GetVar("Face5")

nFace3++
nTotal++

var nPercent1 = (nFace1/nTotal)*100
var nPercent2 = (nFace2/nTotal)*100
var nPercent3 = (nFace3/nTotal)*100
var nPercent4 = (nFace4/nTotal)*100
var nPercent5 = (nFace5/nTotal)*100

player.SetVar("Face1", nFace1)
player.SetVar("Face2", nFace2)
player.SetVar("Face3", nFace3)
player.SetVar("Face4", nFace4)
player.SetVar("Face5", nFace5)

player.SetVar("F1Per", nPercent1)
player.SetVar("F2Per", nPercent2)
player.SetVar("F3Per", nPercent3)
player.SetVar("F4Per", nPercent4)
player.SetVar("F5Per", nPercent5)

player.SetVar("TotalFaces", nTotal)
}

