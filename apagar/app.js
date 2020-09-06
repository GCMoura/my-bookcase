var body = document.querySelector('body')
var div = document.createElement('div')

const parag = document.createElement('p')

parag.appendChild(document.createTextNode("teste"))

div.appendChild(parag)
body.appendChild(div)