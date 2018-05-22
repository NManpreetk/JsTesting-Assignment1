//question1
describe("Positive Sum", function () {
    it("When the numbers are all positive, it should return the sum of all the numbers", function () {
        expect(positiveSum([2, 5])).toBe(7)
    });

    it("When there is a negative number in the provided array, it should not be included as part of the sum", function () {
        expect(positiveSum([-2, 5])).toBe(5)
    });

    it("When the provided array is empty, it should return a sum of 0", function () {
        expect(positiveSum([])).toBe(0)
    });

    it("When the provided array is all negative numbers, it should return a sum of 0", function () {
        expect(positiveSum([-2, -5])).toBe(0)
    });
})

//question2
describe("Is Divisible", function () {
    it("When a number is divisible by both of the provided divisors, it should return true.", function () {
        expect(isDivisible(8, 2, 4)).toBe(true)
    });

    it("When the number is smaller then both the provided divisors, it should return false.", function () {
        expect(isDivisible(2, 4, 6)).toBe(false)
    });

    it("When the number is not divisible by only one of the provided divisors it should return false.", function () {
        expect(isDivisible(4, 2, 7)).toBe(false)
    });

    it("When the number is not divisible by any of the provided divisors it should return false.", function () {
        expect(isDivisible(2, 3, 7)).toBe(false)
    });
})

//question3
describe("Solution", function () {
    it("When there is only 1 characters in the string, it returns itself", function () {
        expect(solution("a")).toBe("a")
    });

    it("When there are multiple characters in the string it returns the string, reversed.", function () {
        expect(solution("apple")).toBe("elppa")
    });

    it("When there are no characters in the string, it returns empty string.", function () {
        expect(solution("")).toBe("")
    });
})

//question4
describe("Reverse Sequence", function () {
    it("should take in number not a string, boolean, null or undefined", function () {
        expect(reverseSeq("")).toEqual([])
    });
    it("should return the array of numbers in an ascending order", function () {
        expect(reverseSeq(4)).toEqual([4, 3, 2, 1])
    });
    it("should return an array with one when one is passed to a function", function () {
        expect(reverseSeq(1)).toEqual([1])
    });
})