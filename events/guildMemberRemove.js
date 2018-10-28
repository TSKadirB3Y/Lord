module.exports = member => {
  let guild = member.guild;
  member.send('Bir Sorun mu Çıktı?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
