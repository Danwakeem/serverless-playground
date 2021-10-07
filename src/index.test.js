const { handler } = require('.');

describe('index', () => {
  it('should print hello', () => {
    const expectedMessage = 'hi mom';
    const output = handler();
    expect(output).toEqual({
      message: expectedMessage,
    });
  });
});
