const { Discord, MessageEmbed} = require("discord.js");
module.exports = {
    config: {
        name: `eval`,
        aliases: [``]
    },
    run: async (bot, message, args) => {
        message.delete();
        if (message.author.id !== '709776016314204283') return message.reply("Credentials Mismatch | Access Denied")
        try {
            var code = args.join(" ");
            if (code === "client.token") return message.channel.send("NO")
            var evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            
            const embed = new MessageEmbed()
              .setColor(0x1fd66e)
              .addField("<:approved:796184118273507359> Through: ", `\`\`\`${code}\`\`\``)
              .addField("<:denied:796184118341009408> Throughout: ", `\`\`\`js\n${clean(evaled)}\n\`\`\``)
            message.channel.send({embed})
          } catch (err) {
            const embed = new MessageEmbed()
            .setColor(0x1fd66e)
            .addField("<:approved:796184118273507359> In: ", `\`\`\`${code}\`\`\``)
            .addField("<:denied:796184118341009408> Out: ", `\`\`\`${clean(err)}\`\`\``)
          message.channel.send({embed})
          }
      
      function clean(text) {
        if (typeof(text) === 'string')
          return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        else
            return text;

        }
    }
}
