// headline-section

const burgerIcon1 = document.querySelector("#burgerIcon");
const crossIcon1 = document.querySelector("#crossIcon");
const section = document.querySelectorAll(".n4");

burgerIcon1.addEventListener("click", () => {
  document.getElementById("cover").style.cssText =
    "width: 100%; height: 2000px;";
  document.getElementById("crossIcon").style.cssText =
    "display:block; z-index: 2";
  document.getElementById("menu").style.cssText = "display: flex; z-index: 2;";
});
section.forEach((e) => {
  e.addEventListener("click", function () {
    document.getElementById("cover").style.cssText = " display: none;";
    document.getElementsByClassName("menu").style.cssText = "display: none;";
    document.getElementById("crossIcon").style.cssText = "display: none;";
  });
});

crossIcon1.addEventListener("click", function () {
  document.getElementById("cover").style.cssText = " width: 0%; height: 0%; display: none;";
  document.getElementsByClassName("menu").style.cssText = "display: none;";
  document.getElementById("crossIcon").style.cssText = "display: none;";
});

// projects-section


const project = 
  {
    id: 'p1',
    name: 'Tonic',
    featuredImage: './images/picture-1.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'See Source'
  };

   li = '';
   project.technology.forEach ((project) => {
     li +=`<li class="skills">${project}</li>`
   });

const popupCode = `
<div class="page-2" id="proj">
    
<div class="pic">
    <div class="heading">
       <h2>${project.name}</h2>
    </div>
    <div class="year">
       <p>Safar</p>
       <p>Backend Dev</p>
       <p>2015</p>
    </div>
    <div class="picture">
        <a href="#"><img src= ${project.featuredImage} alt="picture-1"></a>
    </div>
</div>
<div class="details">
    <div class="para">
        <p>${project.discription}</p>
    </div>
    <ul class="skills">
        ${li}
    </ul>   

    <div class="buttons">
        <button type="submit">${project.liveVersion}<img src= "./images/liveVersion.svg" alt="picture-1"></button>
        <button type="submit">${project.source}<img src= "./images/source.svg" alt="picture-1"></button>
    </div>
</div>
</div>
`;

popup.innerHTML = popupCode;

const popup1 = document.querySelector('#popup1');
popup1.addEventListener('click', () => {
  console.log("asdfasdfasd");
  document.getElementById('proj').style.cssText = 'z-index: 4;';
  document.getElementById('popup').style.cssText = 'z-index: 4; display: block;';
  document.getElementsByClassName('buttons').style.cssText ="display: flex;";
  document.getElementsByClassName('skills').style.cssText ="border: red 2px solie;";
});



