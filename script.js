"use strict";

const sampleArray = [
  "Jog around the park 3x",
  "10 minutes meditation",
  "Read for 1 hour",
  "Pick up groceries",
  "Complete Todo App on Frontend Mentor",
];

const container = document.querySelector(".todo-container");
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
    <p>${ele}</p>
    <input
      type="image"
      src="images/icon-cross.svg"
      width="13"
      height="13"
      alt="Submit button"
      class="remove-icon"
    />
  </div>`;
  container.insertAdjacentHTML("afterbegin", element);
};
(function () {
  sampleArray.forEach((ele, index) => insertTask(ele, index));
})();

/* <div class="example-task">
          <input
            type="image"
            src="images/icon-check.svg"
            width="11"
            height="9"
            alt="Submit button"
            class="submit-circle checked"
          />
          <p>Jog around the park</p>
          <input
            type="image"
            src="images/icon-cross.svg"
            width="13"
            height="13"
            alt="Submit button"
            class="remove-icon"
          />
        </div> */
