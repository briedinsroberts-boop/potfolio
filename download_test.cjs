const https = require('https');

const url = 'https://drive.google.com/uc?export=download&confirm=t&id=10XdFKRriKgUHf3ZsuAy8SdKSslvhfaS8';

https.get(url, (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Headers:', res.headers);
});
