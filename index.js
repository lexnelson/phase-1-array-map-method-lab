const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// const titleCased = () => {
//   const word = tutorials.split(' ')
//   console.log(word)
// }

// const titleCase = () => {
//   const word = tutorials.map(string => string.split(' ')); debugger;
//   word.map(letter => letter.charAt(0).toUpperCase + letter.slice(1).join(' '));
//   return word;
// }
// const titleCase = tutorials.map(function(words) {
//   return words.split(' ').map(letter => letter.charAt(0).toUpperCase + letter.slice(1)).join(' ')
// })

// const titleCased = () => {
//   return tutorials.map(function(titles){
//     return titles.split(' ').map(function(words){ return words.charAt(0).toUpperCase() + words.slice(1);
//     })
//   })
// }
// const titleCased = () => {
//   let eachTitle = tutorials.map(elem => elem.split(' ')); 
//   for (let word in eachTitle) {
//     for (let i = 0; i < eachTitle[word].length; i++) {
//       eachTitle[word][i] = eachTitle[word][i][0].toUpperCase() + eachTitle[word][i].substr(1);
//     }
//     tutorials[word] = eachTitle[word].join(' ');
//   }
//   return tutorials;
//}
// const titleCased = () => {
//   let eachTitle = tutorials.map(elem => elem.split(' ').map(word => word.charAt(0).toUpperCase())
//   ) 
//   return eachTitle.join('')
// }

// const titleCased = () =>  {
//   const newTitles = tutorials.map(words => words.split(" ").map(cap => cap.charAt(0).toUpperCase() + words.slice(1)))
//   return newTitles.join(' ')
// }
const titleCased = () =>  {
  return tutorials.map(words => words.split(' ').map(cap => 
    cap.charAt(0).toUpperCase() + cap.slice(1)).join(' '))
  }
// const titleCased = () => {
//   return tutorials
// }



// const titleCased = () => {
//   const splitStrings = tutorials.split(' ');
//    newArray = splitStrings.map(function ){ }
//   // splitStrings[0].toUpperCase
//   return tutorials
// }

// const titleCased = () => {
//   tutorials.map(function (element) {
//     const words = element.split(" ");
//     words.map((word) => {
//       return word[0].toUpperCase() + word.substring(1);
//     }).join(" ");
//   })
// }



// const titleCased = () => {
//  const cap = tutorials.split(" ")
//  cap.map(first => first[0].toUpperCase() + first.substring(1)).join(" ")
    
// }