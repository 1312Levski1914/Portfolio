const mobileWrite = document.querySelector('.JsWrite');
mobileWrite.innerHTML = ` <img onclick="toTop()"  src="./img/Ak-logo.png" alt="logo-not-working">
<div class="sound">
    <audio id="myAudio" src="./portfolioBackgroundSound.m4a" preload="auto">
    </audio>
    <p>sound</p>
    <input onClick="togglePlay()" type="checkbox" name="" id="checkbox">
</div>
<div class="mode">
    <p>mode</p>
    <input type="checkbox" name="" onclick = 'darkMode()' id="checkbox">
</div>
<div id="burger-button" class = 'dropBurger' onclick = 'openBurgerMenu()'>
    <div class = 'bar1'></div>
    <div class = 'bar2'></div>
    <div class = 'bar3'></div>
</div>
<div id="myDropDown" class= 'dropDownContent'>
    <!-- Make when user click to scroll down!!!!-->
    <a href="#skillsId">Skills</a>
    <a href="#awardsId">Awards</a>
    <a href="#Project">Projects</a>
    <a href="#contactIdSection">Contact Me</a>
</div>
</section>
</nav>
<main>
<section id="mobileFirst" class= 'JsWrite' >
<section class="home">
<p>&lt;html&gt;</p>
<p class = 'oneTab'>&lt;body&gt;</p>
<p class = 'twoTab'>&lt;h1&gt;</p>
<h1 class = 'threTab'>Hi, <br> I'm Asen Krushkov</h1>
<p class = 'twoTab'>&lt;/h1&gt;</p>
<p class = 'twoTab'>&lt;h3&gt;</p>
<h3 class = 'threTab'>Front-End Developer</h3>
<p class = 'twoTab'>&lt;/h3&gt;</p>
<p class = 'twoTab'>&lt;button&gt;</p>
<a href="#contactIdSection" class = 'twoTab myButton' >Get in touch!</a>
<p class = 'twoTab'>&lt;/button&gt;</p>
</section>
<!--                                                                                        Here Start everything about my Skills-->
<section id= 'skillsId' class="skills">
<div class="header-skills">
    <p class = 'twoTab'>&lt;section&gt;</p>
    <p class = 'threTab'>&lt;h1&gt;</p>
    <h1 onclick = 'showDesigner()'  class = ' fourTab'>Multidisciplinary Designer</h1>
    <p class = 'threTab'>&lt;/h1&gt;</p>
    <p class = 'threTab'>&lt;section&gt;</p>
    <p class = 'fourTab'>&lt;div&gt;</p>
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
    <p class="fourTab">&lt;/div&gt;</p>
</div>
<div class="show-skill designerHide">
    <p class="fourTab">&lt;div&gt;</p>
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
    <p class="fourTab">&lt;/div&gt;</p>
</div>
<div class="show-skill designerHide">
    <p class="fourTab">&lt;div&gt;</p>
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
    <p class="fourTab">&lt;/div&gt;</p>
</div>
<div class="show-skill designerHide">
    <p class="fourTab">&lt;div&gt;</p>
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
<p class="fourTab">&lt;/div&gt;</p>
<p class="threTab">&lt;/section&gt;</p>
</section>

<section class="skills">
<div class="header-skills">
    <p class="threTab">&lt;section&gt;</p>
    <p class = 'fourTab'>&lt;h1&gt;</p>
    <h1 onclick = 'showScript()' class = 'fourTab'>Scripting and Programming Language </h1>
    <p class = 'fourTab'>&lt;/h1&gt;</p>
    <p class= "fourTab">&lt;div&gt;</p>
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
<p class= "fourTab">&lt;/div&gt;</p>
<div class="show-skill showScriptSkills">
    <p class= "fourTab">&lt;div&gt;</p>
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
    <p class= "fourTab">&lt;/div&gt;</p>
</div>
<div class="show-skill showScriptSkills">
    <p class= "fourTab">&lt;div&gt;</p>
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
    <p class= "fourTab">&lt;/div&gt;</p>
    <p class= 'threTab'>&lt;/section&gt;</p>
</div>
</section>
<section class="skills">
<div class="header-skills">
    <p class = 'threTab'>&lt;section&gt;</p>
    <p class = 'fourTab'>&lt;h1&gt;</p>
    <h1 onclick = 'showGraphic()' class = 'fourTab'>Graphic and Web Software </h1>
    <p class = 'fourTab'>&lt;/h1&gt;</p>
    <p class= "fourTab">&lt;div&gt;</p>
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
    <p class= "fourTab">&lt;/div&gt;</p>
</div>
<div class="show-skill showGraphicSkills">
    <p class= "fourTab">&lt;div&gt;</p>
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
    <p class= "fourTab">&lt;/div&gt;</p>
</div>
<div class="show-skill showGraphicSkills">
    <p class= "fourTab">&lt;div&gt;</p>
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
    <p class= "fourTab">&lt;/div&gt;</p>
</div>
<div class="show-skill showGraphicSkills">
    <p class= "fourTab">&lt;div&gt;</p>
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
    <p class= "fourTab">&lt;/div&gt;</p>
    <p class='threTab'>&lt;/section&gt;</p>
</div>
</section>
<section class="skills">
<div class="header-skills">
    <p class = 'threTab'>&lt;section&gt;</p>
    <p class = 'fourTab'>&lt;h1&gt;</p>
    <h1 onclick = 'showVideoSkills()' class = 'fourTab'>Video,3d and Game Software</h1>
    <p class = 'fourTab'>&lt;/h1&gt;</p>
    <p class= "fourTab">&lt;div&gt;</p>
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
    <p class= "fourTab">&lt;/div&gt;</p>
</div>
<div class="show-skill videoSkills">
    <p class= "fourTab">&lt;div&gt;</p>
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
    <p class= "fourTab">&lt;/div&gt;</p>
    <p class="threTab">&lt;/section&gt;</p>
    <p class="twoTab">&lt;/section&gt;</p>
</div>
</section>
<section id= 'awardsId' class="certificate">
<p class="twoTab">&lt;section&gt;</p>
<p class="threTab">&lt;h1&gt;</p>
<h1 onclick = 'showCertificate()' class="sevenTab">Certificate</h1>
<p class="threTab">&lt;/h1&gt;</p>
<div class = 'certificateSkills'>
    <p class="threTab">&lt;h3&gt;</p>
    <h3 class="eightTab">Basic Skills</h3>
    <p class="threTab">&lt;/h3&gt;</p>
    <p class="threTab">&lt;img*2&gt;</p>
    <div class="certificate-img">
        <img src="./img/basic.png" alt="">
        <img src="./img/basic2.png" alt="">
    </div>
</div>
<div class = 'certificateSkills'>
    <p class="threTab">&lt;h3&gt;</p>
    <h3>Fundamentals JavaScript</h3>
    <p class="threTab">&lt;/h3&gt;</p>
    <p class="threTab">&lt;img*2&gt;</p>
    <div class="certificate-img">
        <img src="./img/JS funda.png" alt="">
        <img src="./img/curriculum.png" alt="">
    </div>
</div>
<p class="twoTab">&lt;/section&gt;</p>
</section>
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

</section>
<!--                                                                                        Here Start everything about my Projects-->
<section id="Project" class="projects">
<p class="twoTab">&lt;section&gt;</p>
<p class="threTab">&lt;h1&gt;</p>
<h1 onclick = 'dropProjects()' class="eightTab">Projects</h1>
<p class="threTab">&lt;/h1&gt;</p>
<div class="showProjects">
    <div class="images">
        <img src="./img/Dance1.jpeg" alt="Dance Dance dance1"><hr>
        <img src="./img/Dance2.jpeg" alt="Dance Dance Dance 2 "><hr>
        <img src="./img/Space.jpeg" alt="SpaceOdessy"><hr>
        <img src="./img/PedalSink.jpeg" alt="PedalSink"><hr>
    </div>
</div>
    <p class="twoTab">&lt;/section&gt;</p>
</section>
<!--                                                                                        Here its about how to get in touch with me-->
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
            <span>Message to Me</span><textarea name="field4" onkeyup="adjust_textarea(this)" required="true"></textarea>
        </label>
        <label>
            <span> </span><input type="submit" value="Send" />
        </label>
    </form>
    <p class="threTab">&lt;/form&gt;</p>
</div>
</section>
<p class="twoTab">&lt;/section&gt;</p>
<p class="oneTab">&lt;/section&gt;</p>
<p>&lt;/body&gt;</p>
<p>&lt;/html&gt;</p>
`;