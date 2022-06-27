const express = require("express");
const app = express();
///////////Bad - بدرو
app.listen(() => console.log("Bad Ro Start Now"));
app.listen(() => console.log("Dev Server : https://discord.gg/flou"));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.get('/', (req, res) => res.send(`
Channels :  [ "${client.channels.cache.size}" ]      
Servers : [ "${client.guilds.cache.size}" ]       
Users : [ "${client.users.cache.size}" ]           Prefix : [ "${prefix}"]                      
---------------------Join Flou Server To Get Support : https://discord.gg/flou
`))

///////////Bad - بدرو

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");///////////Bad - بدرو
const ms = require("ms");///////////Bad - بدرو
const nerdamer = require('nerdamer');
require('nerdamer/Algebra');
require('nerdamer/Calculus');
require('nerdamer/Solve');
require('nerdamer/Extra'); 

var prefix = ``;//Put Your Prefix
const id = ["",""];//Put Owners Ids
var chs = ["","","","",""];//Put Shop Channels Ids
var line = '';//Put Your Line
const orderschannel = "";//Put Order Channel Id
const selersroleid = "";//Put Seller Role Id
const hidemsg = "تـم إخـفـاء الـرومـات. @here";//Put Hide Msg
const showmsg = "تـم إظـهـار الـرومـات. @here";//Put Show Msg
const hideshowch = "";//Put Hide/Show Msgs Channel
const Tempct = "";//Put Id Of Temp Channels Category
////////////////////////////////Bad - بدرو
///////////Bad - بدرو

client.on('ready', () => {///////////Bad - بدرو

///////////Bad - بدرو

  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("online");///////////Bad - بدرو
    client.user.setActivity("");///////////Bad - بدرو
});///////////Bad - بدرو
///////////Bad - بدرو
client.on("message", message => {


if(message.content.toLowerCase().startsWith(prefix+"set")) {
const newPrefix = message.content.split(" ");
           let nPrefix = newPrefix.slice(1).join(" ");
  const usagep = new Discord.MessageEmbed()
    .setTitle(`**${prefix}set بريفيكس**\n**${prefix}set Your prefix**`)
         .setAuthor(`❔ Usage`, client.user.displayAvatarURL({dynamic : true})
)
    .setFooter(message.guild.name,message.guild.iconURL())
    .setTimestamp();
if(!nPrefix)///////////Bad - بدرو

return message.channel.send(usagep);
if (!id.includes(message.author.id))
      return message.channel.send(
        `**Only Owners Can Use This Command**`
      );
///////////Bad - بدرو

    prefix = nPrefix;
    message.channel.send(`...`).then(me => {
      me.edit("**Prefix Set To** __**`" + prefix + "`**__ **Succefully!**");
    });
///////////Bad - بدرو

}

  if(message.content.toLowerCase().startsWith(prefix+"line")) {
const newLine = message.content.split(" ");
          let nLine = newLine.slice(1).join(" ");
const usagel = new Discord.MessageEmbed()
    .setTitle(`**${prefix}line رابط الخط**\n**${prefix}line Line Link**`)
         .setAuthor(`❔ Usage`, client.user.displayAvatarURL({dynamic : true})
)///////////Bad - بدرو

    .setFooter(message.guild.name,message.guild.iconURL())///////////Bad - بدرو

    .setTimestamp();///////////Bad - بدرو

    if(!nLine)///////////Bad - بدرو

return message.channel.send(usagel);
if (!id.includes(message.author.id))
      return message.channel.send(

        `**Only Owners Can Use This Command**`
      );
///////////Bad - بدرو

    line = nLine;
    message.channel.send(`...`).then(me => {
      me.edit("**Line Set To** __**`" + line + "`**__ **Succefully!**");
    });

}///////////Bad - بدرو

///////////Bad - بدرو

  

const UserInput = message.content.split(" ")///////////Bad - بدرو

      let args = UserInput.slice(1).join(" ");
const usagec = new Discord.MessageEmbed()
    .setTitle(`**${prefix}add ايدي الروم**\n**${prefix}add Id Channel**`)
         .setAuthor(`❔ Usage`, client.user.displayAvatarURL({dynamic : true})
)
    .setFooter(message.guild.name,message.guild.iconURL())///////////Bad - بدرو
///////////Bad - بدرو

    .setTimestamp();
if(message.content.toLowerCase().startsWith(prefix+"add")) {
if(!id.includes(message.author.id))
      return message.channel.send(
        `**Only Owners Can Use This Command**`);
if(!args)
      return message.channel.send(usagec);
      
chs.push(args)
message.channel.send('**<#' + args + "> Is Now A Shop Channel.**")

///////////Bad - بدرو

}
});
client.on("message", message => {
  
if(message.content.toLowerCase().startsWith(prefix + "hidech")) {
  if (!id.includes(message.author.id)) 
      return message.channel.send(
        `**Only Owners Can Use This Command**`
      );///////////Bad - بدرو

chs.forEach((aChannel) => {
client.channels.cache.get(aChannel).overwritePermissions([
{
id: message.guild.roles.everyone.id,
deny: ["VIEW_CHANNEL"],
},
], )
///////////Bad - بدرو

})
  client.channels.cache.get(hideshowch).send(hidemsg);  
  
    message.delete({ timeout : 5000 })

}
})
  ///////////Bad - بدرو


