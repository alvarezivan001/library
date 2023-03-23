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
  const bookTwo = new Book("Atlas", "Rand", 400, false);
  
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);

  console.log(bookOne.info());
  console.log(bookTwo.info());
  
Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(){

        const tableBody = document.querySelector('tbody');
        while(tableBody.firstChild)
        {
            tableBody.firstChild.remove();
        }

        myLibrary.forEach(e => {
            const tableRow = document.createElement('tr');
            
            for (const key in e) {
              
                if(e[key] == e.title) {tableRow.appendChild(addData(e[key]));}
                else if(e[key] == e.author) {tableRow.appendChild(addData(e[key]));}
                else if(e[key] == e.pages) {tableRow.appendChild(addData(e[key]));}
                else if(e[key] == true) {tableRow.appendChild(addButton('Read', e.title));}
                else if(e[key] == false) {tableRow.appendChild(addButton('Unread', e.title));}
                
                console.log(key);
            }

            tableRow.appendChild(addButton('Remove', myLibrary.indexOf(e)));

            tableBody.appendChild(tableRow);

            
        });

}

function addData(data) {

    const tableData = document.createElement('td');
    tableData.textContent = data;
    return tableData;
}
function addButton(text, title) {
  const tableData = document.createElement('td');
  const tableButton = document.createElement('button')
  tableButton.classList.add(title);
  tableButton.textContent = text;
  tableData.appendChild(tableButton);
  return tableData;

}

displayLibrary();
function addButtonEvents (buttons) {

    buttons.forEach((button) => {

          button.addEventListener('click', () => {
                

                myLibrary.forEach(e => {
                  if(e.title == button.className)
                  {
                    if(e.read == true)
                    {
                      button.textContent = "Unread";
                      e.toggleRead();
                    }
                    else
                    {
                      if(e.read == false)
                      {
                        button.textContent = "Read";
                        e.toggleRead();
                      }
                    }
                  }
                  else if(myLibrary.indexOf(e) == parseInt(button.className))
                  {
                      myLibrary.splice(myLibrary.indexOf(e),1);
                      displayLibrary();
                      buttons = document.querySelectorAll('button');
                      addButtonEvents(buttons);
                  }
                  else if(button.className == 'submit')
                  {
                    const newBook = new Book(nameBook.value, nameAuthor.value,parseInt(pagesAmount.value), !readStatus.checked);
                    addBookToLibrary(newBook);
                    displayLibrary();
                    button = null;
                    // buttons = document.querySelectorAll('button');
                    // addButtonEvents(buttons);
                  }
                });
                
          });

    });
}

var buttons = document.querySelectorAll('button');
addButtonEvents(buttons);

const nameBook = document.querySelector('#book_name');
const nameAuthor = document.querySelector('#author_name');
const pagesAmount = document.querySelector('#pages_amount');
const readStatus = document.querySelector('#read_status');


  // const variable = 'property'
  // console.log(myObject.variable);
  // console.log(myObject[variable]);