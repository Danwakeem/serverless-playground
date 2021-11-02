const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'hi mom' }),
  };
};

module.exports = { handler };
