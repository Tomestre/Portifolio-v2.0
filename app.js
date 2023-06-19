const svgElement = document.querySelector('.elemento-svg');

// Função para calcular a direção do mouse
function calcularDirecaoMouse(evento, elemento) {
  const elementoRetangulo = elemento.getBoundingClientRect();
  const elementoCentroX = elementoRetangulo.left + elementoRetangulo.width / 2;
  const elementoCentroY = elementoRetangulo.top + elementoRetangulo.height / 2;
  
  const deltaX = evento.clientX - elementoCentroX;
  const deltaY = evento.clientY - elementoCentroY;
  
  return  Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 270 
}

// Função para atualizar a rotação do elemento SVG
function atualizarRotacao(evento) {
  
  const rotacao = calcularDirecaoMouse(evento, svgElement);
  svgElement.style.transform = `rotate(${rotacao}deg)`;
}

// Adicione o evento de movimento do mouse para atualizar a rotação
document.addEventListener('mousemove', atualizarRotacao)

//mudanças hover no centro

const label = document.querySelector('.label');
const center1 = document.querySelector('#center1');
const triangule = document.querySelector('.triangule')
const center = document.querySelector('#center')
const out1e = document.querySelector('#out1e')

  label.addEventListener('mouseover', () => {
    center1.style.fill = 'rgb(255, 4, 0)';
    triangule.style.fill = 'rgb(255, 4, 0)';
    center.style.fill = '#ff0';
    out1e.setAttribute('stroke','#ff0');
  });

  label.addEventListener('mouseout', () => {
    center1.style.fill = '#ff0';
    center.style.fill = '#00ffff';
    triangule.style.fill = '#ff0';
    out1e.setAttribute('stroke','#00ffff');

  });

  function handleClick(){
    const out1 = document.querySelector('#out1e')
  console.log(display);
  }

  function posicionarDivEmCimaDoSvg() {
    // Obtém as coordenadas x e y do elemento SVG
    const svgRect = center1.getBoundingClientRect();
    const svgX = svgRect.x;
    const svgY = svgRect.y;
  
    // Define as coordenadas x e y da div para serem iguais às do SVG
    
    label.style.position = "absolute";
    label.style.left = `${svgX}px`;
    label.style.top = `${svgY}px`;

  }
posicionarDivEmCimaDoSvg()
  
 window.addEventListener('resize', posicionarDivEmCimaDoSvg)



//animar letras
function nextText(){
  const text1 = document.querySelector('.typing-animation')
  const text2 = document.querySelector('.text2')
  const setas = document.querySelector('.setaTalk')

 if(text1.style.display === "none" &
 text2.style.display === "none"){

  return
 } else if (text2.style.display === "block") {
    text1.style.display = "none";
    text2.style.display = "none";
    setas.setAttribute('display','none')
  } else {
    text2.style.display = "block";
    text1.style.display = "none";
  }

}

window.addEventListener("keypress", function(event){
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter" || "backspace") {
    // Cancel the default action, if needed
    event.preventDefault();
    nextText()}
})


//animation-menu
const hoverMenu = document.querySelectorAll('.box-menu svg')
const menuSVG = document.querySelectorAll('.menu-hover')
const display = document.getElementById('display')
const containerProjects = document.querySelector('.project-box');

hoverMenu.forEach((menu,i)=>{
menu.addEventListener('click', (e)=>{
display.classList.toggle('display-active');

if(menuSVG[i]===menuSVG[3]){
containerProjects.classList.remove('desactive')
}
if(!display.classList.contains('display-active')){
  containerProjects.classList.add('desactive')
}

})

menu.addEventListener('mouseover', () => {
  menuSVG[i].classList.add('menu-hover-active')
})
menu.addEventListener('mouseout', () => {
  menuSVG[i].classList.remove('menu-hover-active')
})
})

const projectsMenu = document.querySelector('.menu-projects');



//projects

let projects = [{
  name: "Projeto 1",
  descrição: "loren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsun",

},
{
  name: "Projeto 2",
  descrição: "loren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsun",

},
{
  name: "Projeto 3",
  descrição: "loren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsun",

},
{
  name: "Projeto 4",
  descrição: "loren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsunloren ipsum lorem ipsun",

},
]

function criarSVGsComTextoDinamico(objetos) {
  const svgs = [];

  objetos.forEach((objeto) => {
    // Cria o elemento SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "169.05351");
    svg.setAttribute("height", "26");
    svg.setAttribute("viewBox", "0 0 169.05351 26");
    svg.setAttribute("fill", "none");
    svg.setAttribute("version", "1.1");
    svg.setAttribute("id", "svg25");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:svg", "http://www.w3.org/2000/svg");

    // Cria o elemento de caminho (path) dentro do SVG
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m 158.696,25.5 5.017,-9.5 v 9.5 z");
    path.setAttribute("fill", "#00ffff");
    path.setAttribute("stroke", "#038383");
    path.setAttribute("id", "path2");

    // Cria o elemento de grupo (g) dentro do SVG
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("filter", "url(#filter0_d_6_303)");
    group.setAttribute("id", "g6");
    group.setAttribute("transform", "translate(-30.5,-26.5)");

    // Cria o elemento de caminho (path) dentro do grupo
    const pathGroup = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathGroup.setAttribute("d", "M 32,28 H 197 L 184.736,50 H 32 Z");
    pathGroup.setAttribute("stroke", "#038383");
    pathGroup.setAttribute("stroke-width", "3");
    pathGroup.setAttribute("id", "path4");

    // Cria o elemento de texto (text) dentro do SVG
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "50%");
    text.setAttribute("y", "70%");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", "20px");
    text.setAttribute("fill", "#BFFFFF");
    text.setAttribute("id", "meuTexto");
    text.textContent = objeto.name;

    // Adiciona os elementos criados ao SVG
    group.appendChild(pathGroup);
    svg.appendChild(path);
    svg.appendChild(group);
    svg.appendChild(text);

    // Adiciona o SVG à lista de SVGs
    svgs.push(svg);
  });

  // Retorna a lista de SVGs criados
  return svgs;
}
  
  const projectsBox = criarSVGsComTextoDinamico(projects);

// Limpa o conteúdo da div
containerProjects.innerHTML = "";

// Insere os SVGs na div
projectsBox.forEach((svg) => {
  const svgContainer = document.createElement("div");
  svgContainer.appendChild(svg);
  containerProjects.appendChild(svgContainer);
  });


