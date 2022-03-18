
const a = "Alices´Sandwich"

test.addEventListener('click', function(){
  bestillinger.innerHTML += "<p>Klik </p>"

})


// her gemmer vi
sessionStorage.setItem("test", a)


// her henter vi det gemte frem



// eventListener
knap.addEventListener('click', function(){
//alert('Ikke klik!')
seHer.innerHTML += sessionStorage.getItem("test") + "<br>"



})
