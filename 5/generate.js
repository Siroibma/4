/*
File: /~alora1/public_html/assignments/5/generate.js (91.46) COMP 4610 GUI Programming I
Assignment 5: Dynmaic Multiplication Table
Ambioris Lora, UMass Lowell Computer Science, alora1@cs.uml.edu
Copyright (c) 2020 by Ambioris Lora. All rights reserved. May be
freely
copied or excerpted for educational purposes with credit to the
author.
*/

function numValid() {
  let SH, EH, SR, ER = 0;
  let bol1, bol2, bol3, bol4, bol5, bol6 = false;
  SH = Math.abs(document.getElementById("SHR").value);
  EH = Math.abs(document.getElementById("EHR").value);
  SR = Math.abs(document.getElementById("SVR").value);
  ER = Math.abs(document.getElementById("EVR").value);
  let text_1, text_2, text_3, text_4, text_5, text_6;

  if(isNaN(SH) || isNaN(EH) || isNaN(SR) ||isNaN(ER)){
    text_1 = "You did not enter a number in one or more forms, Please try again";
    document.getElementById("Validation1").style.color = "red";
  } else {
    text_1 = "Inputs are Numbers, Good";
    document.getElementById("Validation1").style.color = "green";
    bol1 = true;
  }

  if (SH == "" || EH == "" || SR == "" || ER == "") {
    text_2 = "You entered a blank space in one more forms, please try again";
    document.getElementById("Validation2").style.color = "red";
  } else {
    text_2 = "Input are not blank spaces, Good";
    document.getElementById("Validation2").style.color = "green";
    bol2 = true;
  }
  if (SH > 50 || EH > 50 || SR > 50 || ER > 50) {
    text_3 = "You entered a value above 50 in one or more forms, please try again";
    document.getElementById("Validation3").style.color = "red";
  } else {
    text_3 = "You entered a number below or equal to 50, Good";
    document.getElementById("Validation3").style.color = "green";
    bol3 = true;
  }
  if (SH < -50 || EH < -50 || SR < -50 || ER < -50) {
    text_4 = "You entered a value below -50 in one or more forms, please try again";
    document.getElementById("Validation4").style.color = "red";
  } else {
    text_4 = "You entered a number within the whole number range, Good";
    document.getElementById("Validation4").style.color = "green";
    bol4 = true;
  }

  if(EH < SH || ER < SR) {
    text_5 = "You entered one or two forms in reverse order, please try again";
    document.getElementById("Validation5").style.color = "red";
  } else {
    text_5 = "You entered numbers in correct order, Good";
    document.getElementById("Validation5").style.color = "green";
    bol5 = true;
  }

  if(SH == 0 || EH == 0 || SR == 0 || ER == 0 ) {
    text_6 = "You entered zero in one or more forms, please try again";
    document.getElementById("Validation6").style.color = "red";
  }  else {
    text_6 = "You entered non zero values, Good"
    document.getElementById("Validation6").style.color = "green";
    bol6 = true;
  }


  document.getElementById("Validation1").innerHTML = text_1;
  document.getElementById("Validation2").innerHTML = text_2;
  document.getElementById("Validation3").innerHTML = text_3;
  document.getElementById("Validation4").innerHTML = text_4;
  document.getElementById("Validation5").innerHTML = text_5;
  document.getElementById("Validation6").innerHTML = text_6;

  if(bol1 == true && bol2 == true && bol3 == true && bol4 == true && bol5 == true && bol6 == true) {
    test(SH,EH,SR,ER);
  }
}

function test(n1,n2,n3,n4) {
  var table = document.getElementById("myTable");
  var row, cell;

  row = table.insertRow();
  cell = row.insertCell();
  for(let i = n1; i <= n2; i++) {
    cell = row.insertCell();
    cell.innerHTML = i;
  }

  for(let i = n3; i <= n4; i++) {
    row = table.insertRow();
    cell = row.insertCell();

    cell.innerHTML = i;
    for (let j = n1; j <= n2; j++) {
      cell = row.insertCell();
      cell.innerHTML = j*i;
    }
  }
}