client.on("message", message => {
if(message.author.bot) {
return;
}
 
if(message.content.toLowerCase().startsWith(prefix + "showch")) {
  if (!id.includes(message.author.id)) 
      return message.channel.send(
        `**Only Owners Can Use This Command**`
      );
chs.forEach((aChannel) => {
client.channels.cache.get(aChannel).overwritePermissions([
{
id: message.guild.roles.everyone.id,
allow: ["VIEW_CHANNEL"],
},
], )///////////Bad - بدرو


})
  client.channels.cache.get(hideshowch).send(showmsg);  
      message.delete({ timeout : 5000 })

  
}
}) 

client.on("message", message => {
    if (message.content.toLowerCase().startsWith(prefix + "tax")) {
        var taxNum0 = message.content.split(" ")
        var taxNum = taxNum0[1];
      const usaget = new Discord.MessageEmbed()
    .setTitle(`**${prefix}tax عدد الكريدت**\n**${prefix}tax Credit Number**`)
         .setAuthor(`❔ Usage`, client.user.displayAvatarURL({dynamic : true}))///////////Bad - بدرو

    .setFooter(message.guild.name,message.guild.iconURL())
    .setTimestamp();
        if (!taxNum) return message.reply(usaget);///////////Bad - بدرو

        if (isNaN(taxNum)) return;
        var taxxed = Math.floor(0.05 * taxNum) + 1;
        var x = nerdamer.solve(`x-(0.05*x)=${taxNum}`, 'x').evaluate();///////////Bad - بدرو

        Xsolved1 = x.text().slice(1).trim();
        Xsolved2 = Xsolved1.replace("]", "")

        Xsolved = parseFloat(Xsolved2)
        const taxEm = new Discord.MessageEmbed()///////////Bad - بدرو


        .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setTitle("**Tax For : __`" + taxNum + "`__**",message.author.displayAvatarURL({ dynamic : true}))
            .setDescription(`**
الشخص بيستلم : ${taxNum - taxxed} \n 
الضريبة : ${taxxed} \n 
المبلغ اللازم تحويله : ${Math.ceil(Xsolved)}
**`)
           .setFooter(message.guild.name, message.guild.iconURL())
      .setTimestamp();
        message.channel.send(taxEm)
    }
})
///////////Bad - بدرو



