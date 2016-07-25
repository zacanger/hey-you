const
  button = document.getElementById('button')
, main   = document.getElementById('main')
, words  = require('./words')

button.onclick = () => {
  let num = 0
  do {
    num = ~~(Math.random() * words.length)
  } while (main.innerText == `hey, you ${words[num]}!`)
  main.innerText   = `hey, you're ${words[num]}!`
  button.innerText = 'huh?'
}

document.addEventListener('keypress', button.onclick)
