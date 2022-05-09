// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let unicornImageArray = [
  './images/unicorn-0.png',
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
]

let unicornImages = document.getElementsByTagName('img')

const inflateHorn = function (clickedUnicornId) {
  let unicornImage = document.getElementById(clickedUnicornId)
  let lastImage = unicornImageArray[unicornImageArray.length - 1]
  if (unicornImage.getAttribute('src') === lastImage) {
    alert(`${unicornImage.id} thanks you!`)
  } else {
    let imageNumber = unicornImageArray.indexOf(
      unicornImage.getAttribute('src')
    )
    let nextImage = ++imageNumber
    unicornImage.setAttribute('src', unicornImageArray[nextImage])
  }
}

for (let i = 0; i < unicornImages.length; i++) {
  unicornImages[i].setAttribute('src', unicornImageArray[0])
  unicornImages[i].addEventListener('click', function (e) {
    let clickedUnicornId = e.target.id
    inflateHorn(clickedUnicornId)
  })
}