client.on('message', message => {
    if(message.content.startsWith(prefix + "help")) {///////////Bad - بدرو

const help = new Discord.MessageEmbed()
      .setTitle("📚 Help Menu")
        .setThumbnail(message.guild.iconURL({dynamic : true}))
      .setDescription(`**👑 Owners Commands :**
**${prefix}cr** \`=>\` __Make A Temp Channel.__
**${prefix}renew** \`=>\` __Renew A Temp Channel.__
**${prefix}hidech** \`=>\` __To Hide All Shop Channels.__
**${prefix}showch** \`=>\` __To Show All Shop Channels.__
**${prefix}delete** \`=>\` __To Delete A Temp Channel.__
**${prefix}add** \`=>\` __To Add A Shop Channel.__
**${prefix}set** \`=>\` __To Change The Bot Prefix.__
**${prefix}line** \`=>\` __To Change The Auto Line.__
**🙋‍♂️ Members Commands :**
**${prefix}order** \`=>\` __To Order Thing From Sellers.__
**${prefix}tax** \`=>\` __To Get ProBot Credit Taxs.__
**${prefix}ping** \`=>\` __To Get Ping Of The Bot.__
`)
          .setFooter(message.guild.name, message.guild.iconURL())
      .setTimestamp();
      message.channel.send(help)///////////Bad - بدرو

    }
     ///////////Bad - بدرو
if(message.content.startsWith(".*+-/.$=!")) { 
   message.channel.send(`.`)}
  if(message.content.startsWith(prefix + "ping")) {
    let startTime = Date.now();
    message.channel.send(`...`)
    .then(msg => {
    let endTime = Date.now();
    msg.edit(`**${endTime - startTime} Ms**`)
    
     })
  }///////////Bad - بدرو

})
client.on('message', message => {
    if(message.content.startsWith(prefix + "order")) {///////////Bad - بدرو
       let messageArray = message.content.split(" ");
      
    let args = messageArray.slice(1).join(" ");
const usageo = new Discord.MessageEmbed()
    .setTitle(`**${prefix}order طلبك**\n**${prefix}order Your Order**`)
         .setAuthor(`❔ Usage`, client.user.displayAvatarURL({dynamic : true})
)
    .setFooter(message.guild.name,message.guild.iconURL())
    .setTimestamp();
if (!args) return message.reply(usageo);
      const order = new Discord.MessageEmbed()
      .setTitle("مـاهـو طـلـبـك ؟")
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic : true}))
      .setDescription(`\`منتج\` 💼
**مـثـال :** نيترو حسابات عملات العاب (أي شيء غير البرمجة و التصاميم)
\`برمجة\` 💻
**مـثـال :** بوتات أو اكواد وأي شي يخص البرمجة
\`تصاميم\` 🎨
**مـثـال :** تصميم صور سيرفرات و بنرات وأي شي يخص التصميم`)
          .setFooter(message.guild.name, message.guild.iconURL())
      .setTimestamp();
      message.channel.send(order).then(async (m) => {

                await m.react("💼");
                await m.react("💻");///////////Bad - بدرو

                await m.react("🎨");
                await m.react("❌")///////////Bad - بدرو

   
     let ReactionFilter = (r, user) => {
                    return user.id === message.author.id && ["💼", "💻", "🎨", "❌"].includes(r.emoji.name);
                };
                let ReactionCollector = m.createReactionCollector(ReactionFilter, { time: 15000 });

                ReactionCollector.on("collect", re => {

                    if (re.emoji.name === "❌") {

                        m.delete({ timeout: 150 });
                        message.channel.send(`**:x: Canceled.**`)

                        return;
                    }///////////Bad - بدرو


                    if (re.emoji.name === "💼") {
                      const product = new Discord.MessageEmbed()
                    .setTitle(`New Order`, message.guild.iconURL())
                                .setThumbnail(message.guild.iconURL({dynamic : true}))///////////Bad - بدرو


                      .setDescription(`
Order From : ${message.author}
Order : **${args}**
Type : **مـنـتـج**
`)
                      .setFooter(message.guild.name,message.guild.iconURL())
                      .setTimestamp();
client.channels.cache.get(orderschannel).send(`<@&${selersroleid}>`).then(function (msg) {msg.channel.send(product)})  
         } 
                    if (re.emoji.name === "💻") {
                      const program = new Discord.MessageEmbed()
                    .setTitle(`New Order`, message.guild.iconURL())
                                .setThumbnail(message.guild.iconURL({dynamic : true}))///////////Bad - بدرو


                      .setDescription(`
Order From : ${message.author}
Order : **${args}**
Type : **بـرمـجـة**
`)
                      .setFooter(message.guild.name,message.guild.iconURL())
                      .setTimestamp();
client.channels.cache.get(orderschannel).send(`<@&${selersroleid}>`).then(function (msg) {msg.channel.send(program)})  
         } 
                    if (re.emoji.name === "🎨") {
                       const design = new Discord.MessageEmbed()
                    .setTitle(`New Order`, message.guild.iconURL())
                                 .setThumbnail(message.guild.iconURL({dynamic : true}))///////////Bad - بدرو


                      .setDescription(`
Order From : ${message.author}
Order : **${args}**
Type : **تـصـمـيـم**
`)///////////Bad - بدرو

                      .setFooter(message.guild.name,message.guild.iconURL())
                      .setTimestamp();
client.channels.cache.get(orderschannel).send(`<@&${selersroleid}>`).then(function (msg) {msg.channel.send(design)})///////////Bad - بدرو

         } 
///////////Bad - بدرو
         m.delete({ timeout: 3000 }); ///////////Bad - بدرو


        })
        message.delete({ timeout: 5000 });///////////Bad - بدرو
 })           
      }

    });
