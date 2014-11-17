class AnagramUnscrambler {
	words: {};
	constructor(arrayOfWords:Array<string>) {
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

	unscramble(word: string) {
		var key = this.keyFrom(word);
		return this.words[key];
	}

	keyFrom(word: string): string {
		return word.split("").sort().join("");
	}
}