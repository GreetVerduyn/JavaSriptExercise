# READ IT
## EX 06
* Notice the difference with the previous exercise. What changed?


NIEUWE CODE:

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(`<ol>`);
movies.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write(`</ol>`);

=> codes in elkaar gestoken