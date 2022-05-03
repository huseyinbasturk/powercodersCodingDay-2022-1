var books = [
    {
        title:'The Alchemist',
        author:'Paulo Coelho',
        numberOfStock: 2,
        price: 7
    },
    {
        title:'Les Miserables',
        author:'Victor Hugo',
        numberOfStock: 0,
        price: 9
    },
    {
        title:'Brave New World',
        author:'Aldous Huxley',
        numberOfStock: 4,
        price: 11
    }
]

/**HTML elements */
let bookList = document.querySelector('#book-list');
let titleEl = document.querySelector('#title-input');
let authorEl = document.querySelector('#author-input');
let stockEl = document.querySelector('#stock-input');
let priceEl = document.querySelector('#price-input');
let addButton = document.querySelector('#add-button');

/**sorting the books */
function sortArray(a,b) {
    if(a.title < b.title) {
        return -1;
    }else if(a.title > b.title) {
        return 1;
    } else {
        return 0;
    }
}

/**display Books */
function displayBooks(array) {
    let sortedArray = array.sort(sortArray);

    let printed = sortedArray.map(function (list) {
        return `<tr><td>${list.title}</td><td>${list.author}</td><td>${list.numberOfStock}</td>
        <td>${list.price} CHF</td></tr>`
    }).join("");

    bookList.innerHTML = printed;
}

displayBooks(books);
addButton.addEventListener('click', function() {
    books.push({
        'title':titleEl.value,
        'author':authorEl.value,
        'numberOfStock':stockEl.value,
        'price':priceEl.value
    })
    displayBooks(books);
})





