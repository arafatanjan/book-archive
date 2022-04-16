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

        const li = document.createElement('li');
        li.innerHTML = `Search result: ${docs}`;
        totalResult.appendChild(li);
    }
    // console.log(num_found);
    // .then(data => displaySearchResult(data.docs[0].tittle));
    //     // displaySearchResult


    // // }


    // // const div = document.createElement('div');
    // // div.classList.add('col');
    // // div.innerHTML = `<div><h1>Search result:${meal.num_found}</h1></div>`;
    // // const displaySearchResult = docs => {
    // const searchResult = document.getElementById('search-result');
    // // 
    // docs.forEach(meal => {
    //     console.log(meal);
    // })
    // const resultText = lenghts.value;
    // const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);


        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card h-100">
                         <img src="https://covers.openlibrary.org/b/id/${meal.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
                          <div class="card-body">
                             <h5 class="card-title">title: ${meal.title}</h5>
                             <h5 class="card-title">author_name: ${meal.author_name}</h5>
                             <h5 class="card-title">publish date: ${meal.publish_date}</h5>
                            //  <p class="card-text"> </p>
                         </div>
                </div>
                 `;
        searchResult.appendChild(div);
        // const div = document.createElement('div');
        // div.classList.add('col');
        // div.innerHTML = `<div><h1>Search result:${meal.num_found}</h1></div>`;
    })
}
