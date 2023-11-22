let body = document.querySelector("body")

function v1() {
    let popup_v1 = document.querySelector(".popup_v1")
    let popup_v1_cross = document.querySelector(".popup_v1-cross")
    let popup_v1_main = document.querySelector(".main_v1")

    popup_v1_main.addEventListener('click', () => {
        popup_v1.classList.add("active")
        body.classList.add("body")
    })

    popup_v1_cross.addEventListener('click', () => {
        popup_v1.classList.remove("active")
        body.classList.remove("body")

    })
}

function v2() {
    let popup_v2 = document.querySelector(".popup_v2")
    let popup_v2_cross = document.querySelector(".popup_v2-cross")
    let popup_v2_main = document.querySelector(".main_v2")

    popup_v2_main.addEventListener('click', () => {
        popup_v2.classList.add("active")
        body.classList.add("body")
    })

    popup_v2_cross.addEventListener('click', () => {
        popup_v2.classList.remove("active")
        body.classList.remove("body")

    })
}

function v3() {
    let popup_v3 = document.querySelector(".popup_v3")
    let popup_v3_cross = document.querySelector(".popup_v3-cross")
    let popup_v3_main = document.querySelector(".main_v3")

    popup_v3_main.addEventListener('click', () => {
        popup_v3.classList.add("active")
        body.classList.add("body")

    })

    popup_v3_cross.addEventListener('click', () => {
        popup_v3.classList.remove("active")
        body.classList.remove("body")
    })
}

if (10 > 1) {
    v1()
    v2()
    v3()
    console.log("Normal")
}