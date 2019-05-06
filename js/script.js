const cancel = document.getElementById("cancel");
const comment = document.getElementsByClassName("comments");
const mood = document.getElementsByClassName("mood");


cancel.addEventListener("click", function(event) {
  mood[0].style.display = "block";
  comment[0].style.display = "none";
});

var moodScaleDom = document.getElementsByClassName("mood-scale")[0];

moodScaleDom.addEventListener("click", function(event) {
  event.stopPropagation();
  mood[0].style.display = "none";
  comment[0].style.display = "block";
  const moodtypeId = event.target.getAttribute("data-id");
  document.getElementById("mood_type").value = moodtypeId;
  document.getElementById("comment_area").innerHTML = moodtypeMessage(moodtypeId);
});

function moodtypeMessage(type) {
  let msg = "";
  switch (type) {
    case '0':
      msg = "Ah great! Would love to listen about your experiences.";
      break;
    case '1':
      msg =
        "That sounds cool! Is there anything in which we are laging behind?";
      break;
    case '2':
      msg = "Spill the beans, buddy. Tell us about it.";
      break;
    case '3':
      msg =
        "Talk back! Let's sit over a cup of coffee or feel free to mention your concerns right here.";
      break;
    default:
      msg = "We would love to hear from you!";
  }
  return msg;
}
