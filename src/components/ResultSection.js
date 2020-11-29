import Card from "./Card.js";

export default class ResultSection{
  constructor({$target}) {
    this.$target = $target;
    this.section = document.createElement('section');
    this.section.innerText = 'ResultSection';
    
    this.$target.appendChild(this.section);

    this.render();
  }

  render() {
    new Card(this.section);
  }
}