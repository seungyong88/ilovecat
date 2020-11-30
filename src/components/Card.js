export default class Card{
  constructor({$target, data, onClick}) {
    this.data = data;
    this.onClick = onClick;
    this.card = document.createElement('article');
    this.card.className = 'card';
    
    this.card.addEventListener('click', e => this.onClick(data));

    $target.appendChild(this.card);

    this.render();
  }

  setState(data) {
    this.data = data;
  }

  render() {
    const url = this.data.url;
    const {name, origin} = this.data.breeds.length > 0 ? this.data.breeds[0] : {name: '정보없음', origin:'정보없음'}  

    const cardImg = document.createElement('img');
    cardImg.className = 'card-image';
    // cardImg.src = url;
    cardImg.classList.add('lazy');
    cardImg.src = 'src/images/cat.png';
    cardImg.dataset.src = url;
    cardImg.dataset.srcset = url;

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