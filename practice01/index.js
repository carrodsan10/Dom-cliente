document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container')
    const userName = getCookie('username')

    if (userName) {
        container.innerHTML = `<h1>Welcome back, ${userName}!</h1>`
    } else {
        container.innerHTML = `
            <input type='text' id='nameInput' placeholder='Enter your name'>
            <button id='saveButton'>Save</button>
        `

        document.querySelector('#saveButton').addEventListener('click', () => {
            const nameInput = document.querySelector('#nameInput').value
            setCookie('username', nameInput, 7)
            location.reload()
        })
    }
})

const setCookie = (cookieName, cookieValue, daysToExpire) => {
    const currentDate = new Date()
    currentDate.setTime(
        currentDate.getTime() + daysToExpire * 24 * 60 * 60 * 1000
    )
    const expires = `expires=${currentDate.toUTCString()}`
    document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`
}

const getCookie = (cookieName) => {
    const nameEquals = `${cookieName}=`
    const cookieArray = document.cookie.split(';')

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim()
        if (cookie.indexOf(nameEquals) == 0) {
            return cookie.substring(nameEquals.length, cookie.length)
        }
    }
    return null
}
