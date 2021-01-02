// setInterval(setClock, 1000)

// const secondHand = document.querySelector('[data-second-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const hourHand = document.querySelector('[data-hour-hand]')

// function setClock() {
//     const currentDate = new Date()
//     const getSecond = currentDate.getSeconds() /60
//     const getMinute = (getSecond + currentDate.getMinutes()) /60
//     const getHour = (getMinute + currentDate.getHours()) /12

//     setClockHandsInRotation(secondHand, getSecond)
//     setClockHandsInRotation(minuteHand, getMinute)
//     setClockHandsInRotation(hourHand,getHour)
// }

// function setClockHandsInRotation(element,rotation) {
//     element.style.setProperty('--rotation', rotation * 360)
// }
// setClock()

class Clock{
    constructor() {
        this.secondHand = document.querySelector('[data-second-hand]')
        this.minuteHand = document.querySelector('[data-minute-hand]')
        this.hourHand = document.querySelector('[data-hour-hand]')
        setInterval(()=>this.setClock(), 1000)
        this.setClock()
    }

    setClock() {
        const currentDate = new Date()
        const getSecond = currentDate.getSeconds() / 60
        const getMinute = (getSecond + currentDate.getMinutes()) /60
        const getHour = (getMinute + currentDate.getHours()) /12

        this.setClockHandsInRotation(this.secondHand, getSecond)
        this.setClockHandsInRotation(this.minuteHand, getMinute)
        this.setClockHandsInRotation(this.hourHand,getHour)
    }

    setClockHandsInRotation(element, rotation) {
        element.style.setProperty('--rotation', rotation * 360)
    }
}
new Clock();