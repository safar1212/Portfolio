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

// proeject 

li = '';

const project = [
  {
    id: 'p1',
    name: 'Tonic',
    featuredImage: './images/picture-1.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'Source'
  },
  {
    id: 'p2',
    name: 'multi-Stories Post',
    featuredImage: './images/picture-2.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'Source'
  },
  {
    id: 'p2',
    name: 'Tonic',
    featuredImage: './images/picture-3.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'Source'
  },
  {
    id: 'p2',
    name: 'multi-Stories Post',
    featuredImage: './images/picture-4.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'Source'
  }
];

   for(let i=0; i < 3; i++) {
    li +=`<li class="skills">${project[0].technology[i]}</li>`;
   };



const popupCode = `
<div class="page-2" id="proj">
    
<div class="pic">
    <div class="heading">
       <h2>${project[0].name}</h2>
       <a href="#"><img id= "p1cross" src= "./images/cross-project.svg" alt="cross-icon"></a>
    </div>
    <div class="year">
       <p>Safar</p>
       <p>Backend Dev</p>
       <p>2015</p>
    </div>
    <div class="picture">
        <a href="#"><img src= ${project[0].featuredImage} alt="picture-1"></a>
    </div>
</div>
<div class="details">
    <div class="para">
        <p>${project[0].discription}</p>
    </div>
    <ul class="skills">
        ${li}
    </ul>   

    <div class="buttons">
        <button type="submit">${project[0].liveVersion}<img src= "./images/liveVersion.svg" alt="picture-1"></button>
        <button type="submit">${project[0].source}<img src= "./images/source.svg" alt="picture-1"></button>
    </div>
</div>
</div>
`;

const popup=document.getElementById("popup");
popup.innerHTML = popupCode;

const popup1b = document.querySelector('#popup1');
popup1b.addEventListener('click', () => {
  console.log("popup1 btn clicked");
  document.getElementById('proj').style.cssText = 'z-index: 4;';
  document.getElementById('popup').style.cssText = 'z-index: 4; display: block;';
  document.getElementsByClassName('skills').style.cssText ="border: red 2px solie;";
});

const p1Cross = document.querySelector('#p1cross');
p1Cross.addEventListener('click', () => {
  document.getElementById('proj').style.cssText = 'display: none;';
});

















// project 1

// const project1 = 
//   {
//     id1: 'p2',
//     name1: 'Multi-Stories Post',
//     featuredImage1: './images/picture-1.svg',
//     discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
//     technology1: ['HTML', 'CSS', 'JavaScript'],
//     liveVersion1: 'See Live',
//     source1: 'See Source'
//   };

//    li = '';
//    project1.technology1.forEach ((project1) => {
//      li +=`<li class="skills">${project1}</li>`
//    });

// const popupCode1 = `
// <div class="page-2" id="proj">
    
// <div class="pic">
//     <div class="heading">
//        <h2>${project1.name1}</h2>
//        <a href="#"><img id= "p1cross" src= "./images/cross-project.svg" alt="cross-icon"></a>
//     </div>
//     <div class="year">
//        <p>Safar</p>
//        <p>Backend Dev</p>
//        <p>2015</p>
//     </div>
//     <div class="picture">
//         <a href="#"><img src= ${project1.featuredImage1} alt="picture-1"></a>
//     </div>
// </div>
// <div class="details">
//     <div class="para">
//         <p>${project1.discription1}</p>
//     </div>
//     <ul class="skills">
//         ${li}
//     </ul>   

//     <div class="buttons">
//         <button type="submit">${project1.liveVersion1}<img src= "./images/liveVersion.svg" alt="picture-1"></button>
//         <button type="submit">${project1.source1}<img src= "./images/source.svg" alt="picture-1"></button>
//     </div>
// </div>
// </div>
// `;
// const popup1=document.getElementById("popup");
// popup1.innerHTML = popupCode1;

// const popup2 = document.querySelector('#popup2');
// popup2.addEventListener('click', () => {
//   document.getElementById('proj').style.cssText = 'z-index: 4;';
//   document.getElementById('popup').style.cssText = 'z-index: 4; display: block;';
//   document.getElementsByClassName('buttons').style.cssText ="display: flex;";
//   document.getElementsByClassName('skills').style.cssText ="border: red 2px solie;";
// });

// const p2Cross = document.querySelector('#p2cross');
// p2Cross.addEventListener('click', () => {
//   document.getElementById('proj').style.cssText = 'display: none;';
// });

  

