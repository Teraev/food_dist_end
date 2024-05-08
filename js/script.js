let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')



function open_close_modal(arr, open) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"]('show', 'fade')
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)

const tab_btns = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')

function showTabs(idx) {
    tabcontent.forEach(slide => slide.classList.add('hide', 'fade'))
    tabcontent[idx].classList.remove('hide')

}
showTabs(0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(el => el.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')
        showTabs(idx)
    }
})


const offer_slide = document.querySelector('.offer__slider-wrapper')
const total = document.querySelector('#total')
const slides = document.querySelectorAll('.offer__slide');

total.textContent = "0" + offer_slide.childElementCount

let slidesindex = 0;

let num_picture = document.querySelector('#current')


slides.forEach(slide => slide.classList.add('hide', 'fade'));
slides[slidesindex].classList.remove('hide');

const next_btn = document.querySelector('.offer__slider-next');
const prev_btn = document.querySelector('.offer__slider-prev');




function slidesshow(n) {
    slides.forEach(slide => {
        slide.classList.add('hide', 'fade')
    });

    slidesindex = (slides.length + slidesindex + n) % slides.length;
    slides[slidesindex].classList.remove('hide');

    num_picture.innerText = (slidesindex + 1).toString().padStart(2, '0')


}

next_btn.onclick = () => {
    slidesshow(1);
    num_picture.innerText = "0" + (slidesindex + 1);
};

prev_btn.onclick = () => {
    slidesshow(-1);
    num_picture.innerText = "0" + (slidesindex + 1);
};

const deadline = "2024-05-06 15:22"

getRemainingTime(deadline)
function getRemainingTime(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor((t / 1000) / 60 / 60 / 24)
    const hours = Math.floor((t / 1000) / 60 / 60 % 24)
    const minutes = Math.floor((t / 1000) / 60 % 60)
    const seconds = Math.floor((t / 1000) % 60)


    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}








function setTimer(endTime, selector) {



    const t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        interval = setInterval(updateTimer, 1000)

    function updateTimer() {
        const t = getRemainingTime(endTime)

        if (t.t <= 0) {
            clearInterval(interval)
            days.innerHTML = '0'
            hours.innerHTML = '0'
            minutes.innerHTML = '0'
            seconds.innerHTML = '0'

            confetti({
                particleCount: 1500,
                spread: 200,
                origin: { y: 0.5 },

            });



            return
        }



        days.innerHTML = t.days,
            hours.innerHTML = t.hours,
            minutes.innerHTML = t.minutes,
            seconds.innerHTML = t.seconds
    }
}



setTimer(deadline, '.timer')

let deliver = document.getElementById('deliver')
let menu = document.getElementById('menu')

let to_vtoroy_block = document.getElementById('to_vtoroy_block')
let vtoroy_block = document.getElementById('vtoroy_block')



// calc

const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const result_view = document.querySelector('#result')

const user = {
    gender: "woman",
}


genderBtns.forEach((btn) => {
    btn.onclick = () => {
        const g = btn.getAttribute('data-gender')
        user.gender = g

        genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }

})


inputs.forEach(inp => {
    inp.oninput = () => {
        user[inp.name] = inp.value
    }
})


act_btns.forEach((btn) => {
    btn.onclick = () => {
        const act = +btn.getAttribute('data-act')
        
        if (user.gender === 'woman') {
          const  result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age)
            result_view.innerHTML = Math.round(result * act);
        } else {
          const   result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age)
            result_view.innerHTML = Math.round(result * act);
        }
        


        act_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})


// Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
// Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).

deliver.onclick = () => {
    menu.scrollIntoView({ behavior: "smooth", block: "start" })
}

to_vtoroy_block.onclick = () => {
    vtoroy_block.scrollIntoView({ behavior: "smooth", block: "start" })
}

const form = document.querySelector('.order__form')
const btn = form.querySelector('.btn')
let name = form.querySelector('input[name="name"]')
let number = form.querySelector('input[name="phone"]')


    const Call = {
        name: "",
        phone: ""
    }
form.onsubmit = (e) => {
e.preventDefault()
    btn.onclick = () => {
        Call.name = name.value
        Call.phone = number.value

        console.log(Call)
    }
}