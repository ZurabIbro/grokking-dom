let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')

div1.className = 'green'
div2.className = 'red'
div3.className = 'blue'
div3.textContent = "Im here"

div1.append(div3)
div2.append(div1)

document.body.prepend(div2)
