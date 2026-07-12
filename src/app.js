let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.item-one')
  document.querySelector('.slide-one').appendChild(items[0])

  console.log('iindaa')
}) 

prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.item-one')
  document.querySelector('.slide-one').prepend(items[items.length -1])
})