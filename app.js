// array to save each object
let collection  = [];

// constructor for object
function Book(b_title,b_author) {
    this.title = b_title;
    this.author = b_author;
}

function create () {
    // DOM  for inputs
    let title = document.querySelector('.title-input');
    let author = document.querySelector('.author-input'); 
    collection.push(new Book(title.value,author.value));
    // remove the text from input box
    title.value = '';
    author.value = '';
    // result for function
    return collection;
}

function remove() {
    const section  = document.querySelector('.main-data');
    const div_show = document.createElement('div');
    div_show.classList = 'outputs';
    div_show.innerHTML = `
    <h2 class="title-show">Title</h2>
    <h2 class="author-show">Author</h2>
    <button class="rmv-btn">Remove</button>
    `;
    section.append(div_show);
}
function main() {
    const addBtn =  document.querySelector('.add-btn');
    addBtn.addEventListener('click',() =>{
        console.log(create());
        remove();
    });
}

main();

