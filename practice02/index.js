document.addEventListener('DOMContentLoaded', () => {
    const wordsArray = [
        'mango',
        'banana',
        'pear',
        'apple',
        'fig',
        'lemon',
        'date',
        'orange',
        'cherry',
        'grape',
    ]
    const wordListContainer = document.getElementById('wordListContainer')

    // Mostrar lista desordenada
    wordsArray.forEach((word) => {
        const listItemElement = document.createElement('li')
        listItemElement.textContent = word
        wordListContainer.appendChild(listItemElement)
    })

    // Esperar 3 segundos y preguntar al usuario si quiere ordenar la lista
    setTimeout(() => {
        const userResponse = confirm(
            'Do you want to sort the list alphabetically?'
        )
        if (userResponse) {
            wordListContainer.innerHTML = '' // Borrar la lista existente
            wordsArray.sort().forEach((word) => {
                const listItemElement = document.createElement('li')
                listItemElement.textContent = word
                wordListContainer.appendChild(listItemElement)
            })
        }
    }, 3000)
})
