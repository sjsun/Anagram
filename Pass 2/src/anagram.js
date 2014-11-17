var AnagramUnscrambler = (function () {
    function AnagramUnscrambler(arrayOfWords) {
        this.words = {};
        this.makeKeyedMapFrom(arrayOfWords);
    }
    AnagramUnscrambler.prototype.makeKeyedMapFrom = function (words) {
        for (var i = 0; i < words.length; i++) {
            this.addToKeyedWords(words[i]);
        }
    };

    AnagramUnscrambler.prototype.addToKeyedWords = function (word) {
        var key = this.keyFrom(word);
        if (this.words[key] === undefined) {
            this.words[key] = new Array();
        }
        this.words[key].push(word);
    };

    AnagramUnscrambler.prototype.unscramble = function (word) {
        var key = this.keyFrom(word);
        return this.words[key];
    };

    AnagramUnscrambler.prototype.keyFrom = function (word) {
        return word.split("").sort().join("");
    };
    return AnagramUnscrambler;
})();
