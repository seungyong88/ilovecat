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
    if(this.data == null) return;

    this.section.innerHTML = '';

    if(this.data.length > 0) {
      this.data.forEach(cat => {
        new Card({$target: this.section, data: cat, onClick: this.onClick});
      })
    }else{
      const noDataWrapper = document.createElement('div');
      noDataWrapper.className="no-data-wrapper";
      
      const noData = document.createElement('p');
      noData.className="no-data";
      noData.innerText = '검색 결과가 없습니다.';
      
      noDataWrapper.appendChild(noData);
      this.section.appendChild(noDataWrapper);
    }

  }
}