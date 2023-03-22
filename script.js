let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
      if(read === true)
      {return title + " by " + author + ", " + pages + " pages, done reading!"}
    
    else
      {return title + " by " + author + ", " + pages + " pages, not read yet!"}
    }
  }
  
  const bookOne = new Book("Hobbit", "Tolkien", 300, true);
  const bookTwo = new Book("Atlas Shrugged", "Rand", 400, false);
  
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);

  console.log(bookOne.info());
  console.log(bookTwo.info());
  
function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(){
        const tableBody = document.querySelector('tbody');
        myLibrary.forEach(e => {
            const tableRow = document.createElement('tr');
            
            for (const key in e) {
              
                if(e[key] == e.title) {tableRow.appendChild(addData(e[key]));}
                else if(e[key] == e.author) {tableRow.appendChild(addData(e[key]));}
                else if(e[key] == e.pages) {tableRow.appendChild(addData(e[key]));}
                else if(e[key] == true) {tableRow.appendChild(addButton('Read'));}
                else if(e[key] == false) {tableRow.appendChild(addButton('Unread'));}
                
                console.log(key);
            }

            tableRow.appendChild(addButton('Remove'));

            tableBody.appendChild(tableRow);

            
        });
}

function addData(data) {

    const tableData = document.createElement('td');
    tableData.textContent = data;
    return tableData;
}
function addButton(text) {
  const tableData = document.createElement('td');
  const tableButton = document.createElement('button')
  tableButton.textContent = text;
  tableData.appendChild(tableButton);
  return tableData;

}

displayLibrary();
  // const variable = 'property'
  // console.log(myObject.variable);
  // console.log(myObject[variable]);