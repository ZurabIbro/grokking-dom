
function render(arr){
    let ul = document.createElement('ul')
    const body = document.querySelector('body')

    arr.forEach(i => {
        const li = document.createElement('li')
        const a = document.createElement('a')

        a.textContent = i.name
        a.href = i.url

        li.append(a)
        ul.prepend(li)
        body.append(ul)

    })
    return body
}

console.log(render([
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]));