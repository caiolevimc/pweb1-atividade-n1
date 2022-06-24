document.querySelector('#search').addEventListener('input', selectAnimes)
const animesBoxs = document.querySelectorAll('.anime-box')

let animesUrls = []
animesBoxs.forEach(animeBox => animesUrls.push(animeBox.id))

function selectAnimes(event){
    const searchQuery = simplifyText(event.target.value)
    const queryAnimesUrls = getAnimesUrls(searchQuery)

    animesBoxs.forEach(animeBox => {
        if(queryAnimesUrls.includes(animeBox.id)){
            animeBox.style.display = 'inline-block'
        } else {
            animeBox.style.display = 'none'
        }
    })
            
}

function getAnimesUrls(text){
    return animesUrls.filter(animeUrl => animeUrl.indexOf(text) > -1)
}

function simplifyText(text){
    const regex = /[\s,\.;:\(\)\-'\+]/
    return text.toLowerCase().split(regex)
    .map(word => word.trim())
    .map(word => word.split('’').join(''))
    .map(word => word.replace('!', ''))
    .map(word => word.replace('?', ''))
    .filter(word => word.length > 0)
    .filter(word => word !== 's')
    .filter(word => word !== '&')
    .join('-')
}