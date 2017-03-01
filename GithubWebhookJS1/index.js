// Please visit http://go.microsoft.com/fwlink/?LinkID=761099&clcid=0x409 for more information on settting up Github Webhooks
module.exports = function (context, data) {
    context.log('GiddtHub aa  triggered!', data.name+"  "+data.comment.body );
    context.res = { body: 'New GitHub comment: ' + data.comment.body };
    context.done();

const LineNotifyRequest  = require('./LineNotifyRequest.js');

let api_token = 'hD9J2OcembOi4j3DC4FcrN0oqQTj3ZkHd2ExD2jAfNu';

let req = new LineNotifyRequest().setToken(api_token);
req.setMessage(data.name+" action : "+data.comment.body);
req.sendAsync().then((res) => {
    console.log(res);
}).catch((e) => {
    console.error(e);
});


};
