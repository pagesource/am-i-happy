const cancel = document.getElementById("cancel");
const comment = document.getElementsByClassName("comments");
const mood = document.getElementsByClassName("mood");


cancel.addEventListener("click", function(event) {
  mood[0].style.display = "block";
  comment[0].style.display = "none";
});

var moodScaleDom = document.getElementsByClassName("mood-scale")[0];
var moodSelected = document.getElementsByClassName("mood-btn")[0];

moodScaleDom.addEventListener("click", function(event) {
  event.stopPropagation();
  const moodtypeId = event.target.getAttribute("data-id");
  // document.getElementById(`btn-${moodtypeId}`);
  debugger;
  document.getElementById(`btn-${moodtypeId}`).classList.add('animated', 'bounce');
  setTimeout(myFunction, 1000);
  
  document.getElementById("mood_type").value = moodtypeId;
  document.getElementById("comment_area").innerHTML = moodtypeMessage(moodtypeId);
});

function myFunction(){
  mood[0].style.display = "none";
  comment[0].style.display = "block";
}

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
