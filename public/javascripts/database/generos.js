const generos = [
    {nome: "Ação/Aventura", url: "acao-aventura"},
    {nome: "Mistério", url: "misterio"},
    {nome: "Thriller", url: "thriller"},
    {nome: "Ecchi", url: "ecchi"},
    {nome: "Mahou Shoujo", url: "mahou-shoujo"},
    {nome: "Horror", url: "horror"},
    {nome: "Psicológico", url: "psicologico"},
    {nome: "Slice-of-Life", url: "slice-of-life"},
    {nome: "Comédia", url: "comedia"},
    {nome: "Romance", url: "romace"},
    {nome: "Esporte", url: "esporte"},
    {nome: "Drama", url: "drama"},
    {nome: "Sci-Fi", url: "sci-fi"},
    {nome: "Sobrenatural", url: "sobrenatural"},
    {nome: "Fantasia", url: "fantasia"},
    {nome: "Mecha", url: "mecha"},
    {nome: "Música", url: "musica"},
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