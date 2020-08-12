const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const now = document.querySelector('.now')
const days = document.querySelector('.days')
const daysOfWeek = document.querySelector('.days-of-week')
const datepicker = document.querySelector('.main-title')
const date = document.querySelector('.date')
const arrow = document.querySelector('.arrow')


const prev2 = document.querySelector('.prev2')
const next2 = document.querySelector('.next2')
const days2 = document.querySelector('.days2')
const daysOfWeek2 = document.querySelector('.days-of-week2')
const datepicker2 = document.querySelector('.main-title2')
const date2 = document.querySelector('.date2')
const arrow2 = document.querySelector('.arrow2')



const monthArray = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const dayOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

let month = new Date().getMonth()
let year = new Date().getFullYear()
let isClick = false


datepicker.textContent = 'ДД.ММ.ГГГГ'
datepicker2.textContent = 'ДД.ММ.ГГГГ'

now.textContent = `${new Date().getDate()} ${monthArray[month]} ${year}`

arrow.onclick = () => {
    if(date.classList.contains('isOpen')) {
        date.classList.remove('isOpen')
    }else{
        date.classList.add('isOpen')
    }
    
}

arrow2.onclick = () => {
    if(date.classList.contains('isOpen')) {
        date.classList.remove('isOpen')
    }else{
        date.classList.add('isOpen')
    }
}

createDaysOfWeek = () => {
    for(let i = 0; i < dayOfWeek.length; i++){
        daysOfWeek.innerHTML += `<div class="list-day-week">${dayOfWeek[i]}</div>`
    }
}


createDays = () => {
    
    if(month === 1){
        for(let i = 1; i <= 28; i++){
 
            days.innerHTML += `<div data-id="${i}" class="day-number">${i}</div>`
        }    
    }else if(month % 2 === 0){
        for(let i = 1; i <= 30; i++){
    
            days.innerHTML += `<div data-id="${i}" class="day-number">${i}</div>`
        }
    }else{
        for(let i = 1; i <= 31; i++){
      
            days.innerHTML += `<div data-id="${i}" class="day-number">${i}</div>`
        }
    } 
    
}

prev.onclick = () => {
    if(month === 0){
        month = 11;
        year--
        now.textContent = `${new Date().getDate()} ${monthArray[month]} ${year}`
        clearDays()
        createDays()
    }else{
        month--
        now.textContent = `${new Date().getDate()} ${monthArray[month]} ${year}`
        clearDays()
        createDays()
    }
}

next.onclick = () => {
    if(month === 11){
        month = 0;
        year++
        now.textContent = `${new Date().getDate()} ${monthArray[month]} ${year}`
        clearDays()
        createDays()
    }else{
        month++
        now.textContent = `${new Date().getDate()} ${monthArray[month]} ${year}`
        clearDays()
        createDays()
    } 
}


days.addEventListener('click', event => {

    const idDay = event.target.getAttribute('data-id')

    if(isClick){
        //now2.textContent = `${idDay} ${monthArray[month]} ${year}`
        datepicker2.textContent = `${idDay} ${monthArray[month]} ${year}`
        isClick = false
    }else{
        now.textContent = `${idDay} ${monthArray[month]} ${year}`
        datepicker.textContent = now.textContent
        isClick = true
    }

})

function clearDays(){
    const day = document.querySelectorAll('.day-number')
    day.forEach(item => {
        item.remove()
    })
}

createDays()
createDaysOfWeek()
