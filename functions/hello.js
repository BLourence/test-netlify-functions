const { GREETING } = process.env;

// functions/hello.js
exports.handler = async (event, context) => {
    const subject = event.queryStringParameters.name || 'World';
    return {
        statusCode: 200,
        body: `Hello ${subject}`
    };
}