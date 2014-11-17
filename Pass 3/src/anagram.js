var AnagramUnscrambler = (function () {
    function AnagramUnscrambler(arrayOfWords) {
        this.suggestions = {};
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
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

    AnagramUnscrambler.prototype.unscrambleAll = function (word) {
        this.suggestions = {};
        if (word !== "") {
            for (var i = 0; i < this.alphabet.length; i++) {
                var addedWord = word + this.alphabet.charAt(i);
                this.unscrambleOneWord(addedWord, this.alphabet.charAt(i));
            }
        }
        return this.suggestions;
    };

    AnagramUnscrambler.prototype.unscrambleOneWord = function (addedWord, addOn) {
        var key = this.keyFrom(addedWord);

        //return this.words[key];
        if (this.words[key] !== undefined && this.words[key].length !== 0) {
            for (var i = 0; i < this.words[key].length; i++) {
                if (this.suggestions[addOn] === undefined) {
                    this.suggestions[addOn] = new Array();
                }
                this.suggestions[addOn].push(this.words[key][i]);
            }
        }
    };

    AnagramUnscrambler.prototype.keyFrom = function (word) {
        return word.split("").sort().join("");
    };
    return AnagramUnscrambler;
})();
//# sourceMappingURL=anagram.js.map
