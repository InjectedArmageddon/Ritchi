const config = require('./customization.json')
const client = require('discord-rich-presence')(config.id);

client.on('connected', () => {
  console.log('connected!');

if(config.fakegame === true) {

client.updatePresence({

  state: config.title,
  details: config.subtitle,
  startTimestamp: Date.now(),
  endTimestamp: Date.now(),
  largeImageKey: config.lIK,
  smallImageKey: config.sIK,
  partyId: `${config.title}_party`,
  partySize: 1,
  partyMax: 1,
  matchSecret: config.title,
  joinSecret: config.title,
  spectateSecret: config.title,
  instance: true,

});

} else {

client.updatePresence({

  state: config.title,
  details: config.subtitle,
  startTimestamp: Date.now(),
  endTimestamp: Date.now(),
  largeImageKey: config.lIK,
  smallImageKey: config.sIK,
  instance: true,

});

  }
 }
}


process.on('unhandledRejection', console.error);
