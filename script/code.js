async function getCards() {
    let url = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?race=spellcaster');
    let data = url.json();
    return data;
}

async function display() {
    let cards = await getCards();

    cards.data.forEach( (card)=> {
        document.querySelector('#container').innerHTML += `<div class="cards">
                                                 <h3>${card.name} ${card.level}*         ${card.attribute}</h3>
                                                 <img src="${card.card_images.image_url_small}">
                                                 <h4>${card.race}/${card.type}/${card.archetype}</h4>
                                                 <h5>${card.desc}</h5>
                                                 <p>ATK/${card.atk} DEF/${card.def}</p>
                                                 </div>`;
      });

}

display();