
// Select some elements...
let header = document .querySelector('#page-header')
let dogImages = document.querySelectorAll('.dog-image')
let dogNames = document.querySelectorAll('.dog-name')
let footer = document.querySelector('.footer')

header.style.textAlign = 'left'

for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'scale(-1)'
}

for (let i = 0; i < dogNames.length; i++) {
    console.log(dogNames[i])
    dogNames[i].style.textAlign = 'left'
}

footer.style.color = 'red'
footer.style.borderStyle = 'solid'
