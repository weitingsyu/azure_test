module.exports = function (context, data) {
    context.log('GGxxx   GitHub Webhook triggered!', data.comment.body);
    context.res = { body: 'New GitHub comment: ' + data.comment.body };
    context.done();
};