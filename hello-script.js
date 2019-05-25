(function () {
  const divsToSayHello = document.querySelectorAll('div#hello')

  Array.from(divsToSayHello).forEach(div => {
    div.innerText = 'hello from script'
  })
})()
