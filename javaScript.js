

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
// --------------------------------------------------------------------------------------------DARK MODE
function darkMode(){
    let element = document.body;
    element.classList.toggle('root-dark');
}
//-------------------------------------------------------------------------------------------- Sound 
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
//--------------------------------------------------------------------------------------------Scroll to the top
function toTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
//-----------------------------------------------------------------------------------Drob contact info
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
//-------------------------------------------------------------------------------Show project content
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
//---------------------------------------------------------------------------show study content
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
//---------------------------------------------------------------------------show designer content
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
//---------------------------------------------------------------------------show scriptSkills
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
//---------------------------------------------------------------------------show Graphic skills
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
//--------------------------------------------------------------------------- show certificate
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
//---------------------------------------------------------------------------Show about me
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
// --------------------------------------------------------------------------- show video skills
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
// --------------------------------------------------------------------------- show life content
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
// --------------------------------------------------------------------------- show work content
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

// Below is only functions about web screen 
// i use javascript to write some HTML
//instead of coppy the same content for web i decide to make function 
const eagleWrite = document.querySelector('.showCertificateOnWeb');
function showCertificate(){
  eagleWrite.innerHTML = ` 
  <section id= 'awardsId' class="certificate">
  <div class= 'headingCertificate'>
    <p class="threTab">&lt;h1&gt;</p>
    <h1 onclick = 'showCertificate()' class="sevenTab">Certificate</h1>
    <p class="threTab">&lt;/h1&gt;</p>
  </div>
  <div class = 'certificateSkillsBasic'>
      <p class="threTab">&lt;h3&gt;</p>
      <h3 class="fourTab">Basic Skills JavaScript</h3>
      <p class="threTab">&lt;/h3&gt;</p>
  </div>
  <div class="certificateImgContainer">
    <img src="./img/basic.png" alt="basic is missing">
    <img class= 'basic2' src="./img/basic2.png" alt="basic2 is missing">
  </div>
  <div class = 'certificateSkillsFunda'>
      <p class="threTab">&lt;h3&gt;</p>
      <h3>Fundamentals JavaScript</h3>
      <p>&lt;/h3&gt;</p>
      <div class="certificateFundaImg">
          <img class= 'JsFunda' src="./img/JSfunda.png" alt="JSFunda missing">
          <img src="./img/curriculum.png" alt="Part Two of JS funda is missing">
      </div>
  </div>
  <p class="twoTab">&lt;/section&gt;</p>
</section>
    
  `
  let arr = document.getElementsByClassName('showCertificateOnWeb');
  let lion = document.getElementById('LION');
  let bear  = document.getElementById('bearID');
  let eagle = document.getElementById('eagleImgId');
  let deer = document.getElementById('deerImgId');
  let webSection = document.getElementById('welcomeInfo');
  let display; 
  for(let i = 0 ; i<arr.length ; i++){
    display = arr[i].style.display;
    if(display !== 'block'){
      arr[i].style.display = 'block';
      bear.style.display = 'none';
      lion.style.display = 'none';
      eagle.style.top = '70%';
      eagle.style.left = '80%';
      deer.style.display = 'none';
      webSection.style.display = 'none';
    }else{
      arr[i].style.display = 'none';
      bear.style.display = 'block';
      eagle.style.top ='13%';
      eagle.style.left = '0%';
      lion.style.display = 'block';
      eagle.className = 'eagle';
      deer.style.display = 'block';
    }
  }
}
const deerWrite = document.querySelector('.deerContactMe');
function showContactMe(){
  deerWrite.innerHTML = `
  <section id='contactIdSection' class="ContactMe">
                    <p class="twoTab">&lt;section&gt;</p>
                    <p class="threTab">&lt;h1&gt;</p>
                    <h1 onclick = 'dropContact()' class="sevenTab">Contact Me</h1>
                    <p class="threTab">&lt;/h1&gt;</p>
                    <div class="hide dropContactInfo">
    
                        <p class="threTab">&lt;h3&gt;</p>
                        <h3 class="fourTab contact">I'm Front-End Developer <span class="bold"> &lt;br&gt; </span><br>
                            who enjoying working with  <span class="bold"> &lt;br&gt; </span> <br>
                            JS HTML and CSS. <span class="bold"> &lt;br&gt; </span>  <br>
                            However, if you have other request</span><br>
                            or question, don't hesitate to use<br>
                            the form bellow.  
                        </h3>
                        <p class="threTab"> &lt;/h3&gt;</p>
                        
                        <p class="threTab">&lt;form&gt;</p>
                        <form class="form-style-4" action="" method="post">
                            <label for="field1">
                                <span>Enter Your Name</span><input type="text" name="field1" required="true" />
                            </label>
                            <label for="field2">
                                <span>Email Address</span><input type="email" name="field2" required="true" />
                            </label>
                            <label for="field3">
                                <span>Short Subject</span><input type="text" name="field3" required="true" />
                            </label>
                            <label for="field4">
                                <span>Message to Me</span><textarea name="field4" required="true"></textarea>
                            </label>
                            <label>
                                <span> </span><input type="submit" value="Send" />
                            </label>
                        </form>
                        <p class="threTab">&lt;/form&gt;</p>
                    </div>
                </section>
  `
  let arr = document.getElementsByClassName('deerContactMe');
  let lion = document.getElementById('LION');
  let bear  = document.getElementById('bearID');
  let eagle = document.getElementById('eagleID');
  let deer = document.getElementById('deerImgId');
  let webSection = document.getElementById('welcomeInfo');
  let display; 
  for(let i = 0 ; i<arr.length ; i++){
    display = arr[i].style.display;
    if(screen.width < 600){
      arr[i].style.display = 'none';
    }else{
        if(display !== 'block'){
          arr[i].style.display = 'block';
          bear.style.display = 'none';
          lion.style.display = 'none';
          eagle.style.display = 'none';
          deer.style.left = '75%';
          deer.style.top = '70%';
          webSection.style.display = 'none';
        }else{
          arr[i].style.display = 'none';
          bear.style.display = 'block';
          lion.style.display = 'block';
          eagle.style.display = 'block';
          deer.style.top = '80%';
          deer.style.left = '8%';
        }
      }
    }
  }