client.on('message', message => {
    if(message.content.startsWith(prefix + "cr")) {///////////Bad - بدرو
if (!id.includes(message.author.id)) 
      return message.channel.send(
        `**Only Owners Can Use This Command**`
      );
       let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);///////////Bad - بدرو

        const user = message.mentions.users.first();
       const usage = new Discord.MessageEmbed()
    .setTitle(`**${prefix}cr user time**\n**${prefix}cr الوقت شخص**`)
         .setAuthor(`❔ Usage`, client.user.displayAvatarURL({dynamic : true}))
    .setDescription(`
\`User\` : **(Mention)** Preson who send messages in the channel
\`شـخـص\` : **(منشن)** الشخص الذي رح يرسل الرسائل في الروم
\`Time\` : Time of the channel(after the time end the channel will be private)
\`الـوقـت\` : مدة الروم (بعد ما تنتهي المدة الروم يصير خاص)`)///////////Bad - بدرو

    .setFooter(message.guild.name,message.guild.iconURL())
    .setTimestamp();
        if (!user) return message.reply(usage);
        const time = args.slice(1).join(" ");///////////Bad - بدرو

              if (!time) return message.reply(usage);

        message.channel.send(`**Done**`);
 ///////////Bad - بدرو

message.guild.channels.create(user.username, "text").then(c => {
c.setParent(Tempct)
        let members = message.guild.roles.cache.find(r => r.name ===  "@everyone");///////////Bad - بدرو

        c.createOverwrite(members, {
          SEND_MESSAGES: false,///////////Bad - بدرو
          VIEW_CHANNEL: true
        });
        c.createOverwrite(user, {
          SEND_MESSAGES: true,///////////Bad - بدرو
          VIEW_CHANNEL: true
        });
      
        const embed = new Discord.MessageEmbed()///////////Bad - بدرو
          .setColor("GRAY")
          .setTitle('Room Has Been Created', client.user.displayAvatarURL({ dynamic : true}))
          .setThumbnail(message.guild.iconURL())///////////Bad - بدرو

          .setDescription(`**Room Owner :** ${user}
          **Created By :** ${message.author}
          **Created At :** ${moment(c.createdAt).format(`\`HH:mm:ss DD/MM/YYYY\``)}
         **Expired At :** ${moment((ms(time)) + c.createdTimestamp).format(`\`HH:mm:ss DD/MM/YYYY\``)}
          **Time :** \`${time}\``)
          .setFooter(message.guild.name, message.guild.iconURL())
          .setTimestamp();///////////Bad - بدرو

        
        c.send(embed);
                setTimeout(() => {
   c.createOverwrite(user, {
          SEND_MESSAGES: false,///////////Bad - بدرو
          VIEW_CHANNEL: true
        })
                  c.createOverwrite(members, {
          SEND_MESSAGES: false,///////////Bad - بدرو
          VIEW_CHANNEL: false
        })
                  const end = new Discord.MessageEmbed()///////////Bad - بدرو

                  .setTitle('Time Ended', client.user.displayAvatarURL({ dynamic : true }))
                  .setDescription(`${user} Now You Cant Send Messages Here.
If You Want To Renew Talk With Owners`)
                  .setFooter(message.guild.name, message.guild.iconURL())
.setTimestamp();
                  c.send(end);///////////Bad - بدرو

        }, ms(time));
      })}
}); //////
      //*************************************

     client.on('message', message => {
  if(message.content.toLowerCase().startsWith(prefix + "renew")) {
    if (!id.includes(message.author.id)) 
      return message.channel.send(
        `**Only Owners Can Use This Command**`
      );
      const messageArray = message.content.split(" ");
    const args = messageArray.slice(1);
    const user = message.mentions.users.first();///////////Bad - بدرو

    const usage2 = new Discord.MessageEmbed()///////////Bad - بدرو

    .setTitle(`**${prefix}cr user channel time**\n**${prefix}cr الوقت الروم شخص**`)
    .setAuthor(`❔ Usage`, client.user.displayAvatarURL({dynamic : true}))
      .setDescription(`
\`User\` : **(Mention)** Preson who send messages in the channel
\`شـخـص\` : **(منشن)** الشخص الذي رح يرسل الرسائل في الروم
\`Channel\` : **(Mention)** The temp channel of the person
\`الـروم\` : **(منشن)** الروم المؤقت الخاص بالشخص
\`Time\` : Time of the channel(after the time end the channel will be private)
\`الـوقـت\` : مدة الروم (بعد ما تنتهي المدة الروم يصير خاص)`)
    .setFooter(message.guild.name,message.guild.iconURL())
    .setTimestamp();
        if (!user) return message.reply(usage2);
        
       const time1 = args.slice(2).join(" ");
            if (!time1) return message.reply(usage2);

    const mentionedChannel = message.mentions.channels.first()
   mentionedChannel.overwritePermissions([
     {
       id: message.guild.roles.everyone.id,
       allow: ["VIEW_CHANNEL"],
     },
     {
       id: user,
       allow: ["VIEW_CHANNEL"],
       allow: ["SEND_MESSAGES"]
     },
   ], )
                if (!mentionedChannel) return message.reply(usage2);

    message.reply("**Done**")
  
    
const renew = new Discord.MessageEmbed()///////////Bad - بدرو
          .setColor("GRAY")
          .setTitle('Room Has Been Renewed', client.user.displayAvatarURL({ dynamic : true}))
          .setThumbnail(message.guild.iconURL())
          .setDescription(`**Room Owner :** ${user}
          **Renewed By :** ${message.author}
          **Renewed At :** ${moment(mentionedChannel.createdAt).format(`\`HH:mm:ss DD/MM/YYYY\``)}
         **Expired At :** ${moment((ms(time1)) + mentionedChannel.createdTimestamp).format(`\`HH:mm:ss DD/MM/YYYY\``)}
          **Time :** \`${time1}\``)
          .setFooter(message.guild.name, message.guild.iconURL())
          .setTimestamp();
        
        mentionedChannel.send(renew);///////////Bad - بدرو

       setTimeout(() => {
   mentionedChannel.overwritePermissions([
     {
       id: message.guild.roles.everyone.id,
       deny: ["VIEW_CHANNEL"],
              deny: ["SEND_MESSAGES"]
     },
     {
       id: user,
       allow: ["VIEW_CHANNEL"],
       deny: ["SEND_MESSAGES"]
     },
     ], )
                  const end = new Discord.MessageEmbed()
                  .setTitle('Time Ended', client.user.displayAvatarURL({ dynamic : true }))
                  .setDescription(`${user} Now You Cant Send Messages Here.
If You Want To Renew Talk With Owners`)
                  .setFooter(message.guild.name, message.guild.iconURL())
.setTimestamp();
                  mentionedChannel.send(end);
        }, ms(time1));
               } }///////////Bad - بدرو
          );
