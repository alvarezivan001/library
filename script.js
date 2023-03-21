let myLibrary = [];

function Book(title, pages, author, read){
    this.title = title
    this.pages = pages
    this.author = author
    this.read = read
    this.info = function(){
      if(read === true)
      {return title + " by " + author + ", " + pages + " pages, done reading!"}
    
    else
      {return title + " by " + author + ", " + pages + " pages, not read yet!"}
    }
  }
  
  const bookOne = new Book("Hobbit", 300, "Tolkien", true);
  const bookTwo = new Book("Atlas Shrugged", 400, "Rand", false);
  
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);

  console.log(bookOne.info());
  console.log(bookTwo.info());
  
function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(){
    
}
  // const variable = 'property'
  // console.log(myObject.variable);
  // console.log(myObject[variable]);