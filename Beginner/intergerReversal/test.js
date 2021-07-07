const intergerReversal = require('./index-START')

test('intergerReversal is a function', () => {
    expect(typeof intergerReversal).toEqual('function');
  });
  
  test('Reverses an integer', () => {
    expect( intergerReversal(-809)).toEqual(-908);
  });

  test('Reverses an integer', () => {
    expect( intergerReversal(594)).toEqual(495);
  });

  test('Reverses an integer', () => {
    expect( intergerReversal(5)).toEqual(5);
  });


  test('Reverses an integer', () => {
    expect( intergerReversal(-50000005)).toEqual(-50000005);
  });


  test('Reverses an integer', () => {
    expect( intergerReversal(-1)).toEqual(-1);
  });


  test('Reverses an integer', () => {
    expect( intergerReversal(33)).toEqual(33);
  });


  test('Reverses an integer', () => {
    expect( intergerReversal(9673847)).toEqual(7483769);
  });

