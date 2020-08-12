const arrow = document.querySelector('.counter-arrow')
const dropCounter = document.querySelector('.dropdown-counter')
const dropWrapCounter = document.querySelectorAll('.counter')
const dropWrap = document.querySelectorAll('.dropdown-wrapper')
const title = document.querySelector('.res-main-title')


let allRes = 0

arrow.onclick = () => {
    if(dropCounter.classList.contains('isOpen')){
        dropCounter.classList.remove('isOpen')
    }else{
        dropCounter.classList.add('isOpen')
    }
}


dropWrap.forEach(item => {
    const counter = item.querySelector('.counter')
    const pos = counter.querySelector('.positive')
    const res = counter.querySelector('.result')
    const neg = counter.querySelector('.negative')

    let resPeople = 0

    pos.onclick = () => {
        resPeople++
        res.textContent = resPeople
        allRes++
        title.textContent = `${allRes} гостя`
    }

    neg.onclick = () => {
        if(resPeople === 0){
            console.log('Нельзя вносить значение меньше 0!')
        }else{
            resPeople--
            res.textContent = resPeople
            allRes--
            title.textContent = `${allRes} гостя`
        }
    }

})








