const app = "I don't do much."
// my code is below here
document.addEventListener('keydown', function(e) {
  if(e.which === 39){
  var rightNumbers = dodger.style.right.replace('px','')
  var right = parseInt(rightNumbers, 10)
  dodger.style.right = `$(right - 1)px`
}
})