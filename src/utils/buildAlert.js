
import './styles.css'

function buildAlert(message, color){
  const body = document.querySelector('#root')

  const div = document.createElement('div')
  div.classList.add('alert')
  div.style.background = color

  body.appendChild(div)

  const parag = document.createElement('p')
  parag.appendChild(document.createTextNode(message))
  div.appendChild(parag)
  
  div.style.transform = 'translateY(70px)'
  setTimeout(() => {
    div.style.transform = 'translateY(-70px)'
  }, 3000);   

}

export default buildAlert