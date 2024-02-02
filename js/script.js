// add button
const addShowButton = document.querySelector(".add");

addShowButton.addEventListener("click", function () {
  const show = showInput.value;
  console.log(show);

  if (show !== "") {
    let listItem = document.createElement("li"); // this line of code is creating an element in HTML
    listItem.innerHTML = show; // this line of code take the show value and, presents it to the html!
    showList.append(listItem); // showList represents the "ul .show-list" class in the html. And now by using the append function, we are adding the listItem li's and their values to it!
    let shows = document.querySelectorAll(".show-list li");
    showCount.innerText = shows.length;
  }
});

// label for the add button
const showInput = document.querySelector(".add-show input");
// unordered list (not yet visible)
const showList = document.querySelector(".show-list");
// span class for number of favorite shows
const showCount = document.querySelector(".number");
