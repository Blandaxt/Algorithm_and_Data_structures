  const pigLatin = require('./index-START');

 test('pigLatin is a function', () => {
    expect(typeof pigLatin).toEqual('function');
  });

  test('translate the string to pig latin', () => {
    expect(pigLatin('gun')).toEqual('ungay');
  });

  test('translate the string to pig latin', () => {
    expect(pigLatin('highway')).toEqual('ighwayhay');
  });

  test('translate the string to pig latin', () => {
    expect(pigLatin('smoke')).toEqual('okesmay');
  });

  test('translate the string to pig latin', () => {
    expect(pigLatin('evacuate')).toEqual('evacuateway');
  });


  test('translate the string to pig latin', () => {
    expect(pigLatin('unexplainable')).toEqual('unexplainableway');
  });

  test('translate the string to pig latin', () => {
    expect(pigLatin('ignorant')).toEqual('ignorantway');
  });

  test('translate the string to pig latin', () => {
    expect(pigLatin('shake')).toEqual('akeshay');
  });


