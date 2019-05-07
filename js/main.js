import * as module from "./message.js";
const cancelBtn = document.getElementById("cancel");
const comment = document.getElementsByClassName("comments");
const mood = document.getElementsByClassName("mood");
const moodScaleDom = document.getElementsByClassName("mood-scale")[0];

cancelBtn.addEventListener("click", function(event) {
  mood[0].style.display = "block";
  comment[0].style.display = "none";
  const message =document.getElementById("comment_area").value;
  const moodtype =document.getElementById("mood_type").value;
  const data = {
    name:'Ram',
    mood_type:moodtype,
    message:message
  }
  fetch('/addHappyIndex', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  
});

moodScaleDom.addEventListener("click", function(event) {
  event.stopPropagation();
  mood[0].style.display = "none";
  comment[0].style.display = "block";
  const moodtypeId = event.target.getAttribute("data-id");
  document.getElementById("mood_type").value = moodtypeId;
  document.getElementById("comment_area").innerHTML = moodtypeMessage(
    moodtypeId
  );
});
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
