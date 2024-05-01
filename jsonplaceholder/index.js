
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showData(data))
    .catch(error => console.log(error))
};

const showData = (data) => {
    console.log(data);
    for(let singleData of data.slice(0, 15)) {
        console.log(singleData);
        const container = document.getElementById('post-info');
        const div = document.createElement('div');
        div.innerHTML = `
        <h3 class="text-2xl font-semibold text-center">${singleData.title}</h3>
        `
        container.appendChild(div);
    }
}

loadData();