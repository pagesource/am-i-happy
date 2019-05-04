
let button_sad = document.getElementById('btn-sad');
let button_stressed = document.getElementById('btn-stressed');
let button_normal = document.getElementById('btn-normal');
let button_happy = document.getElementById('btn-happy');
let back = document.getElementById('back');
let comment_area = document.getElementById('comment_area');
let comment = document.getElementsByClassName('comments');
let mood = document.getElementsByClassName('mood');

// let showComment = function (text) {
//     mood[0].style.display = "none";
//     comment[0].style.display = "block";
//     comment_area.placeholder = text;
// };

// button_sad.addEventListener('click', function (event) {
//     let text = "Talk back! Let's sit over a cup of coffee or feel free to mention your concerns right here.";
//     showComment(text);
// });

// button_stressed.addEventListener('click', function (event) {
//     let text = "Spill the beans, buddy. Tell us about it.";
//     showComment(text);
// });

// button_normal.addEventListener('click', function (event) {
//     let text = "That sounds cool! Is there anything in which we are laging behind?";
//     showComment(text);
// });

// button_happy.addEventListener('click', function (event) {
//     let text = "Ah great! Would love to listen about your experiences.";
//     showComment(text);
// });

back.addEventListener('click', function (event) {
    mood[0].style.display = "block";
    comment[0].style.display = "none";
});

var moodScaleDom = document.getElementsByClassName('mood-scale')[0];
// function findMoodSlected(target){
//     if
// }
moodScaleDom.addEventListener('click',function(event){
           event.stopPropagation();
           mood[0].style.display = "none";
           comment[0].style.display = "block";
           document.getElementById("mood_type").value=event.target.getAttribute('data-id')
        //    comment_area.placeholder = text;
        //    debugger
           console.log('Navin',event)
})