client.on('message', message => {
  if(message.content.startsWith(prefix + "delete")){///////////Bad - بدرو
    let embed = new Discord.MessageEmbed()
    .setTitle(`Are You Sure ?`)        
 message.channel.send(embed).then(async (m) => {

                await m.react("🟢");///////////Bad - بدرو

                await m.react("🔴")
   
     let ReactionFilter = (r, user) => {
                    return user.id === message.author.id && ["🟢", "🔴"].includes(r.emoji.name);
                };
                let ReactionCollector = m.createReactionCollector(ReactionFilter, { time: 15000 });

                ReactionCollector.on("collect", re => {

                    if (re.emoji.name === "🔴") {

                        m.delete({ timeout: 150 });
                        message.channel.send(`**🔴 Canceled.**`)

                        return;
                    }

                    if (re.emoji.name === "🟢") {
                      const del = new Discord.MessageEmbed()
                      .setTitle(`**The Channel Will Be Deleted After \`5s\`**`, client.user.displayAvatarURL({dynamic : true}))
                      .setFooter(message.guild.name, message.guild.iconURL())
                      .setTimestamp();
   
  message.channel.send(del)
setTimeout(() => {  message.channel.delete(); }, 5000);  ///////////Bad - بدرو


///////////Bad - بدرو
        } 
///////////Bad - بدرو
        })///////////Bad - بدرو
 })///////////Bad - بدرو
 ///////////Bad - بدرو
  }///////////Bad - بدرو
})///////////Bad - بدرو
///////////Bad - بدرو

client.on("message", async message => {
  chs.forEach((sch) => {
     if (message.channel.id != sch) return;

  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: [line]});
///////////Bad - بدرو

  }
  })


});
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو
 ///////////Bad - 
 ///////////Bad - 
  ///////////Bad - 
   client.login(process.env.token);///////////Bad - بدرو
    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

  ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو

   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
   ///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
///////////Bad - بدرو
