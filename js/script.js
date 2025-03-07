const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const infoBtn = document.querySelector('.info')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const modalShadow = document.querySelector('.modal-shadow')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close')
const brushBtn = document.querySelector('.brush')
const colors = document.querySelectorAll('.color')
const oneBtn = document.querySelector('.one')
const twoBtn = document.querySelector('.two')
const treeBtn = document.querySelector('.tree')

const root = document.documentElement;

const newColor = getComputedStyle(root).getPropertyValue('--first-color');



let countTime
let minutes = 0;
let seconds = 0;
let timesArr = [];
li = timeList.classList.add('li')


const handleStart = () =>{

   
    clearInterval(countTime)
    
    countTime = setInterval(() => {
        if(seconds < 9 ){
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if ( seconds >= 9 && seconds < 59){
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`}
            else {
                minutes++ 
                seconds = 0
                stopwatch.textContent = `${minutes}:00`}
                
            }
            , 1000); 
    }


const handleStop = () =>{
    clearInterval(countTime)

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    if(stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent)
        
    }
clearStaff()
   
}

const handlePause = () =>{
    clearInterval(countTime)
}

const handleReset = () => {
    time.style.visibility = 'hidden';
    timesArr = [];
    clearStaff()
}

const clearStaff = () =>{
    stopwatch.textContent = '0:00'
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}

const showHistory = () =>{
    timeList.textContent = '';
    let num = 1;
    
    timesArr.forEach(time => {

    const newTime = document.createElement('li');
    newTime.innerHTML = `Pomiar numer ${num}: <span>${time}</span>`

    timeList.appendChild(newTime)
    num++;
})
}

const modalShow = () => {
    if(!(modalShadow.style.display === 'block')){
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none'
    }
    modal.classList.toggle('modal-animation')
    
}
const modalClose = () => {
    modalShadow.style.display = 'none'
}

const brushShow = () =>{

colors.forEach(color => {
    if( color.style.display === 'none') {
        color.style.display = 'block' 
    } else {
        color.style.display = 'none'
    }
})    
}



startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', modalShow)
closeModalBtn.addEventListener('click', modalShow)
brushBtn.addEventListener('click', brushShow)
oneBtn.addEventListener('click', oneChange)
twoBtn.addEventListener('click', twoChange)
treeBtn.addEventListener('click', treeChange)


oneBtn.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#FA1406' )
})
twoBtn.addEventListener('click', () => {
    root.style.setProperty('--thirt-color', '#01fdfd' )
})