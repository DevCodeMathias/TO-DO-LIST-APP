//pegando a data e a hora em js 
 const hour= document.querySelector('#hour');
 const minutes = document.querySelector('#minute');
 const second = document.querySelector('#second');

const day = document.querySelector('#day')
const mouth = document.querySelector('#mouth')

 setInterval(function update(){
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()

    if (h < 10) h = '0'+h
    if (m < 10) m = '0'+m
    if (s < 10) s = '0'+s

    hour.textContent = h
    minutes.textContent = m
    second.textContent= s
},1000)

setInterval(function dayMouth(){
    let dayMouth = new Date()
    let d = dayMouth.getDate()
    let mt = dayMouth.getMonth()

    const monthsOfYear = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


day.textContent = d;
mouth.textContent = monthsOfYear[mt]


})
setInterval(function() {
  updateDate();
}, 24 * 60 * 60 * 1000)


