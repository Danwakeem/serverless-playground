const { handler } = require('.');

describe('index', () => {
  it('should print hello', async () => {
    const expectedMessage = 'hi mom';
    const output = await handler();
    expect(output).toEqual({
      statusCode: 200,
      body: JSON.stringify({ message: expectedMessage }),
    });
  });
});
