const https = require('https');

exports.slackSimpleAlert = (event, context) => {
    const pubsubMessage = event.data;
    plainTextJson = Buffer.from(pubsubMessage, 'base64').toString();
    obj = JSON.parse(plainTextJson);
    const { status, logUrl, substitutions} = obj;
    if (status === "FAILURE") {
        const { REPO_NAME } =  substitutions;

        const data = JSON.stringify({
            text: `Cloud Build ${status} for ${REPO_NAME} logs: ${logUrl}`
        });
        const options = {
            hostname: 'hooks.slack.com',
            port: 443,
            path: '<incoming web hook URL>',
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
    }
};