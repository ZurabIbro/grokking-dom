function render(arr){     
    let ul = document.createElement('ul')
    const body = document.querySelector('body')
    
    for(let i = 0; i < arr.length; i++){
        const li = document.createElement('li')
        li.textContent = arr[i]
        ul.append(li)
        body.append(ul)
    }
    return body
}
const arr = ["html", "css", "js"]
console.log(render(arr));