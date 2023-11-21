const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//add task when click the add button
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    // creating one html element with the tag name "li"
    // then it stored  in li variable
    let li = document.createElement("li");
    // the text we add on the input field will
    // store in li
    li.innerHTML = inputBox.value;
    //display the li(value)
    listContainer.appendChild(li);

    //dding a cross to delete a particular task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //after adding the task , make the inputbox empty
  inputBox.value = "";
  saveDate(); //save the updated content in the browser
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

//save the tasks in the local storage
function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
