class AnagramUnscrambler {
	words: {};
	suggestions: {};
	alphabet: string;
	constructor(arrayOfWords:Array<string>) {
		this.suggestions = {};
		this.alphabet = "abcdefghijklmnopqrstuvwxyz";
		this.words = {};
		this.makeKeyedMapFrom(arrayOfWords);
	}

	makeKeyedMapFrom(words: Array<string>) {
		for (var i=0;i<words.length;i++) {
			this.addToKeyedWords(words[i]);
		}
	}

	addToKeyedWords(word: string) {
		var key = this.keyFrom(word);
		if (this.words[key] === undefined) {
			this.words[key] = new Array<string>();
		}
		this.words[key].push(word);
	}

	unscrambleAll(word: string) {
		this.suggestions = {};
		if(word !== "") {
			for (var i = 0; i < this.alphabet.length; i++) {
				var addedWord = word + this.alphabet.charAt(i);
				this.unscrambleOneWord(addedWord, this.alphabet.charAt(i));
			}
		}
		return this.suggestions;
	}

	unscrambleOneWord(addedWord: string, addOn: string) {
		var key = this.keyFrom(addedWord);
		//return this.words[key];
		if (this.words[key] !== undefined && this.words[key].length !== 0) {
			for (var i = 0; i < this.words[key].length; i++) {
				if (this.suggestions[addOn] === undefined) {
					this.suggestions[addOn] = new Array<string>();
				}
				this.suggestions[addOn].push(this.words[key][i]);
			}
			
		}
		
	}

	keyFrom(word: string): string {
		return word.split("").sort().join("");
	}
}