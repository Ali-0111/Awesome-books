
// constructor for object
class Book {

    constructor() {
        this.collection  = [];
        this.ul = document.querySelector('.lst');
        this.title = document.querySelector('.title-input');
        this.author = document.querySelector('.author-input'); 
        this.addBtn =  document.querySelector('.add-btn');
        this.fx;
    }

    saveLocal(arr,key) {
        localStorage.setItem(key,JSON.stringify(arr));
    }

    createList(newBook) {
        const li = document.createElement('li');
        li.innerHTML = `
        <h2 class="title-show">${newBook.title}</h2>
        <p class="author-show">${newBook.author}</p>
        <button class="rmv-btn">Remove</button>
        `;
        this.ul.appendChild(li);
        this.fx = document.querySelectorAll('.rmv-btn');
        // remove the text from input box
    }
    create () {
        // DOM  for inputs
        const newBook = {title: this.title.value, author: this.author.value }       
         console.log(newBook, 'I created');
        this.collection.push(newBook);
        // return collection;
       this.createList(newBook);
    }
   
};
const start = new Book();
start.addBtn.addEventListener ('click', ()=> {
    start.create();
    start.fx.forEach((btn,i)=>{
        btn.addEventListener('click', ()=>{
            console.log(btn,i);
        });
    });
});



