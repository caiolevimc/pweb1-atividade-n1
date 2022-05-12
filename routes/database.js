const animes = [
    {
        nomeJapones: "Akebi-chan no Sailor-fuku",
        nomeIngles: "Akebi's Sailor Uniform",
        lancamento: 2022,
        generos: ["Escolar","Slice of Life","Comédia"],
        sinopse: `Komichi Akebi está no sétimo ano do fundamental e ela só quer saber de uma coisa: o uniforme de marinheira do Colégio Particular Roubai! Com este novo capítulo da vida dela cada vez mais próximo, ela sonha com todas as experiências que viverá - as aulas, os almoços na escola, as atividades de clube e, é claro, todas as amigas que ela fará! Armada com seu look favorito, Komichi está pronta pra tudo.`,
        url: "akebi-chan-no-sailor-fuku"        
    },
    {
        nomeJapones: "Ousama Ranking",
        nomeIngles: "Ranking of Kings",
        lancamento: 2021,
        generos: ["Ação/Aventura","Comédia","Fantasia"],
        sinopse: `Incapaz de falar, ouvir ou de manejar uma espada, o príncipe Bojji não parece um herdeiro muito adequado ao trono - e seu reino concorda. Mas um encontro fatídico com Kage, uma sombra no chão, dá ao menino o seu primeiro amigo. Juntos, os dois partem numa grande aventura, formando um laço capaz de superar qualquer obstáculo... Até mesmo o de se tornar rei.`,
        url: "ousama-ranking"
    },
    {
        nomeJapones: "Toaru Majutsu no Index",
        nomeIngles: "A Certain Magical Index",
        lancamento: 2008,
        generos: ["Ação/Aventura","Fantasia","Sci-Fi"],
        sinopse: `Kamijo é um estudante bastante dedicado da Academy City, onde usa-se ciência para desenvolver habilidades sobrenaturais. E isso é uma boa notícia para Index, uma jovem freira fugindo de uma sociedade de feiticeiros que deseja obter os incríveis 103 mil volumes de conhecimento mágico armazenados em sua memória. Quando os caminhos de Index e Kamijo se cruzam, ela ganha um amigo fiel e protetor, e embora Kamijo seja facilmente o garoto mais fraco da Academy City, ele também tem um outro poder: o Imagine Breaker, um poder inexplicável em sua mão direita que lhe permite negar os poderes dos outros.`,
        url: "toaru-majutsu-no-index"
    },
    {
        nomeJapones: "86 EIGHTY-SIX",
        nomeIngles: "86 EIGHTY-SIX",
        lancamento: 2021,
        generos: ["Ação/Aventura","Drama","Fantasia", "Sci-Fi"],
        sinopse: "Juggernauts, os drones não-tripulados de guerra, desenvolvidos pela República de San Magnolia para conter os ataques dos Legion, os drones autônomos do fronteiriço Império de Giad. Mas os Juggernauts são não-tripulados apenas para a mídia. Na realidade, eles são pilotados pelos Eighty-six - humanos tratados como inferiores, e usados como meras ferramentas. Shin é o capitão do Esquadrão Spearhead, lutando num campo de batalha onde apenas a morte o espera. Lena é uma soldada de elite, encarregada das operações de campo e determinada a tratar os Eighty-six com humanidade.",
        url: "86-eighty-six"
    },
    {
        nomeJapones: "Rokudenashi Majutsu Koushi to Akashic Record",
        nomeIngles: "Akashic Records of Bastard Magic Instructor",
        lancamento: 2017,
        generos: ["Ação/Aventura","Fantasia","Escola"],
        sinopse: `A Academia Imperial de Magia de Alzano está localizada no sul do Império Alzano, um dos maiores reinos mágicos, e é considerada uma das mais prestigiadas academias do mundo, onde estudantes podem aprender as formas mais elevadas de magia. Todos que desejam aprender magia sonham em estudar nessa academia, e tanto seus estudantes quanto seus professores têm orgulho de integrar sua história de 400 anos.
        Glenn Radars é um novo instrutor que foi escolhido para dar aulas em meio-período nessa respeitada academia. As aulas nunca antes vistas desse vagabundo imprestável estão prestes a começar!`,
        url: "rokudenashi-majutsu-koushi-to-akashic-record"
    },
    {
        nomeJapones: "Tokyo 24-ku",
        nomeIngles: "Tokyo 24th Ward",
        lancamento: 2022,
        generos: ["Ação","Sci-Fi","Mistério"],
        sinopse: `A Região Administrativa Especial do Extremo Oriente, também conhecida como 24º Distrito, é uma ilha artificial que flutua na Baía de Tóquio. Nascidos na ilha, os amigos Shuta, Ran e Koki sempre andavam juntos, até que um acidente os separou para sempre. Anos depois, o telefone dos três toca ao mesmo tempo, e alguém no outro lado da linha exige que eles tomem uma decisão sobre seu futuro. Agora, os três amigos terão de fazer o que acreditam ser necessário para proteger o 24º Distrito e seus habitantes.`,
        url: "tokyo-24-ku"
    },
    {
        nomeJapones: "Imouto sae Ireba Ii",
        nomeIngles: "A Sister's All You Need",
        lancamento: 2017,
        generos: ["Comédia","Ecchi","Romance", "Slice of Life"],
        sinopse: `Esta é a história de Itsuki Hashima, um autor com uma vida atribulada por amigos dementes, uma colega de trabalho viciada em sexo e um contador metido a sádico.
        A única pessoa estável na vida de Itsuki é seu meio-irmão mais novo, Chihiro, mas até ele guarda um segredo... "Ele" na verdade é "ela."`,
        url: "imouto-sae-ireba-ii"
    },
    {
        nomeJapones: "Arifureta Shokugyou de Sekai Saikyou",
        nomeIngles: "Arifureta: From Commonplace to World's Strongest",
        lancamento: 2019,
        generos: ["Ação/Aventura","Fantasia","Harem"],
        sinopse: `Hajime Nagumo, um garoto de 17 anos, foi transportado para outro mundo juntamente com o resto de sua classe, é convocado para um mundo de fantasia! Eles são tratados como heróis e encarregados do dever de salvar a raça humana da extinção. Por receber poderes que não seriam úteis para combate, ele é ridicularizado e intimidado por seus colegas de classe por ser fraco. Em determinado momento, ele cai no fundo de uma Dungeon. Para sair de lá, ele terá que abandonar completamente seu eu fraco e ingênuo do passado.`,
        url: "arifureta-shokugyou-de-sekai-saikyou"
    },
    {
        nomeJapones: "Tate no Yuusha no Nariagari",
        nomeIngles: "The Rising of the Shield Hero",
        lancamento: 2019,
        generos: ["Ação/Aventura","Fantasia"],
        sinopse: `Os Quatro Heróis Cardeais são um grupo de homens comuns do Japão moderno convocados ao reino de Melromarc para se tornarem seus salvadores. Melromarc é um país atormentado pelas Ondas da Catástrofe que repetidamente devastaram a terra e trouxeram desastres para seus cidadãos por séculos. Os quatro heróis recebem, respectivamente, uma espada, uma lança, um arco e um escudo para derrotar essas Ondas. Naofumi Iwatani, um otaku, é amaldiçoado com o destino de ser o "Herói do Escudo". Armado apenas com um escudo desprezível, Naofumi é menosprezado e ridicularizado por seus companheiros heróis e pelo povo do reino devido às suas fracas capacidades ofensivas e personalidade sem brilho.

        Quando os heróis recebem recursos e companheiros para treinar, Naofumi parte com a única pessoa disposta a treinar ao lado dele, Malty Melromarc. Ele logo é traído por ela, no entanto, e é falsamente acusado de tirar vantagem dela. Naofumi então se torna fortemente discriminado e odiado pelo povo de Melromarc por algo que ele não fez. Com uma tempestade furiosa de mágoa e desconfiança em seu coração, Naofumi começa sua jornada para fortalecer a si mesmo e sua reputação. Mais adiante, no entanto, a dificuldade de estar sozinho se instala, então Naofumi compra uma escrava semi-humana à beira da morte chamada Raphtalia para acompanhá-lo em suas viagens.
        
        À medida que as Ondas se aproximam do reino, Naofumi e Raphtalia devem lutar pela sobrevivência do reino e proteger o povo de Melromarc de seu futuro malfadado.`,
        url: "tate-no-yuusha-no-nariagari"
    },
    {
        nomeJapones: "Tsuki ga Kirei",
        nomeIngles: "Tsuki ga Kirei",
        lancamento: 2017,
        generos: ["Romance"],
        sinopse: `Com um novo ano letivo vem uma nova multidão de colegas de classe, e para o último ano do ensino médio, o aspirante a escritor Kotarou Azumi e o membro da equipe de atletismo Akane Mizuno acabam na mesma classe. Embora inicialmente completos estranhos, alguns encontros casuais despertam um desejo inocente em seus corações. Um olhar ansioso, um coração palpitante - as marcas do amor jovem deslizam em suas vidas quando o destino cruza seus caminhos.

        No entanto, embora o amor seja paciente e o amor seja gentil, Kotarou e Akane descobrem que nem sempre é simples. Apesar do conforto que encontram na companhia um do outro, mágoa e ansiedade vêm de mãos dadas com a busca dos sentimentos em seus corações. Com a incerteza de como o outro realmente se sente, bem como os afetos concorrentes daqueles ao seu redor, o caminho a seguir não é claro. Mesmo assim, sob a luz brilhante de uma linda lua cheia, Kotarou reúne coragem para fazer uma única pergunta a Akane, uma que muda para sempre seu relacionamento tranquilo.`,
        url: "tsuki-ga-kirei"
    },
    {
        nomeJapones: "Kobayashi-san Chi no Maid Dragon",
        nomeIngles: "Miss Kobayashi's Dragon Maid",
        lancamento: 2017,
        generos: ["Slice of Life","Fantasia", "Comédia"],
        sinopse: `Quando Kobayashi sai para mais um dia de trabalho, ela abre a porta do apartamento apenas para ser recebida por uma visão incomumente assustadora - a cabeça de um dragão, olhando para ela do outro lado da varanda. O dragão imediatamente se transforma em uma jovem fofa, peituda e enérgica vestida com uma roupa de empregada, apresentando-se como Tooru.

        Acontece que a estóica programadora havia encontrado o dragão na noite anterior em uma excursão bêbada às montanhas e, como a fera mítica não tinha para onde ir, ela ofereceu à criatura um lugar para ficar em sua casa. Assim, Tooru chegou para lucrar com a oferta, pronta para retribuir a bondade de seu salvador, trabalhando como sua criada pessoal. Embora profundamente arrependida de suas palavras e hesitante em cumprir sua promessa, uma mistura de culpa e as incríveis habilidades de dragão de Tooru convence Kobayashi a levar a garota.
        
        Apesar de ser extremamente eficiente em seu trabalho, os métodos pouco ortodoxos de limpeza da empregada muitas vezes acabam horrorizando Kobayashi e às vezes trazem mais problemas do que ajuda. Além disso, as circunstâncias por trás da chegada do dragão à Terra parecem ser muito mais complicadas do que à primeira vista, pois Tooru carrega algumas emoções pesadas e memórias dolorosas. Para completar, a presença de Tooru acaba atraindo vários outros seres míticos para sua nova casa, trazendo uma série de personalidades excêntricas. Embora Kobayashi faça seu melhor esforço para lidar com a situação louca em que se encontra, nada a preparou para esta nova vida com uma empregada dragão.`,
        url: "kobayashi-san-chi-no-maid-dragon"
    },
    {
        nomeJapones: "Tensei shitara Slime Datta Ken",
        nomeIngles: "That Time I Got Reincarnated as a Slime",
        lancamento: 2018,
        generos: ["Ação/Aventura","Fantasia","Comédia"],
        sinopse: `Satoru Mikami, de 37 anos, é um típico trabalhador corporativo, que está perfeitamente satisfeito com seu estilo de vida monótono em Tóquio, além de não conseguir uma namorada sequer uma vez ao longo de sua vida. No meio de um encontro casual com seu colega, ele é vítima de um assaltante aleatório nas ruas e é esfaqueado. No entanto, enquanto sucumbe aos ferimentos, uma voz peculiar ecoa em sua mente e recita um monte de comandos que o moribundo não consegue entender.

        Quando Satoru recupera a consciência, ele descobre que reencarnou como uma gosma de lodo em um reino desconhecido. Ao fazer isso, ele adquire novas habilidades - notadamente, o poder de devorar qualquer coisa e imitar sua aparência e habilidades. Ele então se depara com o monstro selado de nível Catastrophe "Storm Dragon" Veldora que havia sido selado nos últimos 300 anos por devastar uma cidade em cinzas. Simpático à sua situação, Satoru faz amizade com ele, prometendo ajudar a destruir o selo. Em troca, Veldora concede a ele o nome Rimuru Tempest para conceder-lhe proteção divina.
        
        Agora, livre das mundanidades de sua vida passada, Rimuru embarca em uma nova jornada com um objetivo distinto em mente. À medida que ele se acostuma com seu novo físico, suas travessuras pegajosas se espalham pelo mundo, alterando gradualmente seu destino.`,
        url: "tensei-shitara-slime-datta-ken"
    },
    {
        nomeJapones: "Black Clover",
        nomeIngles: "Black Clover",
        lancamento: 2017,
        generos: ["Ação/Aventura", "Fantasia", "Comédia"],
        sinopse: `Asta e Yuno foram abandonados na mesma igreja no mesmo dia. Criados juntos quando crianças, eles conheceram o "Rei Mago" - um título dado ao mago mais forte do reino - e prometeram que competiriam entre si pela posição do próximo Rei Mago. No entanto, à medida que cresciam, a diferença gritante entre eles tornou-se evidente. Enquanto Yuno é capaz de exercer magia com incrível poder e controle, Asta não pode usar magia e tenta desesperadamente despertar seus poderes treinando fisicamente.

        Quando atingem a idade de 15 anos, Yuno recebe um Grimório espetacular com um trevo de quatro folhas, enquanto Asta não recebe nada. No entanto, logo depois, Yuno é atacado por uma pessoa chamada Lebuty, cujo objetivo principal é obter o Grimório de Yuno. Asta tenta lutar contra Lebuty, mas ele é derrotado. Embora sem esperança e à beira da derrota, ele encontra forças para continuar quando ouve a voz de Yuno. Liberando suas emoções internas com raiva, Asta recebe um trevo de cinco folhas Grimoire, um "Trevo Negro" que lhe dá poder suficiente para derrotar Lebuty. Alguns dias depois, os dois amigos partem para o mundo, ambos buscando o mesmo objetivo - se tornar o Rei Mago!`,
        url: "black-clover"
    }
]

module.exports = animes

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