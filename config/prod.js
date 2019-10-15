// Hold application secrets and config for PRODUCTION environment
module.exports = {
  gmailMailer: process.env.GMAIL_MAILER,
  gmailSecret: process.env.GMAIL_SECRET
};