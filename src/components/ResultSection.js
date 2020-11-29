import Card from "./Card.js";

export default class ResultSection{
  constructor({$target}) {
    this.$target = $target;
    this.section = document.createElement('section');
    this.section.className = 'result-section';
    
    this.$target.appendChild(this.section);

    this.render();
  }

  render() {
    //test code
    for(let i =0; i < 50; i++) {
      new Card({$target: this.section, data: null});
    }
  }
}