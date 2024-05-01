
const loadData = () => {
    fetch('https://meme-api.com/gimme/50')
    .then(res => res.json())
    .then(data => showData(data.memes))
    .catch(error => console.log(error))
}

const showData = (memes) => {
    // console.log(memes);
    memes.forEach(meme => {
        console.log(meme);
        const container = document.getElementById('meme-gallery');
        const div = document.createElement('div');
        div.innerHTML = `
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img class="h-72 w-full rounded-md" src="${meme.url}" alt="Shoes" /></figure>
            </div>
        `
        container.appendChild(div);
    })
}

loadData();