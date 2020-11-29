export default class SearchingSection{
  constructor({$target}) {
    this.$target = $target;
    this.section = document.createElement('section');
    this.section.innerText = 'SearchingSection';
    
    this.$target.appendChild(this.section);

    this.render();
  }

  render() {
    
  }

}