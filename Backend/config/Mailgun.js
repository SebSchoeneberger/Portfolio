import mailgun from 'mailgun-js';

import dotenv from 'dotenv';

dotenv.config();

const mg = mailgun();
const client = mg.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

const domain = process.env.MAILGUN_DOMAIN;

export { client, domain };