document.addEventListener('DOMContentLoaded', () => {
    fetchPups(), filterPup(), fetchFilterGoodPup()
})

function fetchPups(){
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(pup => renderPups(pup))
}

function renderPups(data){
    data.forEach(renderPup)
}

function renderPup(pupData){
    let divNameContainer = document.querySelector('#dog-bar')
    let pspan = document.createElement('span')
    
    pspan.textContent = pupData.name
    divNameContainer.append(pspan)

    pspan.addEventListener('click', () => {
        let divInfoContainer = document.querySelector('#dog-info')
        let img = document.createElement('img')
        let h2 = document.createElement('h2')
        let button = document.createElement('button')
        divInfoContainer.innerHTML = ''

        img.src = pupData.image
        h2.textContent = pupData.name

        if (pupData.isGoodDog === true){
            button.textContent = 'Good Dog!'
        }
        else {
            button.textContent = 'Bad Dog!'
        }

        divInfoContainer.append(img, h2, button)
    })

}

function filterPup(){
    const dogFilter = document.querySelector('#good-dog-filter')
    dogFilter.addEventListener('click', () => {
        if (dogFilter.textContent === 'Filter good dogs: OFF'){
            dogFilter.textContent = 'Filter good dogs: ON'
            
        }
        else if (dogFilter.textContent === 'Filter good dogs: ON'){
            dogFilter.textContent = 'Filter good dogs: OFF'
            
        }
    })
}

function fetchFilterGoodPup(){
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(data => fetchFilterGoodPups(data))
}

function fetchFilterGoodPups(data){
    data.forEach(filterGoodPup)
}

function filterGoodPup(data){
    const dogFilter = document.querySelector('#good-dog-filter')
    if (dogFilter.textContent = 'Filter good dogs: ON'){
        if (data.isGoodDog === true){
            let dogContainer = document.querySelector('#dog-bar')
            let span = document.createElement('span')
            span.textContent = data.name
            dogContainer.innerHTML = ''
            console.log(data.name)
            dogContainer.append(span) 
        }
    }
    else if (dogFilter.textContent = 'Filter good dogs: ON'){
        let container = document.querySelector('#dog-bar')
        let span1 = document.createElement('span')
        span1.textContent = data.name
        container.innerHTML = ''
        console.log(data.name)
        container.append(span1)
    }
}

        
