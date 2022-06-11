const idea = document.getElementById('idea');
const hour = document.getElementById('hour');
const munite = document.getElementById('munite');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const getampm = document.getElementById('ampm');

setInterval(()=>{
    const newDate = new Date();

    let hou = newDate.getHours()
    munite.innerHTML =newDate.getMinutes()
    second.innerHTML =newDate.getSeconds()
    day.innerHTML=newDate.getDay();
    month.innerHTML =newDate.getMonth()
    year.innerHTML =newDate.getFullYear()
  if(hou>=12){
    hour.innerHTML = `${hou-12}`;
    getampm.innerHTML = `pm`;
  }else{
    hour.innerHTML =getHours();
    getampm.innerHTML = `am`;
  }
    
    
},1000)




const background = document.querySelector('.card-body');

const start = document.getElementById('start')
const stop = document.getElementById('stop')

start.addEventListener('click', ()=>{
    idea.setAttribute('src','image/lighton.png')
    idea.style.transition = '1s'
    background.style.background= `linear-gradient(to bottom, #006699 30%, #ffff00 100%)`;

})
stop.addEventListener('click', ()=>{
    idea.setAttribute('src','image/lightoff.png')
    background.style.background = "#ccccff";

    idea.style.transition = '1s'
})
