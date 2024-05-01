const searchAllData = (searchText) => {
    const inputElement = document.getElementById('serch-value');
    const inputValue = inputElement.value;

    const search = searchText || inputValue;
    // console.log(inputValue);
    // document.getElementById('spainner-container').classList.remove('d-none');
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => {
            // document.getElementById('spainner-container').classList.add('d-none');
            showAllPlayers(data.player);
        })
}

const showAllPlayers = (players) => {
    const playerContainer = document.getElementById('all-players');
    playerContainer.innerHTML = '';

    players.forEach(player => {
        document.getElementById('serch-value').value = '';
        // console.log(player);
        const { idPlayer, strPlayer, strThumb, strNationality } = player;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${strThumb ? strThumb : 'https://img.freepik.com/premium-vector/flat-football-player-with-japan-flag-background_337879-151.jpg?w=740'}" class="card-img-top" alt="Player">
            <div class="card-body">
                <h5 class="card-title">${strPlayer}</h5>
                <p class="card-text">Nationality: ${strNationality}</p>
                <div class = "text-center mt-2">
                    <button onClick="showSinglePlayer('${idPlayer}')" class="btn btn-primary">Details</button>
                    <button class="btn btn-danger">Delete</button>
                    </div>
            </div>
        </div>
        `
        playerContainer.appendChild(div);
    })
}

const showSinglePlayer = (id) => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
    .then(res => res.json())
    .then(data => singlePlayersDetails(data.players[0]))
}

const singlePlayersDetails = (player) => {
    // console.log(player);
    const {strPlayer, strSport, strTeam, strThumb, strGender, strNationality, strBirthLocation, strDescriptionEN, strDescriptionIT} = player;
    const playerContainer = document.getElementById('single-player-details');
    playerContainer.innerHTML = '';

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="my-3">
        <img class="img-fluid rounded" src="${strGender === 'Male' ? 'https://people.com/thmb/9nRjTs2W7dz_tDzLwzblF9Va1Bs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x49:721x51)/france-world-cup-122022-bca104a9735c41cfba2db193e30db179.jpg' : 'https://www.telegraph.co.uk/content/dam/football/2022/12/22/TELEMMGLPICT000318508931_trans_NvBQzQNjv4BqPSGJeyftEP9WNF5nKPELKeil7a1KV2STY3xRqqFt_No.jpeg'}" alt="Team">
    </div>
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${strThumb ? strThumb : 'https://img.freepik.com/free-vector/medicine-futur-with-male-human-character-wearable-external-skeleton-suit_1284-27478.jpg?t=st=1714578506~exp=1714582106~hmac=82f720065a79527f2657687d34d866a68a4620654bae42891deae56891e0aaf7&w=740'}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${strPlayer}</h5>
                        <p class="card-text">${strDescriptionEN.slice(0, 100)}...</p>
                    </div>
                </div>
            </div>
        </div>
    `
    playerContainer.appendChild(div);
}


searchAllData("John")