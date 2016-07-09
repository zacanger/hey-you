const
  button = document.getElementById('button')
, main   = document.getElementById('main')
, words  = [
  'a winner'
, 'adept'
, 'admirable'
, 'adorable'
, 'amazing'
, 'awesome'
, 'beautiful'
, 'breathtaking'
, 'bright'
, 'brilliant'
, 'charming'
, 'cool'
, 'dandy'
, 'dazzling'
, 'delightful'
, 'distinguished'
, 'divine'
, 'doing great'
, 'elegant'
, 'enchanting'
, 'enticing'
, 'excellent'
, 'exciting'
, 'exquisite'
, 'extraordinary'
, 'fabulous'
, 'fantastic'
, 'fetching'
, 'fine'
, 'first-class'
, 'flawless'
, 'good'
, 'gorgeous'
, 'graceful'
, 'gracious'
, 'great'
, 'high-class'
, 'hip'
, 'impressive'
, 'incredible'
, 'inimitable'
, 'intoxicating'
, 'inspiring'
, 'intelligent'
, 'lovable'
, 'lovely'
, 'luminous'
, 'magnificent'
, 'marvelous'
, 'my favourite'
, 'neat'
, 'nice'
, 'nifty'
, 'okay'
, 'on top of this'
, 'outstanding'
, 'perfect'
, 'precious'
, 'priceless'
, 'radiant'
, 'ravishing'
, 'refined'
, 'remarkable'
, 'sensational'
, 'sharp'
, 'shining'
, 'so cool'
, 'sparkling'
, 'spectacular'
, 'spirited'
, 'splendid'
, 'striking'
, 'stunning'
, 'sublime'
, 'super'
, 'superb'
, 'superior'
, 'sweet'
, 'swell'
, 'talented'
, 'terrific'
, 'the best'
, 'top-notch'
, 'unbeatable'
, 'unequaled'
, 'unique'
, 'unparalleled'
, 'valuable'
, 'wise'
, 'witty'
, 'wonderful'
, 'wondrous'
, 'worthy'
]

button.onclick = () => {
  let num = 0
  do {
    num = ~~(Math.random() * words.length)
  } while (main.innerText == `hey, you ${words[num]}!`)
  main.innerText   = `hey, you're ${words[num]}!`
  button.innerText = 'huh?'
}

document.addEventListener('keypress', button.onclick)
