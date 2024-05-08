let bookList = [];
let table = document.querySelector("#table");
const form = document.querySelector("#form");
const searchBox = document.querySelector('#search')


form.addEventListener("submit", (e)=>
{
  
  let newBook = 
  {
    bookName: e.target.bookName.value,
    bookPublisher: e.target.bookPublisher.value,
    author: e.target.author.value,
    bookPrice: e.target.bookPrice.value,
    janre: e.target.janre.value,
  };
  bookList.push(newBook);
  console.log(bookList);
  renderInUi(bookList,table)
  e.preventDefault()
});


function renderInUi(contentArry,container)
{
  container.innerHTML = '';
  contentArry.forEach((item)=>
  {
    const row = document.createElement('tr');
   row.innerHTML = `<td>${item.bookName}</td><td>${item.bookPublisher}</td><td>${item.author}</td><td>${item.bookPrice}</td><td>${item.janre}</td>` 
  
   container.appendChild(row)
    
  });
  
  
}
let searchResult = bookList;
searchBox.addEventListener('input',(e)=>
{
  const userSearchText = e.target.value.toLowerCase();
  searchResult = bookList.fill((item)=>
  {
    return item.toLowerCase().includes(userSearchText);
  })
  renderInUi(searchResult,table)
})

renderInUi(searchResult,table)
