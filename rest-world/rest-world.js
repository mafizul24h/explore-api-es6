const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data.slice(0, 9)))
}

const showCountries = (countries) => {
    // console.log(countries);
    const container = document.getElementById('rest-world');
    container.innerHTML = '';
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact h-72 w-full bg-base-100 shadow-xl">
            <figure><img src="${country.flags.png}" alt="Shoes" /></figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${country.name.common}</h2>
                <p>Capital: ${country.capital[0] && country.capital[0]}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary" onclick="my_modal_3.showModal()"><span onClick="showDetails('${country.cca3}')">Show Details</span></button>
                </div>
            </div>
        </div>
        `
        container.appendChild(div);
    })
}

const showDetails = (id) => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
        .then(res => res.json())
        .then(data => showDetailModule(data[0]))
}

const showDetailModule = (countryDetails) => {
    console.log(countryDetails);
    const { continents, flags } = countryDetails;
    const container = document.getElementById('my_modal_3');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('modal-box');
    div.innerHTML = `
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <img class="w-full rounded-md" src="${flags.png}" alt="">
            <h3 class="font-bold text-lg">${continents ? continents : 'N/A'}</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
    `
    container.appendChild(div);
}

loadCountries();

const showAllCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data))
}