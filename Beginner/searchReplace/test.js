const searchReplace = require('./index-START')

 test('searchReplace is a function', () => {
    expect(typeof searchReplace).toEqual('function');
  });

  test('replace a string in a sentence', () => {
    expect(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual("He is Sitting on the couch");
  });

  test('replace a string in a sentence', () => {
    expect(searchReplace("My dream is to Fly in the sky", "Fly", "swim")).toEqual("My dream is to Swim in the sky");
  });

  test('replace a string in a sentence', () => {
    expect(searchReplace("I love to eat Cereal", "Cereal", "food")).toEqual("I love to eat Food");
  });
