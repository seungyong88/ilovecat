import Card from "./Card.js";

export default class ResultSection{
  constructor({$target, onClick}) {
    this.data = null;
    this.onClick = onClick;
    this.section = document.createElement('section');
    this.section.className = 'result-section';
    
    $target.appendChild(this.section);

    this.render();
  }

  setState(data){
    this.data = data;

    this.render();
  }

  render() {
    this.section.innerHTML = '';

    if(this.data) {
      this.data.forEach(cat => {
        new Card({$target: this.section, data: cat, onClick: this.onClick});
      })
    }

  }
}