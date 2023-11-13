const arr = ["html", "css", "js"]
let ul = document.createElement('ul')
const body = document.querySelector('body')

arr.forEach(i => {
    const li = document.createElement('li')
    li.textContent = i
    ul.append(li)
    body.prepend(ul)
})
