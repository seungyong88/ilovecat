export default class Card{
  constructor($target) {
    this.$target = $target;
    this.card = document.createElement('article');
    this.card.innerText = 'Card';
    
    this.$target.appendChild(this.card);

    this.render();
  }

  render() {
    
  }

}