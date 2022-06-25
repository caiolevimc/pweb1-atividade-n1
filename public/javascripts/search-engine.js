document.querySelector('#search').addEventListener('input', selectAnimes)

const animesBoxs = document.querySelectorAll('.anime-box')

let nomes = []
animesBoxs.forEach(animeBox => nomes.push({
    ingles: animeBox.dataset.nomeIngles,
    japones: animeBox.dataset.nomeJapones
}))

function selectAnimes(event){
    const searchQuery = event.target.value
    console.log(searchQuery)
    console.log(typeof searchQuery)
    const results = getQueryResults(searchQuery)

    animesBoxs.forEach(animeBox => {
        if(results.some(result => result.ingles === animeBox.dataset.nomeIngles || result.japones === animeBox.dataset.nomeJapones)){
            animeBox.style.display = 'inline-block'
        } else {
            animeBox.style.display = 'none'
        }
    })
}

function getQueryResults(searchQuery){
    const resultsNomesIngles = nomes.filter(nome => nome.ingles.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)
    const resultsNomesJapones = nomes.filter(nome => nome.japones.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)
    const resultsFormatedIngles = nomes.filter(nome => simplifyText(nome.ingles).indexOf(simplifyText(searchQuery)) > -1)
    const resultsFormatedJapones = nomes.filter(nome => simplifyText(nome.japones).indexOf(simplifyText(searchQuery)) > -1)

    return [...new Set(resultsNomesIngles.concat(resultsNomesJapones, resultsFormatedIngles, resultsFormatedJapones))]
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