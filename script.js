'use strict'

let searchButton = document.querySelector('#search-icon-button')
searchButton.addEventListener('click', function () {
    alert("Your search didn't match anything")
})

//Resiliency JavaScript
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

//Showcase filter options
function filterButtonAlert() {
  alert("Available Filter Options:\nPassed Tests\nFailed Tests\nSort by time remaining before retest (asc/desc)\nSort by Data Center\nStaff members allocated");
}

//Showcase viewer list
function viewUsersAlert() {
  let appMember1 = getRandomNumber();
  let appMember2 = getRandomNumber();
  if (appMember1 == appMember2) {
    while (appMember1 == appMember2) {
      appMember2 = getRandomNumber();
    }
  }
  let oppMember1 = getRandomNumber();
  let oppMember2 = getRandomNumber();
  if (oppMember1 == oppMember2) {
    while (oppMember1 == oppMember2) {
      oppMember2 = getRandomNumber();
    }
  }
  alert("Assigned members:\nApplication Team Member " + appMember1 + "\nApplication Team Member " + appMember2 + "\nOperate Team Member " + oppMember1 + "\nOperate Team Member " + oppMember2);
}


//Showcase Testing Data
function testDataAlert() {
  alert("This button will be the testing data attached to the respective application and will include (uploaded by operate member):\nWhen the test was done\nWhere the test was done\nSuccess or Fail\nSource & Target locations\nWhat testing scenario done\nAssociated staff members with testing\nTime taken for test\nCountdown until test period ends")
}

//
function createApplicationButton() {
  alert("Application successfully created")
=======
/*Function for toggling between showing and hiding the dropdown content*/
function profile_drop_down() {
  document.getElementById("profile_drop_down").classList.toggle("show");
}

/*Closes the dropdown if the user clicks anywhere else*/
window.onclick = function(event) {
  if (!event.target.matches('.profile')) {
      var drop_downs = document.getElementsByClassName("drop_down_content");
      var i;
      for (i = 0; i < drop_downs.length; i++) {
          var open_drop_down = drop_downs[i];
          if (open_drop_down.classList.contains("show")) {
              open_drop_down.classList.remove("show");
          }
      }
  }
}