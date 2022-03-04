// headline-section

const burgerIcon1 = document.querySelector('#burgerIcon');
const crossIcon1 = document.querySelector('#crossIcon');
const section = document.querySelectorAll('.n4');

burgerIcon1.addEventListener('click', () => {
  document.getElementById('cover').style.cssText = 'width: 100%; height: 2000px;';
  document.getElementById('crossIcon').style.cssText = 'display:block; z-index: 2';
  document.getElementById('menu').style.cssText = 'display: flex; z-index: 2;';
});
section.forEach((e) => {
  e.addEventListener('click', () => {
    document.getElementById('cover').style.cssText = ' display: none;';
    document.getElementById('menu').style.cssText = 'display: none;';
    document.getElementById('crossIcon').style.cssText = 'display: none;';
  });
});

crossIcon1.addEventListener('click', () => {
  document.getElementById('cover').style.cssText = ' width: 0%; height: 0%; display: none;';
  document.getElementById('menu').style.cssText = 'display: none;';
  document.getElementById('crossIcon').style.cssText = 'display: none;';
});

// projects-section

let li = '';

const project = [
  {
    id: 'p1',
    name: 'Tonic',
    featuredImage: './images/picture-1.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'Source',
  },
  {
    id: 'p2',
    name: 'Multi-Post',
    featuredImage: './images/picture-2.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'Source',
  },
  {
    id: 'p2',
    name: 'Tonic',
    featuredImage: './images/picture-3.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'Source',
  },
  {
    id: 'p2',
    name: 'Multi-Post',
    featuredImage: './images/picture-4.svg',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    discription1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technology: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'See Live',
    source: 'Source',
  },
];

for (let i = 0; i < 3; i += 1) {
  li += `<li class="skills">${project[0].technology[i]}</li>`;
}

// project 1

const popupCode = `
<div class="page-2" id="proj">
    
<div class="pic">
    <div class="heading">
       <h2>${project[0].name}</h2>
       <button onclick ="closeWin()"><img id= "p1cross" src= "./images/cross-project.svg" alt="cross-icon"></button>
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
    <div id= "skill-button">
    <ul class="skills">
        ${li}
    </ul>   

    <div class="buttons">
        <button type="submit">${project[0].liveVersion}<img src= "./images/liveVersion.svg" alt="picture-1"></button>
        <button type="submit">${project[0].source}<img src= "./images/source.svg" alt="picture-1"></button>
    </div>
    </div>
</div>
</div>
`;

const popup = document.getElementById('popup');
const popup1b = document.querySelector('#popup1');
popup1b.addEventListener('click', () => {
  popup.innerHTML = popupCode;
  document.getElementById('proj').style.cssText = 'z-index: 4; overflow: auto;';
  document.getElementById('popup').style.cssText = 'z-index: 4; display: block;';
  document.getElementById('body').style.cssText = 'overflow: hidden;';
  document.getElementById('cover').style.cssText = 'display: block; z-index: 3; width: 100%; height: 100%; background: #c1c7c0;';
});
function closeWin() {
  document.getElementById('proj').style.cssText = 'display: none;';
  document.getElementById('body').style.cssText = 'overflow: none;';
  document.getElementById('cover').style.cssText = 'display: none;';
}

// project 2

const popupCode1 = `
<div class="page-2" id="proj">
    
<div class="pic">
    <div class="heading">
       <h2>${project[1].name}</h2>
       <button onclick= "closeWin()" ><img id= "p1cross" src= "./images/cross-project.svg" alt="cross-icon"></button>
    </div>
    <div class="year">
       <p>Safar</p>
       <p>Backend Dev</p>
       <p>2015</p>
    </div>
    <div class="picture">
        <a href="#"><img src= ${project[1].featuredImage} alt="picture-1"></a>
    </div>
</div>
<div class="details">
    <div class="para">
        <p>${project[1].discription}</p>
    </div>
    <div id= "skill-button">
    <ul class="skills">
        ${li}
    </ul>   

    <div class="buttons">
        <button type="submit">${project[1].liveVersion}<img src= "./images/liveVersion.svg" alt="picture-1"></button>
        <button type="submit">${project[1].source}<img src= "./images/source.svg" alt="picture-1"></button>
    </div>
    </div>
</div>
</div>
`;

