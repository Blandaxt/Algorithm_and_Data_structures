
const twoSum = require("./index.js")


    test("twoSum is a function", () => {

    expect( typeof twoSum).toEqual("function");

    });

    test('return indices of the two numbers such that they add up to target.', () => {

        expect( twoSum( [2, 7, 11, 15], 9 )).toEqual( [0, 1] );

      });

    test('return indices of the two numbers such that they add up to target.', () => {

        expect( twoSum( [3, 2, 4], 6 )).toEqual( [1, 2] );

    });

    test('return indices of the two numbers such that they add up to target.', () => {

        expect( twoSum( [3, 4, 6, 8, 10], 13 )).toEqual( [0, 4] );

    });

    test('return indices of the two numbers such that they add up to target.', () => {

        expect( twoSum( [-4, 5, -20, 9, 35, -1, 100], 4 )).toEqual( [1, 5] );

    });

    test('return indices of the two numbers such that they add up to target.', () => {

        expect( twoSum( [], 13 )).toEqual( undefined );

    });

    test('return indices of the two numbers such that they add up to target.', () => {

        expect( twoSum( [3, 8], 13 )).toEqual( "target cannot be reached" );

    });

    