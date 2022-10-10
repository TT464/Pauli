const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const client = new Discord.Client()
const fs = require('fs')

client.once('ready', () => {
    console.log('Vittu');
});


const enkkuhelppi = new Discord.MessageEmbed()
enkkuhelppi.setTitle("Some english friendly commands")
enkkuhelppi.setDescription("Prefix: +")
enkkuhelppi.addFields(
    { name: "Roll", value: "Gives a number between 0-6"},
    {name: "number", value: "Gives a number between 0-1000000"},
    {name: "winterwar", value: "Comic command, tells what happened to the Finns in the Winter War"},
    {name: "selfie" , value: "Shows a picture of Pauli"},
    {name: "drink", value: "Gives you a randomized cocktail recipe"},
    {name: "Additional", value: "You can add a number after Roll and number to get multiple results"}
)
const Zumiinfo = new Discord.MessageEmbed()
Zumiinfo.setTitle("Information about Zumi")
Zumiinfo.addFields(
    {name: "Country", value: "Norway"},
    {name: "address", value: "Valløyvegen"},
    {name: "Info", value: "Femboy, prefers fork to spoon, possibly planning to overthrow the Norwegian coverment"}
)
const Nigsinfo = new Discord.MessageEmbed()
Nigsinfo.setTitle("Information about Duck")
Nigsinfo.addFields(
    {name: "Country", value: "Finland"}, 
    {name: "address", value: "Pakaantie"},
    {name: "Info", value: "Likes ducks"}
)




