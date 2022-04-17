const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    // searchText = = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data.num_found));
    const displayUsers = docs => {
        const totalResult = document.getElementById('users');
        totalResult.innerHTML = '';
        const li = document.createElement('li');
        li.innerHTML = `Search result: ${docs}`;
        totalResult.appendChild(li);
    }

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    if (books.length === 0) {
        const totalResult = document.getElementById('users');
        const li = document.createElement('li');
        totalResult.innerHTML = '';
        li.innerHTML = `no reult found`;
        totalResult.appendChild(li);
    }
    books.forEach(book => {
        console.log(book);


        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card h-100">
                         <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-25 mx-auto" alt="...">
                          
                          <div class="card-body">
                             <h5 class="card-title">title: ${book.title}</h5>
                             <h5 class="card-title">author_name: ${book.author_name}</h5>
                             <h5 class="card-title">publish date: ${book.publish_date}</h5>
                              <p class="card-text"> </p>
                         </div>
                </div>
                 `;
        searchResult.appendChild(div);

    })
}
