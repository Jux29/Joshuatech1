const settings = {
  botName: process.env.BOT_NAME || 'ACTIVE-X BOT',
  botOwner: process.env.BOT_OWNER || 'ActiveTsh',
  ownerNumber: process.env.OWNER_NUMBER || '',
  packname: process.env.PACKNAME || 'ACTIVE-X BOT',
  prefix: process.env.PREFIX || '.',
  mode: process.env.MODE || 'public',
  version: '1.0.0',
  defaultReaction: '',
  errorReaction: '',
  watermark: 'ACTIVE-X BOT',
  description: 'ACTIVE-X BOT - The Most Powerful WhatsApp Bot',
  channelLink: 'https://whatsapp.com/channel/0029VbCuey0CMY08nyQ5g11P',
  dev: '255717160991',
  devgit: 'https://api.github.com/repos/ActiveX7/ActiveX',
  timezone: 'Africa/Nairobi',
};

module.exports = settings;
