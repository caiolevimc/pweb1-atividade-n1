const animes = [
  {
    nomeJapones: "Akebi-chan no Sailor-fuku",
    nomeIngles: "Akebi's Sailor Uniform",
    lancamento: 2022,
    generos: ["Escolar", "Slice-of-Life", "Comédia"],
    sinopse: `Com seu uniforme de marinheiro, Komichi Akebi está pronta para tudo. Até mesmo seu primeiro dia na prestigiosa Academia Robai!`,
    url: "akebi-chan-no-sailor-fuku",
  },
  {
    nomeJapones: "Ousama Ranking",
    nomeIngles: "Ranking of Kings",
    lancamento: 2021,
    generos: ["Ação/Aventura", "Comédia", "Fantasia"],
    sinopse: `As aventuras do Príncipe Bojji continuam quando ele regressa para casa com um reino em perigo, um príncipe possuído, e um espelho misterioso.`,
    url: "ousama-ranking",
  },
  {
    nomeJapones: "Toaru Majutsu no Index",
    nomeIngles: "A Certain Magical Index",
    lancamento: 2008,
    generos: ["Ação/Aventura", "Fantasia", "Sci-Fi"],
    sinopse: `Kamijo é um estudante bastante dedicado da Academy City, onde usa-se ciência para desenvolver habilidades sobrenaturais. E isso é uma boa notícia para Index, uma jovem freira fugindo de uma sociedade de feiticeiros que deseja obter os incríveis 103 mil volumes de conhecimento mágico armazenados em sua memória. Quando os caminhos de Index e Kamijo se cruzam, ela ganha um amigo fiel e protetor, e embora Kamijo seja facilmente o garoto mais fraco da Academy City, ele também tem um outro poder: o Imagine Breaker, um poder inexplicável em sua mão direita que lhe permite negar os poderes dos outros.`,
    url: "toaru-majutsu-no-index",
  },
  {
    nomeJapones: "86 EIGHTY-SIX",
    nomeIngles: "86 EIGHTY-SIX",
    lancamento: 2021,
    generos: ["Ação/Aventura", "Drama", "Fantasia", "Sci-Fi"],
    sinopse:
      "Juggernauts, os drones não-tripulados de guerra, desenvolvidos pela República de San Magnolia para conter os ataques dos Legion, os drones autônomos do fronteiriço Império de Giad. Mas os Juggernauts são não-tripulados apenas para a mídia. Na realidade, eles são pilotados pelos Eighty-six - humanos tratados como inferiores, e usados como meras ferramentas. Shin é o capitão do Esquadrão Spearhead, lutando num campo de batalha onde apenas a morte o espera. Lena é uma soldada de elite, encarregada das operações de campo e determinada a tratar os Eighty-six com humanidade.",
    url: "86-eighty-six",
  },
  {
    nomeJapones: "Rokudenashi Majutsu Koushi to Akashic Record",
    nomeIngles: "Akashic Records of Bastard Magic Instructor",
    lancamento: 2017,
    generos: ["Ação/Aventura", "Fantasia", "Escola"],
    sinopse: `Sisti se encontra em uma situação difícil quando seu treinador de magia é substituído por um professor preguiçoso e pouco trabalhador. Agora ela terá que lidar com aquele homem todos os dias e ainda fingir que está tudo bem. Será que as aulas serão as mesmas?`,
    url: "rokudenashi-majutsu-koushi-to-akashic-record",
  },
  {
    nomeJapones: "Tokyo 24-ku",
    nomeIngles: "Tokyo 24th Ward",
    lancamento: 2022,
    generos: ["Ação", "Sci-Fi", "Mistério"],
    sinopse: `Um ano após um incidente mortal, três amigos recebem um telefonema misterioso. Juntos, eles terão que salvar a casa de sua infância.`,
    url: "tokyo-24-ku",
  },
  {
    nomeJapones: "Imouto sae Ireba Ii",
    nomeIngles: "A Sister's All You Need",
    lancamento: 2017,
    generos: ["Comédia", "Ecchi", "Romance", "Slice-of-Life"],
    sinopse: `Esta é a história de Itsuki Hashima, um autor com uma vida atribulada por amigos dementes, uma colega de trabalho viciada em sexo e um contador metido a sádico.A única pessoa estável na vida de Itsuki é seu meio-irmão mais novo, Chihiro, mas até ele guarda um segredo... "Ele" na verdade é "ela."`,
    url: "imouto-sae-ireba-ii",
  },
  {
    nomeJapones: "Arifureta Shokugyou de Sekai Saikyou",
    nomeIngles: "Arifureta: From Commonplace to World's Strongest",
    lancamento: 2019,
    generos: ["Ação/Aventura", "Fantasia", "Harem", "Isekai"],
    sinopse: `Hajime Nagumo, um garoto de 17 anos, foi transportado para outro mundo juntamente com o resto de sua classe, é convocado para um mundo de fantasia! Eles são tratados como heróis e encarregados do dever de salvar a raça humana da extinção. Por receber poderes que não seriam úteis para combate, ele é ridicularizado e intimidado por seus colegas de classe por ser fraco. Em determinado momento, ele cai no fundo de uma Dungeon. Para sair de lá, ele terá que abandonar completamente seu eu fraco e ingênuo do passado.`,
    url: "arifureta-shokugyou-de-sekai-saikyou",
  },
  {
    nomeJapones: "Tate no Yuusha no Nariagari",
    nomeIngles: "The Rising of the Shield Hero",
    lancamento: 2019,
    generos: ["Ação/Aventura", "Fantasia", "Isekai"],
    sinopse: `Naofumi Iwatani passa todos os dias se dua vida jogando e lendo mangás. Certo dia, ele é chamado em um universo paralelo e descobre que faz parte um grupo de super-heróis e precisa carregar o peso de salvar o mundo de uma profecia em suas costas.`,
    url: "tate-no-yuusha-no-nariagari",
  },
  {
    nomeJapones: "Tsuki ga Kirei",
    nomeIngles: "Tsukigakirei",
    lancamento: 2017,
    generos: ["Romance"],
    sinopse: `Com um novo ano letivo vem uma nova multidão de colegas de classe, e para o último ano do ensino médio, o aspirante a escritor Kotarou Azumi e o membro da equipe de atletismo Akane Mizuno acabam na mesma classe. Embora inicialmente completos estranhos, alguns encontros casuais despertam um desejo inocente em seus corações. Um olhar ansioso, um coração palpitante - as marcas do amor jovem deslizam em suas vidas quando o destino cruza seus caminhos.`,
    url: "tsuki-ga-kirei",
  },
  {
    nomeJapones: "Kobayashi-san Chi no Maid Dragon",
    nomeIngles: "Miss Kobayashi's Dragon Maid",
    lancamento: 2017,
    generos: ["Slice-of-Life", "Fantasia", "Comédia"],
    sinopse: `Kobayashi estava em um excursão pelas montanhas quando encontrou um dragão que tinha forma de mulher. Sem se lembrar de nada, Kobayashi não imaginava que o dragão estava grato pelo encontro e que havia prometido recompensá-la. Dias depois, o dragão, vindo de outro mundo, se apresentou a ela e acabou ganhando sua confiança, eventualmente se mudando para sua casa.`,
    url: "kobayashi-san-chi-no-maid-dragon",
  },
  {
    nomeJapones: "Tensei shitara Slime Datta Ken",
    nomeIngles: "That Time I Got Reincarnated as a Slime",
    lancamento: 2018,
    generos: ["Ação/Aventura", "Fantasia", "Comédia", "Isekai"],
    sinopse: `Minami Satoru, funcionário de uma grande coorporação, é assassinado e renasce num mundo paralelo. No entanto, algo está diferente: ele renasceu como um slime. Lá ele faz muitos amigos e com suas novas habilidades ele enfrenta diversas batalhas que o deixam entre a vida e a morte.`,
    url: "tensei-shitara-slime-datta-ken",
  },
  {
    nomeJapones: "Black Clover",
    nomeIngles: "Black Clover",
    lancamento: 2017,
    generos: ["Ação/Aventura", "Fantasia", "Comédia", "Shounen"],
    sinopse: `Dois orfãos, Asta e Yuno, foram criados em uma igreja no reino de Clover. Asta nasceu sem poderes mágicos, mas Yuno nasceu como prodígio. Carregado de frustração, certo dia Asta encontra um poder chamado "anti magia" e cria uma rivalidade não intencional com seu próprio irmão.`,
    url: "black-clover",
  },
].sort((anime1, anime2) => {
  if(anime1.nomeJapones > anime2.nomeJapones){
    return 1
  } else if(anime1.nomeJapones < anime2.nomeJapones){
    return -1
  } else {
    return 0
  }
});



module.exports = animes;



/*

{
    nomeJapones: "aaa",
    nomeIngles: "aaa",
    lancamento: 10101,
    generos: ["aaa","aaa","aaa"],
    sinopse: `aaaaaa`,
    url: "alalal"
}

*/
