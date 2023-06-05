// Selecione o elemento SVG que você deseja girar
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
  console.log(out1)
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

  
 window.addEventListener('resize', posicionarDivEmCimaDoSvg)