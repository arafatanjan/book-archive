const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    // searchField.value = '';

    // searchText = = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
    // .then(data => displaySearchResult(data.docs[0].tittle));
    //     // displaySearchResult
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
      <div class="card h-100">
                 <img src="" class="card-img-top w-50 mx-auto" alt="...">
                  <div class="card-body">
                     <h5 class="card-title">${meal.title}</h5>
                     <p class="card-text"></p>
                 </div>
        </div>
         `;
        searchResult.appendChild(div);
    })
}