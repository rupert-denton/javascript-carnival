// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let table = document.getElementById('table')
let cells = document.getElementsByTagName('td')
let startButton = document.getElementById('start')
let randomCell

const moleCreator = function () {
  let img = document.createElement('img')
  img.setAttribute('src', './mole.PNG')
  img.setAttribute('id', 'mole')
  img.classList.add('mole-img')
  return img
}

const moleRandomizer = function () {
  let randomCell = cells[Math.floor(Math.random() * cells.length)]
  img = moleCreator()
  randomCell.append(img)
  randomCell.addEventListener('click', function () {
    let audio = new Audio('whack-audio.wav')
    audio.play()
    document.getElementById('mole').remove()
    moleRandomizer()
  })
}

startButton.addEventListener('click', function () {
  moleRandomizer()
})
