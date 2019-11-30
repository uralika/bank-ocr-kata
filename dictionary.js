const zero = ' _ ' +
	     '| |' +
	     '|_|',
       one = '   ' +
	     '  |' +
	     '  |',
       two = ' _ ' +
             ' _|' +
	     '|_ ',
     three = ' _ ' +
	     ' _|' +
	     ' _|',
      four = '   ' +
	     '|_|' +
	     '  |',
      five = ' _ ' +
             '|_ ' +
	     ' _|',
       six = ' _ ' +
	     '|_ ' +
	     '|_|',
     seven = ' _ ' +
	     '  |' +
	     '  |',
     eight = ' _ ' +
	     '|_|' +
	     '|_|',
      nine = ' _ ' +
	     '|_|' +
	     ' _|';

const dictionary = {};

dictionary[zero] = 0;
dictionary[one] = 1;
dictionary[two] = 2;
dictionary[three] = 3;
dictionary[four] = 4;
dictionary[five] = 5;
dictionary[six] = 6;
dictionary[seven] = 7;
dictionary[eight] = 8;
dictionary[nine] = 9;

module.exports.dictionary = dictionary;
