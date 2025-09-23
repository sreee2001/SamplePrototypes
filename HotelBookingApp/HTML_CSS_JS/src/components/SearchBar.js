export class SearchBar{
  constructor({onSearch}){this.onSearch=onSearch}
  render(){
    const wrap=document.createElement('div');wrap.className='searchbar';
    const input=document.createElement('input');input.type='search';input.placeholder='Search by city, hotel, or landmark';input.className='input-search';input.setAttribute('aria-label','Search hotels');
    const btn=document.createElement('button');btn.className='btn primary';btn.textContent='Search';
    btn.addEventListener('click',()=>this.onSearch(input.value));
    input.addEventListener('keydown',e=>{if(e.key==='Enter')this.onSearch(input.value)});
    wrap.appendChild(input);wrap.appendChild(btn);return wrap;
  }
}
