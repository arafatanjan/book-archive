const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    // searchText = = '';
    const urh = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(urh)
        .then(res => res.json())
        // .then(data => console.log(data.docs.cover_i));
        .then(data => displayUsers(data.num_found));
    const displayUsers = docs => {
        const totalResult = document.getElementById('users');
        totalResult.innerHTML = '';
        const li = document.createElement('li');
        li.classList.add('post');
        li.innerHTML = `Search result: ${docs}`;
        totalResult.appendChild(li);
    }

    fetch(urh)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    if (books.length === 0) {
        const totalResult = document.getElementById('users');
        const div = document.createElement('li');

        totalResult.innerHTML = '';
        div.classList.add('post');
        div.innerHTML = `no reult found`;
        div.classList.add('post');
        totalResult.appendChild(div);
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
        const urp = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

        if (urp === "") {
            console.log(1);

        };

        searchResult.appendChild(div);

    })
}
