

const https = require('https');
const crypto = require("crypto");


var cron = require('node-cron');
cron.schedule('*/5 * * * *', function(){
   console.log('running a task every two minutes');

   var n = crypto.randomInt(0, 1000000);

   https.get('https://xn--888-4nlyax.com/include/auto_bank.php?v'+n, (res) => {
    let rawHtml = '';
    res.on('data', (chunk) => { rawHtml += chunk; });
    res.on('end', () => {
        try {
            console.log(rawHtml);
        } catch (e) {
            console.error(e.message);
        }
    });
});


});