const popup1 = document.getElementById('popup');

const popup2b = document.querySelector('#popup2');
popup2b.addEventListener('click', () => {
  popup1.innerHTML = popupCode1;
  document.getElementById('proj').style.cssText = 'z-index: 4; overflow: auto;';
  document.getElementById('popup').style.cssText = 'z-index: 4; display: block;';
  document.getElementById('body').style.cssText = 'overflow: hidden;';
  document.getElementById('cover').style.cssText = 'display: block; z-index: 3; width: 100%; height: 100%; background: #c1c7c0;';
});

// project 3

const popupCode2 = `
<div class="page-2" id="proj">
    
<div class="pic">
    <div class="heading">
       <h2>${project[2].name}</h2>
       <button onclick= "closeWin()" ><img id= "p1cross" src= "./images/cross-project.svg" alt="cross-icon"></button>
    </div>
    <div class="year">
       <p>Safar</p>
       <p>Backend Dev</p>
       <p>2015</p>
    </div>
    <div class="picture">
        <a href="#"><img src= ${project[2].featuredImage} alt="picture-1"></a>
    </div>
</div>
<div class="details">
    <div class="para">
        <p>${project[2].discription}</p>
    </div>
    <div id= "skill-button">
        <ul class="skills">
            ${li}
        </ul>   

        <div class="buttons">
            <button type="submit">${project[2].liveVersion}<img src= "./images/liveVersion.svg" alt="picture-1"></button>
            <button type="submit">${project[2].source}<img src= "./images/source.svg" alt="picture-1"></button>
        </div>
    </div>
</div>
</div>
`;

const popup2 = document.getElementById('popup');

const popup3b = document.querySelector('#popup3');
popup3b.addEventListener('click', () => {
  popup2.innerHTML = popupCode2;
  document.getElementById('proj').style.cssText = 'z-index: 4;';
  document.getElementById('popup').style.cssText = 'z-index: 4; display: block;';
  document.getElementById('body').style.cssText = 'overflow: hidden;';
  document.getElementById('cover').style.cssText = 'display: block; z-index: 3; width: 100%; height: 100%; background: #c1c7c0;';
});

// project 4

const popupCode3 = `
<div class="page-2" id="proj">
    
<div class="pic">
    <div class="heading">
       <h2>${project[3].name}</h2>
       <button onclick= "closeWin()" ><img id= "p1cross" src= "./images/cross-project.svg" alt="cross-icon"></button>
    </div>
    <div class="year">
       <p>Safar</p>
       <p>Backend Dev</p>
       <p>2015</p>
    </div>
    <div class="picture">
        <a href="#"><img src= ${project[3].featuredImage} alt="picture-1"></a>
    </div>
</div>
<div class="details">
    <div class="para">
        <p>${project[3].discription}</p>
    </div>
    <div id= "skill-button">
    <ul class="skills">
        ${li}
    </ul>   

    <div class="buttons">
        <button type="submit">${project[3].liveVersion}<img src= "./images/liveVersion.svg" alt="picture-1"></button>
        <button type="submit">${project[3].source}<img src= "./images/source.svg" alt="picture-1"></button>
    </div>
    </div>
</div>
</div>
`;

const popup3 = document.getElementById('popup');

const popup4b = document.querySelector('#popup4');
popup4b.addEventListener('click', () => {
  popup3.innerHTML = popupCode3;
  document.getElementById('proj').style.cssText = 'z-index: 4;';
  document.getElementById('popup').style.cssText = 'z-index: 4; display: block;';
  document.getElementById('body').style.cssText = 'overflow: hidden;';
  document.getElementById('cover').style.cssText = 'display: block; z-index: 3; width: 100%; height: 100%; background: #c1c7c0;';
});

closeWin();
