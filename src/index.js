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



        
