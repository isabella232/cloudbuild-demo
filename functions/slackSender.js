const https = require('https');

exports.helloPubSub = (event, context) => {
 const pubsubMessage = event.data;
 plainTextJson = Buffer.from(pubsubMessage, 'base64').toString();
 obj = JSON.parse(plainTextJson);
 const { status, logUrl, substitutions} = obj;
 const { REPO_NAME } =  substitutions;

 const data = JSON.stringify({
        text: `Cloud Build ${status} for ${REPO_NAME} logs: ${logUrl}`
    });
 const options = {
        hostname: 'hooks.slack.com',
        port: 443,
        path: '/services/TDE9A8BA8/BT5CY28VA/f3YkyzuJsntHexVYpJav4oME',
        method: 'POST',
        headers: {
 'Content-Type': 'application/json',
 'Content-Length': data.length
        }
    };
 const callback = async (res) => {
        context.res = {
            body: "ok"
        };
    }
 const slackReq = https.request(options, callback);
    slackReq.on('error', function (e) {
        console.error(e);
    });
    slackReq.write(data);
    slackReq.end();
    context.res = { body: 'ok'};
};