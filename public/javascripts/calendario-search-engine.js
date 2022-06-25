document.querySelector('#search').addEventListener('input', pesquisar)
const checkboxs = document.querySelectorAll('.dia-checkbox')
checkboxs.forEach(checkbox => checkbox.addEventListener('input', filtrar))

const animeBoxs = document.querySelectorAll('.anime-box')
let animes = []
animeBoxs.forEach(animeBox => animes.push({
    id: animeBox.id,
    nomeIngles: animeBox.dataset.nomeIngles,
    nomeJapones: animeBox.dataset.nomeJapones,
    dia: animeBox.dataset.dia,
}))
console.log(animes)

const activeAnimeBoxs = []
let searchQuery = ""
let diaFilter = "Todos"

function pesquisar(event){
    searchQuery = event.target.value
    console.log(searchQuery)
    selectAnimes()
}

function filtrar(){
    getCheckedDia()
    //console.log(diaFilter)
    selectAnimes()
}

function selectAnimes(){
    const filterResults = filterByDia()
    const searchFilter = filterBySearch()

    console.log(filterResults)
    console.log(searchFilter)

    const results = filterResults.filter(anime => searchFilter.includes(anime))

    animeBoxs.forEach(anime => {
        if(results.some(result => result.id === anime.id)){
            anime.style.display = 'inline-block'
        } else {
            anime.style.display = 'none'
        }
    })
}

function filterBySearch(){
    return animes.filter(anime => {
        return anime.nomeIngles.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
                anime.nomeIngles.toLowerCase().indexOf(simplifyText(searchQuery)) > -1 ||
                anime.nomeJapones.toLowerCase().indexOf(searchQuery.toLowerCase) > -1 ||
                anime.nomeJapones.toLowerCase().indexOf(simplifyText(searchQuery)) > -1
})
}

function filterByDia(){
    if(diaFilter === "Todos"){
        return animes
    } else {
        return animes.filter(anime => anime.dia.toLowerCase() === diaFilter.toLowerCase())
    }
}

function getCheckedDia(){
    checkboxs.forEach(checkbox => {
        if(checkbox.checked){
            diaFilter = checkbox.value
        }
    })
}

function simplifyText(text){
    const regex = /[\s,\.;:(\)\-'\+]/
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