const QuotesList =[
     {
    'quote':'To live is the rarest thing in the world. Most people exist, that is all.',
    'author': 'Oscar Wilde',
    bgColor:"#BDEDFF",
},
{
    'quote':'That it will never come again is what makes life so sweet.',
    'author': 'Emily Dickinson',
    bgColor:"#FFBF00",
},
{
    'quote':'It is never too late to be what you might have been.',
    'author': 'George Eliot',
    bgColor:"#FF7F50",
},
{
    'quote':'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    'author': 'Ralph Waldo Emerson',
    bgColor:"##DE3163",
},
{
    'quote':'Pain is inevitable. Suffering is optional.',
    'author': ' Haruki Murakami',
    bgColor:"#DFFF00",
},
{
    'quote':'All the worlds a stage, and all the men and women merely players.',
    'author': 'William Shakespeare',
    bgColor:"#CCCCFF",
},
{
    'quote':'Be kind, for everyone you meet is fighting a hard battle.',
    'author': ' Plato',
    bgColor:"#C0C0C0",
},
]

const  quoteEl = document.getElementById("quoteText")
const authorEl = document.getElementById("authorName")
const quoteContainerEl = document.getElementById("quoteContainer");

generateQuote = () =>{
 const randomNumber = Number.parseInt(Math.random()*QuotesList.length + 1);
 // console.log(randomNumber)
 quoteEl.textContent =  `${QuotesList[randomNumber].quote}`
 authorEl.textContent = `${QuotesList[randomNumber].author}`
 quoteContainerEl.style.backgroundColor = `${QuotesList[randomNumber].bgColor}`
 
}