

let date = new Date();


let today = date.toISOString().split("T")[0]

console.log(today);

start_date.value = today
start_date.min = today


let tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1)
let tomorrowFormat = tomorrow.toISOString().split("T")[0]

console.log(tomorrowFormat)

end_date.value = tomorrowFormat
end_date.min = tomorrowFormat

start_date.addEventListener("change", (e) => {

    let day = new Date(e.target.value)

    if (start_date.value > end_date.value) {

        day.setDate(day.getDate() + 1)
        let tomorrowFormat2 = day.toISOString().split("T")[0]
        end_date.value = tomorrowFormat2


    }

})


end_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value)
    day.setDate(day.getDate() - 1)

    if (start_date.value > end_date.value) {
        let yesterday = day.toISOString().split("T")[0]
        start_date.value = yesterday
        console.log(yesterday)
    }



})


function Booking() {

    let diff = Math.abs(new Date(end_date.value) - new Date(start_date.value))

    let diffday = Math.ceil(diff / (1000 * 60 * 60 * 24))

    let priceday = 46 * diffday
    console.log(priceday);

    total.innerText = `${priceday}`

}

start_date.addEventListener("change", Booking)
end_date.addEventListener("change", Booking)