const bearWrite = document.querySelector('.bearShowSskills');
function showSkillsMenu(){
  bearWrite.innerHTML = `
  <div class= 'allSkills'> 
    <section id= 'skillsId' class="skills">
    <div class="header-skills">
      <p class = 'threTab'>&lt;h1&gt;</p>
      <h1 onclick = 'showDesigner()'  class = ' fourTab'>Multidisciplinary Designer</h1>
      <p class = 'threTab'>&lt;/h1&gt;</p>
    </div>
    <div class="show-skill designerHide">
        <h5>Design</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill designerHide">
        <h5 >Ilustration</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill designerHide">
        <h5>Code</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill designerHide">
        <h5>Animation</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    </section>
    <section class="skills">
    <div class="header-skills">
        <p class = 'fourTab'>&lt;h1&gt;</p>
        <h1 onclick = 'showScript()' class = 'fourTab'>Scripting and Programming Language </h1>
        <p class = 'fourTab'>&lt;/h1&gt;</p>
    </div>
    <div class="show-skill showScriptSkills">
        <h5 class= 'Skill'>HTML</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill showScriptSkills">
        <h5>CSS</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill showScriptSkills">
        <h5>JS</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    </section>
    <section class="skills">
    <div class="header-skills">
        <p class = 'fourTab'>&lt;h1&gt;</p>
        <h1 onclick = 'showGraphic()' class = 'fourTab'>Graphic and Web Software </h1>
        <p class = 'fourTab'>&lt;/h1&gt;</p>
    </div>
    <div class="show-skill showGraphicSkills">
        <h5>Photoshop</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill showGraphicSkills">
        <h5>Illustrator</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill showGraphicSkills">
        <h5>Sketch</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill showGraphicSkills">
        <h5>XD</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    </section>
    <section class="skills">
    <div class="header-skills">
        <p class = 'fourTab'>&lt;h1&gt;</p>
        <h1 onclick = 'showVideoSkills()' class = 'fourTab'>Video,3d and Game Software</h1>
        <p class = 'fourTab'>&lt;/h1&gt;</p>
    </div>
    <div class="show-skill videoSkills">
        <h5>After Effects</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
    <div class="show-skill videoSkills">
        <h5>Primiere-Pro</h5>
        <div class= 'skillsRow'>
            <div>
                <div class= 'rate'></div>
                <p>Beginner</p>
            </div>
            <div>
                <div class= 'rate'></div>
                <p>Elementary</p></div>
            <div>
                <div class= 'rate'></div>
                <p>Intermediate</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Advanced</p>
            </div>
            <div>
                <div class="unRate"></div>
                <p>Expert</p>
            </div>
        </div>
    </div>
  </section>
</div>
  `;
  let arr = document.getElementsByClassName('bearShowSskills');
  let eagle = document.getElementById('eagleID');
  let webSection = document.getElementById('welcomeInfo');
  
  let display;
  for(let i = 0 ; i<arr.length ; i++){
    display = arr[i].style.display;
    if(display !== 'block'){
      arr[i].style.display = 'block';
      document.getElementById('LION').style.display = 'none';
      document.getElementById('deerID').style.display = 'none';
      eagle.style.display = 'none';
      webSection.style.display = 'none';
    }else{
      arr[i].style.display = 'none';
      document.getElementById('LION').style.display = 'block';
      document.getElementById('deerID').style.display = 'block';
      eagle.style.display= 'block';
      helloWorld();
    }
  }
}
const lionWrite = document.querySelector('.lionAboutMe');
function showAboutMe(){
  lionWrite.innerHTML = `
  <section id= 'aboutMe'>
                    <p class="twoTab">&lt;section&gt;</p>
                    <p class="threTab">&lt;h1&gt;</p>
                    <h1 onclick = 'showAbout()' class="eightTab">About Me</h1>
                    <p class="threTab">&lt;/h1&gt;</p>
                    <div class="showAboutInfo">
    
                        <p class="threTab">&lt;h3&gt;</p>
                        <h3 onclick= 'showLife()' class="eightTab">Life</h3>
                        <p class="threTab">&lt;/h3&gt; &lt;hr&gt;</p> <hr>
                        <div class="LifeSection">
                            <p class="threTab">&lt;h5&gt;</p>
                            <h5 class='fourTab'>19 years in <span class= 'bold'> &lt;bold&gt;</span> <strong>Bulgaria</strong> <span class='bold'> &lt;/bold&gt; </span> </h5>
                            <p class="threTab">&lt;/h5&gt;</p>
                            <p class="threTab">&lt;h5&gt;</p>
                            <h5  class='fourTab'>4 years in<span class= 'bold'> &lt;bold&gt;</span> <strong>United Kingdom</strong> <span class='bold'> &lt;/bold&gt; </span> </h5>
                            <p class="threTab">&lt;/h5&gt;</p>
                            <p class="threTab">&lt;h5&gt;</p>
                            <h5  class='fourTab'>2 years in <span class= 'bold'> &lt;bold&gt;</span> <strong>Denmark</strong> <span class='bold'> &lt;/bold&gt; </span></h5>
                            <p class="threTab">&lt;/h5&gt;</p>
                        </div>
                    </div>
                    <div class="showAboutInfo">
                        <p class="threTab">&lt;h3&gt;</p>
                        <h3 onclick= 'showWork()' class="eightTab">Work</h3>
                        <p class="threTab">&lt;/h3&gt; &lt;hr&gt;</p> <hr>
                        <div class="showWorkInfo hide">
                            <p class="threTab">&lt;h5&gt;</p>
                            <h5 class="eightTab">JustEat-Delivery Driver</h5>
                            <p class="threTab">&lt;/h5&gt;</p>
                        </div>
                    </div>
                    
                    <div class="showAboutInfo">
                        <p class="threTab">&lt;h3&gt;</p>
                        <h3 onclick= 'showStudying()' class="eightTab">Studying</h3>
                        <p class="threTab">&lt;/h3&gt; &lt;hr&gt;</p> <hr>
                        <div class="showStudyingInfo">
                            <p class="threTab">&lt;h5&gt;</p>
                            <h5 class="eightTab">Zealand- Multimedia Design and Comunication</h5>
                            <p class="threTab">&lt;/h5&gt;</p>
                            <p class="threTab">&lt;h5&gt;</p>
                            <h5 class="eightTab">SoftUni - JavaScript - Advance</h5>
                            <p class="threTab">&lt;/h5&gt;</p>
                            <p class="twoTab">&lt;/section&gt;</p>
                        </div>
                    </div>
                    <section id="Project" class="projects">
                        <p class="twoTab">&lt;section&gt;</p>
                        <p class="threTab">&lt;h1&gt;</p>
                        <h1 onclick = 'dropProjects()' class="eightTab">Projects</h1>
                        <p class="threTab">&lt;/h1&gt;</p>
                        <div class="showProjects">
                            <div class="images">
                                <a href="http://levski1914.eu/Dance%20Dance%20%20Dance/">
                                    <img src="./img/Dance1.jpeg" alt="Dance Dance dance1"><hr>
                                </a>
                                <a href="http://levski1914.eu/Bollygge%20Dance/Dance/Join/index.html#">
                                    <img src="./img/Dance2.jpeg" alt="Dance Dance Dance 2 "><hr>
                                </a>
                                <a href="http://levski1914.eu/Space%20Project/newsite.html">
                                    <img src="./img/Space.jpeg" alt="SpaceOdessy"><hr>
                                </a>
                                <a href="http://levski1914.eu/MotoAqua/index.html">
                                    <img src="./img/PedalSink.jpeg" alt="PedalSink"><hr>
                                </a>
                            </div>
                        </div>
                            <p class="twoTab">&lt;/section&gt;</p>
                    </section>
                </section>
  `
  let arr = document.getElementsByClassName('lionAboutMe');
  let lion = document.getElementById('LionActive');
  let bear  = document.getElementById('bearID');
  let eagle = document.getElementById('eagleID');
  let deer = document.getElementById('deerImgId');
  let webSection = document.getElementById('welcomeInfo');
  let display;

  for(let i = 0; i<arr.length ; i++){
    display = arr[i].style.display;
    if(display !== 'block'){
      arr[i].style.display = 'block';
      lion.style.top = '70%';
      lion.style.right = '5%';
      lion.style.width = '280px';
      lion.style.height = '230px';
      bear.style.display = 'none';
      document.getElementById('deerID').style.display = 'none';
      eagle.style.display = 'none';
      webSection.style.display = 'none';
    }else{
      arr[i].style.display = 'none';
      lion.style.top = '55%';
      lion.style.right = '48%';
      lion.style.width = '100px';
      lion.style.height = '130px';
      bear.style.display=  'block';
      document.getElementById('deerID').style.display = 'block';
      eagle.style.display = 'block';
    }
  }
}

