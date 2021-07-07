const rangeSum = require('./index-START')

test('rangeSum is a function', () => {
    expect(typeof rangeSum).toEqual('function');
  });

  test('return the cummulative sum of the two numbers and all the numbers between them', () => {
    expect( rangeSum( [0, 10] )).toEqual(55);
  });

  test('return the cummulative sum of the two numbers and all the numbers between them', () => {
    expect( rangeSum( [0, 20] )).toEqual(210);
  });

  test('return the cummulative sum of the two numbers and all the numbers between them', () => {
    expect( rangeSum( [0, 5] )).toEqual(15);
  });

  test('return the cummulative sum of the two numbers and all the numbers between them', () => {
    expect( rangeSum( [12, 15] )).toEqual(54);
  });

  test('return the cummulative sum of the two numbers and all the numbers between them', () => {
    expect( rangeSum( [100, 109] )).toEqual(1045);
  });

  test('return the cummulative sum of the two numbers and all the numbers between them', () => {
    expect( rangeSum( [9003, 9005] )).toEqual(27012);
  });