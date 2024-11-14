
let flags = document.querySelectorAll('.field div')
let step = 0
let grabed_flags = 0

for(let flag of flags) {
  flag.onclick = function() {
    if (grabed_flags < 3) {
      console.log(this.innerHTML)
      this.innerHTML = ''
      grabed_flags += 1
      console.log(grabed_flags)
    }

    if (!document.querySelectorAll('.field div img').length) {
      console.log('Победил ' + (step % 2 + 1))
    }
  }
}

document.querySelector('#next').onclick = function() {
  if (grabed_flags != 0) {
    step += 1
    document.querySelector('#player').innerText = step % 2 + 1
    grabed_flags = 0
  }
}
