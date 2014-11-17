describe("anagram unscrambler", function () {
    var unscrambler;

    beforeEach(function () {
        unscrambler = new AnagramUnscrambler(["apple", "door","odor", "hello"]);
    });

    it("should construct AnagramUnscrambler", function () {
        expect(unscrambler).not.toBe(null);
    });

    it("should sort words in dictionary and setup properly", function() {
    	expect(unscrambler.words).not.toBe(null);
    	expect(unscrambler.words["aelpp"]).toEqual(["apple"]);
    	expect(unscrambler.words["ehllo"]).toEqual(["hello"]);
    	expect(unscrambler.words["door"]).toEqual(["door", "odor"]);
    });

    it("should produce key properly from word", function() {
    	expect(unscrambler.keyFrom("apple")).toBe("aelpp");
    	expect(unscrambler.keyFrom("hello")).toBe("ehllo");
    });

    it("should unscramble one word correctly", function() {
    	expect(unscrambler.unscrambleOneWord("leppa")).toEqual(["apple"]);
    	expect(unscrambler.unscrambleOneWord("lleoh")).toEqual(["hello"]);
    	expect(unscrambler.unscrambleOneWord("rood")).toEqual(["door", "odor"]);
    });
});
