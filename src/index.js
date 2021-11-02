const uuids = [
  '5a3af524-1af8-4858-8d41-6c3ae228fd1a',
  '21854d8a-9810-4b1b-9e35-df6c01c90bb9',
  'd043a8b0-8e22-42d0-ad82-0d0b36529a6f',
  '0b7139d9-e2ef-4cac-944a-39d68372d009',
  '153faeb2-e1c5-46f0-bd1f-e6d100ff90e8',
];

const handler = async (_, context) => {
  const uuid = uuids[new Date().getTime() % 5];
  context.serverlessSdk.tagEvent('uuid-tag', uuid, { customerId: uuid, isDemo: true });
  context.serverlessSdk.tagEvent(uuid, 1, { customerId: uuid, isDemo: true });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'hi mom' }),
  };
};

module.exports = { handler };
