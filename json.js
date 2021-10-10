fetch('https://restcountries.com/v2/all')
    .then(response => response.json()) // converting response into json
    .then(data => jasonData(data));

function jasonData(data)
{
    // console.log(data)
    for (let i of data)
    {
        let createdDiv = document.createElement('div')
        createdDiv.classList.add('country-list-div')
        createdDiv.innerHTML = `
        <h1>${i.name}</h1>
        <button onclick="details('${i.name}')">Know more</button>`
        let section =  document.getElementById('country-section-id')
        section.appendChild(createdDiv)
    }

}

function details(countryName)
{
    // console.log('clicked')
    fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => detailsUI(data))

}

function detailsUI(data)
{
    let infoSection = document.getElementById('info')
    infoSection.innerHTML =
        `<h1>${data[0].name}</h1>
        <img width="100px" src='${data[0].flag}' alt="">`
}
