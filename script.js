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
  alert("Available Filter Options:\nPassed Tests\nFailed Tests\nSort by time remaining before retest (asc/desc)\nStaff members allocated");
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