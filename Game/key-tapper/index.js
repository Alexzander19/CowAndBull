const texts = [
  'Lorem ipsum dolor sit amet,',
]

let current_text = texts[0].split('')
let cursor = 0
let spanned_text = null;

function init() {
  let text_el = document.querySelector('#text')
  for (let letter of current_text) {
    text_el.innerHTML += '<span>' + letter + '</span>' 
  }

  spanned_text = document.querySelectorAll('#text span')
  spanned_text[cursor].classList.add('cursor')
}


window.onkeydown = function(e) {
  if (e.key !== 'Shift' && e.key !== 'Alt') {
    if (e.key === spanned_text[cursor].innerText) {
      spanned_text[cursor].classList.add('green')
    } else {
      if (spanned_text[cursor].innerText === ' ') {
        spanned_text[cursor].classList.add('background-red')
      } else {
        spanned_text[cursor].classList.add('red')
      }
      
    }

    if (cursor < spanned_text.length - 1) {
      spanned_text[cursor].classList.remove('cursor')
      spanned_text[cursor + 1].classList.add('cursor')
      cursor += 1
    } else {
      console.log('Закончили')
    }
    
    
    console.log(cursor)
    console.log(spanned_text[cursor].innerText)
  }
  
}




window.onload = function() {
  init()
}








