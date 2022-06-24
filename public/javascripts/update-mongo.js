async function main(){
    const {MongoClient} = require('mongodb')
    const uri = "mongodb+srv://db_user:batatadoce@cluster0.cekxy.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri)

    await client.connect()
    const animes = await client.db('pweb1').collection('animes').find({}).sort({nomeJapones: 1}).toArray()
    for await (anime of animes){
        const nomeJapones = await anime.nomeJapones
        await client.db('pweb1').collection('animes').updateOne(
            {_id: anime._id},
            {$set: {url: simplifyText(nomeJapones)}}
        )
    }
    
    client.close()
}

main().catch(console.error)

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