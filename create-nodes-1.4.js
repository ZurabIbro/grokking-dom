let ul = document.createElement('ul')
ul.className = 'list'
let li = document.createElement('li')
li.textContent = "Hello, world"

ul.append(li)

document.body.prepend(ul)

console.log(ul);