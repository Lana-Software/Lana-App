/**
 * @vitest-environment happy-dom
 */
import { test, it, expect, describe } from "vitest";
import { sum, multiply } from "./Calculator.vue";

test('Calculator', () => {
    test('adds 5 to 5 to equal 10', () =>{
        // Test that the function's output is 10
        expect(sum(5,5)).toEqual(10);
    });

    test('multiplies 5 by 3 to equal 15', () =>{
        // Tests that the function's output is 15
        expect(multiply(5,3)).toEqual(15);
    });
});

