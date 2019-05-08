import * as module from "./message.js";
const cancelBtn = document.getElementById("cancel");
const comment = document.getElementsByClassName("comments");
const mood = document.getElementsByClassName("mood");
const moodScaleDom = document.getElementsByClassName("mood-scale")[0];

cancelBtn.addEventListener("click", function(event) {
  mood[0].style.display = "block";
  comment[0].style.display = "none";
  const message = document.getElementById("comment_area").value;
  const moodtype = document.getElementById("mood_type").value;
  let moodtypeId = localStorage.getItem("mid");
  console.log(moodtypeId);
  document
    .getElementById(`btn-${moodtypeId}`)
    .classList.remove("animated", "bounce");

  const data = {
    name: "Ram",
    mood_type: moodtype,
    message: message
  };
  fetch("/addHappyIndex", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(item => {
      console.log("Data saved successfully");
    })
    .catch(error => console.error("Error:", error));
});

moodScaleDom.addEventListener("click", function(event) {
  event.stopPropagation();
  const moodtypeId = event.target.getAttribute("data-id");
  document
    .getElementById(`btn-${moodtypeId}`)
    .classList.add("animated", "bounce");
  setTimeout(myFunction, 1000);
  document.getElementById("mood_type").value = moodtypeId;
  document.getElementById("comment_area").innerHTML = moodtypeMessage(
    moodtypeId
  );
  localStorage.setItem("mid", moodtypeId);
});

function myFunction() {
  mood[0].style.display = "none";
  comment[0].style.display = "block";
}

function moodtypeMessage(type) {
  let msg = "";
  switch (type) {
    case "0":
      msg = module.HAPPY_MOOD_MSG;
      break;
    case "1":
      msg = module.NORMAL_MOOD_MSG;
      break;
    case "2":
      msg = module.SAD_MOOD_MSG;
      break;
    case "3":
      msg = module.STRESS_MOOD_MSG;

      break;
    default:
      msg = module.DEFAULT_MSG;
  }
  return msg;
}
