export default class Card{
  constructor({$target, data}) {
    this.$target = $target;
    this.card = document.createElement('article');
    this.card.className = 'card';
    
    this.$target.appendChild(this.card);

    this.render();
  }

  render() {
    const cardTitle = document.createElement('p');
    cardTitle.className = 'card-title';
    cardTitle.innerText = 'title';
    
    const cardImg = document.createElement('img');
    cardImg.className = 'card-image';
    cardImg.src = 'null';

    const cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';

    const catTemperament = document.createElement('p');
    catTemperament.className = 'cat-temperament';
    catTemperament.innerText = 'cat-temperament';

    const catOrigin = document.createElement('p');
    catOrigin.className = 'cat-origin';
    catOrigin.innerText = 'cat-origin';

    cardDescription.appendChild(catTemperament);
    cardDescription.appendChild(catOrigin);

    this.card.appendChild(cardTitle);
    this.card.appendChild(cardImg);
    this.card.appendChild(cardDescription);
  }
}