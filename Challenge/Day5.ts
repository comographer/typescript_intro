// Typing Words within Dict to be an object with infite length
type Words = {
  [key: string]: string;
};

// Dict class
class Dict {
  private words: Words;
  // Manually initilize words
  constructor() {
    this.words = {};
  }
  // methods
  // add method : add a word to dict
  add(word: Word) {
    // If word does not exist in Dict, console.log error
    if (this.words[word.term] !== undefined)
      console.log("This word already exists in the dictionary");
    // Else add the word to dictionary
    this.words[word.term] = word.def;
    console.log(`${word.term} has been added`);
  }
  // get method : return definition of a term
  get(term: string) {
    // If the term does not exist in Dict, console.log error
    if (this.words[term] === undefined)
      console.log("Dictionary doesn't contain this term");
    // Else return definition
    return this.words[term];
  }
  // delete method : delete a word
  delete(term: string) {
    // If the term does not exist in Dict, console.log error
    if (this.words[term] === undefined)
      console.log("Dictionary doesn't contain this term");
    // Else delete the term and show message
    delete this.words[term];
    console.log(`${term} has been deleted`);
  }
  // update method : update existing word in dict
  update(term: string, def: string) {
    // If the word does not exist in Dict, console.log error
    if (this.words[term] === undefined)
      console.log("Dictionary doesn't contain this term");
    // Else update the def and show message
    this.words[term] = def;
    console.log(`${term} has been updated`);
  }
  // showAll method : console.log all terms in dict
  showAll() {
    // If dict is empty, show error
    if (Object.keys(this.words).length === 0)
      console.log("There is nothing to show");
    // Else show all terms
    console.log(...Object.keys(this.words));
  }
  // count method : return count of terms in dict
  count() {
    return Object.keys(this.words).length;
  }
}

// Class for word: an object consisting of term and definition
class Word {
  constructor(public term: string, public def: string) {}
}

const dict = new Dict();

// Default words
const kimchi = new Word("kimchi", "Soul of Koreans");
const python = new Word("python", "How most people start coding");
const typescript = new Word("typescript", "How cool kids code these days");

// Test for add method
dict.add(kimchi);
dict.add(python);
dict.add(typescript);

console.log(dict);

// Test for get method
dict.get("kimchi");
dict.get("python");
dict.get("typescript");

// Test for delete method
dict.delete("python");
dict.get("python");

// Test for update method
dict.update("typescript", "The Real Deal");
dict.get("typescript");

// Test for showAll method
dict.add(python);
dict.showAll();

// Test for count method
console.log(dict.count());
