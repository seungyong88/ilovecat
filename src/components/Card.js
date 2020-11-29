export default class Card{
  constructor({$target, data}) {
    this.data = data;
    this.card = document.createElement('article');
    this.card.className = 'card';
    
    $target.appendChild(this.card);

    this.render();
  }

  render() {
    const url = this.data.url;
    const {name, origin} = this.data.breeds.length > 0 ? this.data.breeds[0] : {name: '정보없음', origin:'정보없음'}  

    const cardImg = document.createElement('img');
    cardImg.className = 'card-image';
    cardImg.src = url;

    const cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';

    const catName = document.createElement('p');
    catName.className = 'cat-name';
    catName.innerText = name;

    const catOrigin = document.createElement('p');
    catOrigin.className = 'cat-origin';
    catOrigin.innerText = origin;

    cardDescription.appendChild(catName);
    cardDescription.appendChild(catOrigin);

    this.card.appendChild(cardImg);
    this.card.appendChild(cardDescription);
  }
}