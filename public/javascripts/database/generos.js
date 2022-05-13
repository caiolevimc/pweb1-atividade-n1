const generos = [
    {nome: "Ação/Aventura", url: "acao-aventura"},
    {nome: "Histórico", url: "historico"},
    {nome: "Mistério", url: "misterio"},
    {nome: "Shounen", url: "shounen"},
    {nome: "Idols", url: "idols"},
    {nome: "Pós-Apocalíptico", url: "pos-apocaliptico"},
    {nome: "Slice-of-Life", url: "slice-of-life"},
    {nome: "Comédia", url: "comedia"},
    {nome: "Isekai", url: "isekai"},
    {nome: "Romance", url: "romace"},
    {nome: "Esportes", url: "esportes"},
    {nome: "Drama", url: "drama"},
    {nome: "Sci-Fi", url: "sci-fi"},
    {nome: "Sobrenatural", url: "sobrenatural"},
    {nome: "Fantasia", url: "fantasia"},
    {nome: "Mecha", url: "mecha"},
    {nome: "Seinen", url: "seinen"},
    {nome: "Suspense", url: "suspense"},
    {nome: "Hárem", url: "harem"},
    {nome: "Música", url: "musica"},
    {nome: "Shoujo", url: "shoujo"},
].sort((genero1, genero2) => {
    if(genero1.nome > genero2.nome){
      return 1
    } else if(genero1.nome < genero2.nome){
      return -1
    } else {
      return 0
    }
  });

module.exports = generos