client.on('message', msg => {
    

    const argsiittus = []
    const pushataaTää = msg.content.split(" ")
    argsiittus.push(pushataaTää)
    const args = argsiittus[0]

   if(!msg.author.bot) console.log(`${msg.author.username} laitto: ${msg.content}`)
   
    if(msg.content === '+homo') {
        msg.channel.send('Sillon kun minä olin nuori ei liputettu isolla kirkolla sitä ketä pantiin kuusen juurella vaan sillon mentiin ja tehtiin.');
    }
    if(msg.content === '+test') {
        console.log(msg.author.id)
        msg.channel.createInvite()
  .then(invite =>  msg.channel.send(invite.url) )
    }
    if(msg.content === '+auta') {
        msg.channel.send('prefix : +. suomi, kahvi ja ei jaksa toimii ilman prefix, muita on noppa(0-6), numero(0-1000000), winterwar, homo')
    }
    if(msg.content === 'suomi') {
        msg.channel.send('SUOMI FINLAND PERKELE SVEDUT JA RYSSÄT HELVETTIIN!')
    }
    if(msg.content === 'Suomi') {
        msg.channel.send('SUOMI FINLAND PERKELE SVEDUT JA RYSSÄT HELVETTIIN!')
    }
    if(msg.content === '+help') {
        msg.channel.send(enkkuhelppi)
    }
    if(msg.content === 'ei jaksa') {
        msg.channel.send('Nykynuoriso on vaan laiskoja pummeja, jotka tee mitään muuta kuin kotona makaavat ja odottavat jotta kaikki pitää heidän puolestaan tehdä. Saatana.')
    }
    let noppa = [Math.ceil(Math.random() * 6)]
    if(msg.content === '+noppa') {
        msg.channel.send(noppa)
    }
    let Roll = [Math.floor(Math.random() * 6)]
    if(msg.content === '+Roll') {
        msg.channel.send(Roll)
    }
    let luku = [Math.floor(Math.random() * 1000000)]
    if(msg.content === '+numero') {
        msg.channel.send(luku)
    }
    if(msg.content === '+number') {
        msg.channel.send(luku)
    }
    if(msg.content === '+winterwar') {
        msg.channel.send('We went, and kicked the asses of those Russians trying to take our land from us.')
    }
    if(msg.content === 'kahvi?') {
        msg.channel.send('Kahvi. :coffee:')
    }
    if(msg.content === 'Kahvi?') {
        msg.channel.send('Kahvi. :coffee:')
    }
    if(msg.content === 'oliko Pauli sodassa?') {
        msg.channel.send('Minä olin rintamalla eversti Siilasvuon johtamassa 9. divisioonassa ja mukana Raatteentiellä tammikuussa 1940. Raatteentie vei monta hyvää miestä, mutta vielä enemmän me veimme ryssiä.')
    }
    if(msg.content === '+joulupukki') {
        msg.channel.send('Ota kukko hyvästä kädestä, pidä siitä kiinni, pistä se suuhusi, katso silmiisi, pidä kukko suussasi ja sano huonoja sanoja, sinun pitäisi olla sellainen. Hintelä')
    }
    if(msg.content === 'pauli') {
        msg.channel.send('Pauli')
    }
    if(msg.content === 'millo pauli') {
        msg.channel.send('ei')
    }
    if(msg.content === '+stalk duck') {
        msg.channel.send(Nigsinfo)
    }
    if(msg.content === '+stalk Zumi') {
        msg.channel.send(Zumiinfo)
    }
    if(msg.content === '+stalk Pauli') {
        msg.channel.send('You have attempted to gain access to knowledge you shall not have access to. You shall now ***PERISH***')
    
    if (!msg.author.bot) console.log(msg.author.id)
    msg.channel.createInvite()
.then(invite =>  msg.author.send(invite.url) )
if(!Discord.Permissions)msg.channel.send('You appear stronger than expected. I hate you with a burning passion')
    msg.member.kick('You are a mere mortal')

    }
    var i = 0
    if(msg.content === 'millo pauli') {
            while (i < 100) {
                msg.author.send('Pauli').catch(error =>{return})
                i++;
              }
    }
    if(args[0] === '+number') {
        let määrä = args[1]
        if(määrä > 24)return msg.channel.send('Perkele. Oot liia iso samppi. Kutistu.')
        const numeroembed = new Discord.MessageEmbed()
        numeroembed.setTitle("Your numbers are:")
        numeroembed.setColor('#d40707')
        var u = 1
        while (i < määrä) {
           let luku = [Math.floor(Math.random() * 1000000)]
       numeroembed.addFields(
           {name: u, value: luku, inline: true} )
           i++
           u++
        }
        msg.channel.send(numeroembed)   
}
if(msg.content === '+rr') {
    console.log(msg.author.id)
    let luoti = [Math.ceil(Math.random() * 1)]
    console.log(luoti)
    msg.channel.send('<:ASE:1028915811517222973>')

   if(luoti != 1) {
     msg.channel.send('*click*. You survive. For now..')}
    
 else { msg.channel.send('You died') 
   msg.channel.createInvite()
   .then(invite =>  msg.author.send(invite.url) )
   msg.member.kick()
   if(!Discord.Permissions)msg.channel.send('You bulletproof bitch. That is cheating.')
}}
    
    
        
 
    if(args[0] === '+noppa') {
        let määrä = args[1]
        if(määrä > 24)return msg.channel.send('Perkele. Oot liia iso samppi. Kutistu.')
        const noppaembed = new Discord.MessageEmbed
        noppaembed.setTitle
        noppaembed.setColor("#d40707")
        var u = 1
        while (i < määrä) {
           let silmä = [Math.ceil(Math.random() * 6)]
           noppaembed.addFields(
            {name: u, value: silmä, inline: true} )
            i++
            u++
        }
        msg.channel.send(noppaembed)
    }
    
    if(args[0] === '+eval') {
        console.log("alku")
        if(msg.author.id !== '483973292357582873'){
            console.log(msg.author.id)
            msg.channel.send('I am too busy having relations with your mother, '+msg.author.username)
            return
        }
       
        

        if(args[1] == undefined) return msg.channel.send("mitä evaloidaa")
        let newargs = args.join(" ")
        const eka = newargs.split(" ")
        let sana = eka[0]
        const miinus = newargs.split("+eval")
        let join = miinus.join(" ")
        console.log(join)
        
        try {
            let evaled = eval(`${join}`)
            msg.channel.send(evaled.toString()).catch(err => {
                if(err.msg == "Cannot send an empty message") msg.channel.send("no output")
                else {
                    console.log(err)
                    msg.channel.send("FUCK")
                }
            })
        } catch (err){
            msg.channel.send(`vitun äyssi: ${err}`)
        }
        }


    if(msg.content === '+selfie') {
        var Paulit = fs.readFileSync('./hij/Pauli.txt').toString()

            var Paulit = Paulit.split('\n')

            var min = 0
            var max = Paulit.length - 1

            var random = Math.floor(Math.random() * (max - min + 1) + min)
            msg.channel.send(Paulit[random])
    }
    if(msg.content === '+drink') {

        var mains = fs.readFileSync('./hij/mains.txt').toString()

            var mains = mains.split('\n')

            var min = 0
            var max = mains.length - 1

            var mainlasku = Math.floor(Math.random() * (max - min + 1) + min)
            
            
            var tokalasku = Math.floor(Math.random() * (max - min + 1) + min)
            
            
            var mix = fs.readFileSync('./hij/mix.txt').toString()
            var mix = mix.split('\n')

            var min = 0
            var max = mix.length - 1

            var mixlasku = Math.floor(Math.random() * (max - min + 1) + min)
           
            

            var carnish = fs.readFileSync('./hij/carnish.txt').toString()
            var carnish = carnish.split('\n')

            var min = 0
            var max = carnish.length - 1

            var koristelasku = Math.floor(Math.random() * (max - min + 1) + min)
            
            var name = fs.readFileSync('./hij/nimi.txt').toString()
            var name = name.split('\n')

            var min = 0
            var max = name.length - 1

            var namelasku = Math.floor(Math.random() * (max - min + 1) + min)
            
            
            
            const drinkjuttu = new Discord.MessageEmbed()
            drinkjuttu.setTitle("A nice cocktail for you")
            drinkjuttu.addFields(
             {name: "Main 1", value: mains[mainlasku]},
             {name: "Main 2", value: mains[tokalasku]},
             {name: "Mixer", value: mix[mixlasku]},
             {name: "Garnish", value: carnish[koristelasku]},
             {name: "The name of the drink", value: name[namelasku]}
            )

            msg.channel.send(drinkjuttu)
        
    }
})

    client.login('OTE1OTAwOTkxMzg2MzIwOTQ2.YaiVRA.PUfBkzwueXFWaWTxHu9PjDCBm98')
