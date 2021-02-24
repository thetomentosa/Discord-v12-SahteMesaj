const Discord = require('discord.js');
exports.run = async (client, message, args) => {


let kisi = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Ne Yazmasını İstediğini ve Kimin Yazacağını Seçmelisin \n \`Doğru Şekilde Kullanımı : p!sahtemesaj <etiket> <mesaj>\`')

let yazı = args.join(" ").slice(22);
if (!yazı) return message.reply('Ne Yazmasını İstediğini ve Kimin Yazacağını Seçmelisin \n \`Doğru Şekilde Kullanımı : p!sahtemesaj <etiket> <mesaj>\`')
message.delete();
message.channel.createWebhook(kisi.username, {avatar: kisi.displayAvatarURL({ dynamic: true })
})
.then(webhook => webhook.edit(kisi.username, {avatar: kisi.displayAvatarURL({ dynamic: true })
})
   .then(wb => { 
              const hook = new Discord.WebhookClient(wb.id, wb.token);
              hook.send(yazı)
              wb.delete()
          })
   .catch(console.error))
   .catch(console.error);

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fakemesaj", "sahte", "sm"],
  permLevel: 0
};

exports.help = {
  name: "sahtemesaj",
  description: "sahtemesaj",
  usage: "sahtemesaj"
};

