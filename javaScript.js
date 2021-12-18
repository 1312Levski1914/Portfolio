
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

function drop(){
  let arr = document.getElementsByClassName('show-skill');
  let arr1 = document.getElementsByClassName('hide');
  let display;
  for(let i = 0; i<arr.length; i++){
    display= arr[i].style.display;
    if(display !== 'block'){

      arr[i].style.display = 'block';
    }else{
      arr[i].style.display = 'none';
    }
  }
  for(i = 0 ; i<arr1.length ; i++){
    display = arr1[i].style.display;
    var arg = arr1[i];
    console.log(arg);
    
  }
  if(display !== 'block'){
    arg.style.display = 'block';
  }else{
    arg.style.display = 'none';
  }
}
function toTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
