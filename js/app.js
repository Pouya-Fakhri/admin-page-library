let table = document.querySelector("#table");
const form = document.querySelector("#form");
let firstTr = document.querySelector("#firstTr");
let bookList = [];
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let newBook = {
    bookName: e.target.bookName.value,
    bookPublisher: e.target.bookPublisher.value,
    author: e.target.author.value,
    bookPrice: e.target.bookPrice.value,
    janre: e.target.janre.value,
  };
  for(let i = 0; i < 3;i++)
  {
    if(i == 2)
    {
      bookList.shift()
      
    }
    console.log(i)
  }
  bookList.push(newBook);
  console.log(bookList);
  createTableRows()
  
});

function createTableRows()
{
  for ( let i = 0; i < bookList.length; i++ )
  {
    const row = document.createElement("tr");
  
    const bookNameCall = document.createElement("td");
    bookNameCall.textContent = bookList[i].bookName;
  
    const bookPublisherCall = document.createElement("td");
    bookPublisherCall.textContent = bookList[i].bookPublisher;
  
    const authorCall = document.createElement("td");
    authorCall.textContent = bookList[i].author;

    const janreCall = document.createElement("td");
    janreCall.textContent = bookList[i].janre;
  
    const bookPriceCall = document.createElement("td");
    bookPriceCall.textContent = bookList[i].bookPrice;
  
    row.appendChild(bookNameCall);
    row.appendChild(bookPublisherCall);
    row.appendChild(authorCall);
    row.appendChild(janreCall);
    row.appendChild(bookPriceCall);
  
    table.appendChild(row);
  }
  
}

