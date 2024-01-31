const ACOUNTS = [

//Acount NO. = {NAME, PHONE, CODE, COURSE, AGE, Lesson} //

  Acount_1 = ["", "", "", "Web", 2008, 8],
  Acount_2202 = ["Motaz", "01004889956", 2202, "FirstAcc", 2008, 4],
  Acount_2 = ["Motaz", "01004889956", 2202, "SecondAcc", 2009, 1],
  Acount3 = ["OmarGad", "01270499761", 2203, "Prog", 2010, 1],
  Acount4 = ["Eyad", "01550201945", 2204, "Web", 2011, 1],
  
];



//--Images links--//
var LOCKEDSTATE = "https://i.postimg.cc/QxVBr2ZD/Locked.png"
var OPENEDSTATE = "https://i.postimg.cc/C59w06bM/Opened.png"
//---------------//

//--LessonsState--//
var LS1 = document.getElementById("LS1")
var LS2 = document.getElementById("LS2")
var LS3 = document.getElementById("LS3")
var LS4 = document.getElementById("LS4")
var LS5 = document.getElementById("LS5")
var LS6 = document.getElementById("LS6")
var LS7 = document.getElementById("LS7")
var LS8 = document.getElementById("LS8")
//---------------//

var NAME
var PHONENUMBER
var CODE
var COURSE
var AGE
var PASSWORD
var LESSON

var AcountFound = false //Non-Data

var MainPage = document.getElementById("MainPage")
var AcountPage = document.getElementById("AcountPage")
var PassInp = document.getElementById("PasswordInput")
var PhoneInp = document.getElementById("PhoneInput")
var LoginButton = document.getElementById("LoginButton")

//-- DISPLAYERS --//
var DD_NAME = document.getElementById("DD_NAME")
var DD_PHONE = document.getElementById("DD_PHONE")
var DD_CODE = document.getElementById("DD_CODE")
var DD_COURSE = document.getElementById("DD_COURSE")
var DD_AGE = document.getElementById("DD_AGE")
//--------------- //

LoginButton.onclick = function() {
  
  for (let i = 0; i < ACOUNTS.length; i++) {
    PHONENUMBER = ACOUNTS[i][1]
    PASSWORD = ACOUNTS[i][0] + "#" + ACOUNTS[i][2]
    if (PhoneInp.value == PHONENUMBER && PassInp.value == PASSWORD) { 
      NAME = ACOUNTS[i][0]
      PHONENUMBER = ACOUNTS[i][1]
      CODE = ACOUNTS[i][2]
      COURSE = ACOUNTS[i][3]
      AGE = ACOUNTS[i][4]
      LESSON = ACOUNTS[i][5]
      AcountFound = true
    } 
  }
  
  if(AcountFound == false) {
    alert("Phone or Password are Incorrect")
  } else if(AcountFound == true) {

      AcountPage.style.display = "block";
      MainPage.style.display = "none";

      
    const TODAYSDATE = new Date();
    let THISYEAR = TODAYSDATE.getFullYear();


    if ( LESSON >= 1) {LS1.src = OPENEDSTATE};
    if ( LESSON >= 2) {LS2.src = OPENEDSTATE};
    if ( LESSON >= 3) {LS3.src = OPENEDSTATE};
    if ( LESSON >= 4) {LS4.src = OPENEDSTATE};
    if ( LESSON >= 5) {LS5.src = OPENEDSTATE};
    if ( LESSON >= 6) {LS6.src = OPENEDSTATE};
    if ( LESSON >= 7) {LS7.src = OPENEDSTATE};
    if ( LESSON >= 8) {LS8.src = OPENEDSTATE};



//-- DISPLAYERS --//
    DD_NAME.innerHTML += " " + NAME
    DD_PHONE.innerHTML += " " + PHONENUMBER
    DD_CODE.innerHTML += " " + CODE
    DD_COURSE.innerHTML += " " + COURSE
    DD_AGE.innerHTML += " " + (THISYEAR - AGE)
//--------------- //

  }

}


//--- Prevent Inspectation ---//

// document.oncontextmenu = () => {
//   return false
// }
// document.onkeydown = e => {
//   if(e.key == "F12") {
//     return false
//   }
//   if(e.ctrlKey && e.key == "u") {
//     return false
//   }
//   if(e.ctrlKey && e.key == "c") {
//     return false
//   }
// }

//--------------------------------//