document.querySelector('.target').addEventListener('click', function(event) {
  event.preventDefault();
  var promoCopyFade = document.querySelector('.promoCopyFade');
  if (promoCopyFade.classList.contains('expand')) {
    promoCopyFade.classList.remove('expand');
    document.querySelector('.target').innerText = '+ view more';
  } else {
    promoCopyFade.classList.add('expand');
    document.querySelector('.target').innerText = '+ view less';
  }
});
