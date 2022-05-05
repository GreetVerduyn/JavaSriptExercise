# READ IT
## Excercise 05
* The for-loop is no longer present. 
  What was it replaced with? How does this work?
* What does the function 'parseTitle' do? 
  What parameter do we pass to this function?
* What does the function 'wrapWithTag' do? 
  Why are the parameters placed between brackets?


CODE:
const movies = [
`The Godfather`,
`The Shawshank Redemption`,
`Schindler's List`,
`Raging Bull`,
`Casablanca`,
`Citizen Kane`,
`Gone with the Wind`,
`The Wizard of Oz`,
`One Flew Over the Cuckoo's Nest`,
`Lawrence of Arabia`,
];

const wrapWithTag = (content, tagname) => {
   return `<${tagname}>${content}</${tagname}>`;        De 'content' zal in een 'opgegeven tag' worden ingesloten
};

const parseTitle = title => {
const lowerTitle = title.toLowerCase();                 hoofdletters vervangen door kleine letters        
const wrapped = wrapWithTag(lowerTitle, `li`);          wrapped is variabele na uitvoeren v/d functie wrapWithTag op de titel in kleine letters
document.write(wrapped);
};

document.write(`<ol>`);                                 geordende lijst openen
movies.forEach(movie => parseTitle(movie));             met als <li> </li> de filmnaam in kleine letters, voor elke film uit de array movies
document.write(`</ol>`);                                geordende lijst afsluiten
};

