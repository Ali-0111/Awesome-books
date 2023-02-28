
// array to save each object
let collection  = [];
// constructor for object
function Book(b_title,b_author) {
    this.title = b_title;
    this.author = b_author;
}

function saveLocal(arr,key) {
    localStorage.setItem(key,JSON.stringify(arr));
}

function create () {
    // DOM  for inputs
    let title = document.querySelector('.title-input');
    let author = document.querySelector('.author-input'); 
    collection.push(new Book(title.value,author.value));
    // result for function
    // return collection;
}

function show() {
    
    let title = document.querySelector('.title-input');
    let author = document.querySelector('.author-input'); 
    const section  = document.querySelector('.main-data');
    const div_show = document.createElement('div');
    div_show.classList = 'outputs';
    div_show.innerHTML = `
    <h2 class="title-show">${title.value}</h2>
    <p class="author-show">${author.value}</p>
    <button class="rmv-btn">Remove</button>
    `;
    section.append(div_show);
    // remove the text from input box
    title.value = '';
    author.value = '';
}

function del () {
    const btns = document.querySelectorAll('.rmv-btn');
    console.log(btns);
    const section = document.querySelector('section');
    const div_show = document.querySelector('.div_show');
    console.log("We are inside the function");
    btns.forEach((btn)=>{
        btn.addEventListener('click', () => {
            section.removeChild(div_show);
        });
    });
        
};
function main() {
    const addBtn =  document.querySelector('.add-btn');
    addBtn.addEventListener('click',() =>{
        create();
        saveLocal(collection,"data");
        show();
    });

   
}
main();
del ();
