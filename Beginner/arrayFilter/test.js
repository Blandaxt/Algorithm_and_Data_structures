const arrayFilter = require('./index-START')

function func(el){

    if(typeof el === "number") {

        return true

    }else{

        return false
    }

    // return typeof el === "number"
}

test('arrayFilter is a function', () => {
    expect(typeof arrayFilter).toEqual('function');
  });

  test('Return the first element from the given array that passes the test', () => {
    expect(arrayFilter([ "hello", undefined, {}, [], 3], func)).toEqual(3);
  });

  test('Return the first element from the given array that passes the test', () => {
    expect(arrayFilter([ "hello", undefined, {}, [], 99], func)).toEqual(99);
  });

  test('Return the first element from the given array that passes the test', () => {
    expect(arrayFilter([], func)).toEqual(undefined);
  });

  test('Return the first element from the given array that passes the test', () => {
    expect(arrayFilter(["hello", NaN, undefined, {}, [], 3], func)).toEqual(NaN);
  });