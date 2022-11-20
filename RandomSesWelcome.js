client.on("guildMemberAdd", member => {
      var toplamsayı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var ts = toplamsayı.match(/([0-999])/g)
      toplamsayı = toplamsayı.replace(/([a-zA-Z])/g, "Bilinmiyor!").toLowerCase()
      if(ts) {
        toplamsayı = toplamsayı.replace(/([0-9999])/g, d => {
          return {
            '0': `0`, 
            '1': `1`, 
            '2': `2`, 
            '3': `3`, 
            '4': `4`, 
            '5': `5`, 
            '6': `6`, 
            '7': `7`, 
            '8': `8`,
            '9': `9`}[d];})}
    Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
    }  
    let randomkanallar = [
    `<#>`,
    `<#>`,
    `<#>`,
    `<#>`,
    `<#>`,
]; 
  const welcomechat = member.guild.channels.cache.find(y => y.id === `kanal ID`);
  welcomechat.send(` `+ randomkanallar.random() +``)});
