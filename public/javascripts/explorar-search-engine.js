document.querySelector('#search').addEventListener('input', pesquisar)
const checkboxs = document.querySelectorAll('.genero-checkbox')
checkboxs.forEach(checkbox => checkbox.addEventListener('input', filtrar))

const animeBoxs = document.querySelectorAll('.anime-box')
let animes = []
animeBoxs.forEach(animeBox => {
    animes.push({
        id: animeBox.id,
        nomeIngles: animeBox.dataset.nomeIngles,
        nomeJapones: animeBox.dataset.nomeJapones,
        generos: animeBox.dataset.generos.split(',')
    })
})

console.log(animes)

let searchQuery = ""
let generosChecked = []
let isTodosChecked = true

function selectAnimes(){
    const filterResults = filterByGenero()
    const searchFilter = filterBySearch()

    const results = filterResults.filter(anime => searchFilter.includes(anime))
    console.log(results)

    animeBoxs.forEach(anime => {
        if(results.some(result => result.id === anime.id)){
            anime.style.display = 'inline-block'
        } else {
            anime.style.display = 'none'
        }
    })
}

function pesquisar(event){
    searchQuery = event.target.value
    console.log(searchQuery)
    selectAnimes()
}


function filtrar(event){
    getGenerosChecked(event.target)
    console.log(generosChecked)
    selectAnimes()
}

function filterByGenero(){
    if(isTodosChecked){
        return animes
    } else {
        return animes.filter(anime => {
            return generosChecked.every(genero => {
                return anime.generos.includes(genero); 
            })
        })
        
    }
}

function filterBySearch(){
    return animes.filter(anime => {
        return anime.nomeIngles.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
                anime.nomeIngles.toLowerCase().indexOf(simplifyText(searchQuery)) > -1 ||
                anime.nomeJapones.toLowerCase().indexOf(searchQuery.toLowerCase) > -1 ||
                anime.nomeJapones.toLowerCase().indexOf(simplifyText(searchQuery)) > -1
    })
}

function getGenerosChecked(checkbox){
    if(checkbox.id === 'todos'){
        if(!isTodosChecked){
            pressTodos()
        }
    } else {
        unmarkTodos()
        if(generosChecked.includes(checkbox.value)){
            generosChecked.splice(generosChecked.indexOf(checkbox.value), 1)
        } else {
            generosChecked.push(checkbox.value)
        }
    }
}

function pressTodos(){
    isTodosChecked = true
    generosChecked = []
    checkboxs.forEach(checkbox => {
        checkbox.checked = checkbox.id === 'todos' ? true : false
    })
    
}

function unmarkTodos(){
    isTodosChecked = false
    document.querySelector('#todos').checked = false
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