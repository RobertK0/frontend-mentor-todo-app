"use strict";

const sampleArray = [
  "Jog around the park 3x",
  "10 minutes meditation",
  "Read for 1 hour",
  "Pick up groceries",
  "Complete Todo App on Frontend Mentor",
];

const container = document.querySelector(".list-container");
const inputForm = document.querySelector(".input-form");
const inputField = document.querySelector(".input")


const insertTask = function (ele, index) {
  const element = `<div class="example-task">
    <input
      type="${index == 0 ? "image" : "submit"}"
      src="${index == 0 ? "images/icon-check.svg" : ""}"
      width="11"
      height="9"
      alt="Submit button"
      class="submit-circle ${index == 0 ? "checked" : ""}"
    />
    <p class="${index == 0 ? "checked-text" : ""}">${ele}</p>
    <input
      type="image"
      src="images/icon-cross.svg"
      width="13"
      height="13"
      alt="Submit button"
      class="remove-icon"
    />
  </div>`;
  container.insertAdjacentHTML("beforeend", element);
};
const populateList = function () {
  container.innerHTML = ''
  sampleArray.forEach((ele, index) => insertTask(ele, index));
}
populateList()
//functions
const addToDo = function (e){
  console.log(inputField.value);
  sampleArray.push(inputField.value)
  inputField.value = ''
  populateList()
  }

//event listeners 

inputForm.addEventListener('submit', function(e){
  e.preventDefault()
addToDo(e)})

container.addEventListener('click', function(e){
  e.preventDefault()
  if(event.target.classList.contains("submit-circle")){event.target.classList.add("checked")
  event.target.nextElementSibling.classList.add("checked-text")
}

})