//On mouse click show animal + info 
/* 

let bearImg  = document.getElementById('bearImg');
let eagleImg = document.getElementById('eagleImgId');
let deerImg = document.getElementById('deerImgId');
  deerImg.style.display = 'none';
  lionImg.style.display = 'none';
  bearImg.style.display = 'none';
  eagleImg.style.display = 'none';
  
*/
let lionImg = document.getElementById('LionActive');
window.onload = helloWorld;
function helloWorld(){
  let webSection = document.getElementById('welcomeInfo');
  webSection.innerHTML = `
  <section class="infoForWeb">
  <div class=" backgroundImg"></div>
    <h1 class="twoTab">Hi, <br> I'm Asen Krushkov</h1>
    <h3 class="twoTab">Front-End Developer</h3>
    <a  href="#contactIdSection" onclick = 'showContactMe()' class = ' myButton threTab button-opc' >Get in touch!</a>
  </section>
  <div class="background-nav"></div>
  <div class="navInfo">
    <h2>{<span class = 'keys'>bear:</span><span class = 'var'>"Skills",</span></h2>
    <h2><span class = 'keys'>lion:</span><span class = 'var'>"About Me",</span></h2>
    <h2><span class = 'keys'>deer:</span><span class = 'var'>"Contact",</span></h2>
    <h2><span class = 'keys'>eagle:</span><span class = 'var'>"Certificate"</span>}</h2>
  </div>
  
  `;
}