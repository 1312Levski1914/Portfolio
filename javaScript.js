
/* When user click on button show nav */
/* Close the dropdown menu if user click outside of it  */
/* Here is code for burger button */
function openBurgerMenu() {
    document.getElementById('burger-button').classList.toggle('change');
    document.getElementById("myDropDown").classList.toggle("show");
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropBurger')) {
            let dropdowns = document.getElementsByClassName("dropDownContent");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    document.getElementById('burger-button').classList.remove('change');
                }
            }
        }
    }
}

function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
function darkMode(){
    let element = document.body;
    element.classList.toggle('root-dark');
}
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
function toTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
//
function dropContact(){
  let arr1 = document.getElementsByClassName('dropContactInfo');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}
function dropProjects(){
  let arr1 = document.getElementsByClassName('showProjects');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}
function showStudying(){
  let arr1 = document.getElementsByClassName('showStudyingInfo');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}
function showDesigner(){
  let arr1 = document.getElementsByClassName('designerHide');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}
function showScript(){
  let arr1 = document.getElementsByClassName('showScriptSkills');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}
function showGraphic(){
  let arr1 = document.getElementsByClassName('showGraphicSkills');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}
function showCertificate(){
  let arr1 = document.getElementsByClassName('certificateSkills');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}
function showAbout(){
  let arr1 = document.getElementsByClassName('showAboutInfo');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}
function showVideoSkills(){
  let arr1 = document.getElementsByClassName('videoSkills');
  let display;
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    if(display !== 'block'){
      arg.style.display = 'block';
    }else{
      arg.style.display = 'none';
    }
  }
}

function showLife(){
  let arr = document.getElementsByClassName('LifeSection');
  let display;

  for(let i = 0 ; i<arr.length ; i++){
    display = arr[i].style.display;
    if(display !== 'block'){
      arr[i].style.display = 'block';
    }else{
      arr[i].style.display = 'none';
    }
  }
}
function showWork(){
  let arr = document.getElementsByClassName('showWorkInfo');
  let display;

  for(let i = 0 ; i<arr.length ; i++){
    display = arr[i].style.display;
    if(display !== 'block'){
      arr[i].style.display = 'block';
    }else{
      arr[i].style.display = 'none';
    }
  }
}

function showSkillsMenu(){
  let arr = document.getElementsByClassName('bearShowSskills');
  let display;
  for(let i = 0 ; i<arr.length ; i++){
    display = arr[i].style.display;
    if(display !== 'block'){
      arr[i].style.display = 'block';
      document.getElementById('LION').style.display = 'none';
      document.getElementById('deerID').style.display = 'none';
    }else{
      arr[i].style.display = 'none';
      document.getElementById('LION').className = 'lion';
    }
  }
  
}