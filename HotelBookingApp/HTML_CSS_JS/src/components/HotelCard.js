export class HotelCard{
  constructor(hotel,{onView}={}){this.hotel=hotel;this.onView=onView}
  render(){
    const card=document.createElement('article');card.className='hotel-card';card.tabIndex=0;
    const img=document.createElement('div');img.className='hotel-image';img.style.backgroundImage=`url(${this.hotel.images[0]||'./assets/placeholder.jpg'})`;
    const body=document.createElement('div');body.className='hotel-body';
    const title=document.createElement('h3');title.textContent=this.hotel.name;
    const meta=document.createElement('div');meta.className='hotel-meta';meta.innerHTML=`<span class="rating">⭐ ${this.hotel.rating}</span> · <span class="location">${this.hotel.location}</span>`;
    const footer=document.createElement('div');footer.className='hotel-footer';footer.innerHTML=`<strong class="price">$${this.hotel.price}</strong> / night`;
    const viewBtn=document.createElement('button');viewBtn.className='btn ghost';viewBtn.textContent='View';viewBtn.addEventListener('click',()=>this.onView&&this.onView(this.hotel.id));
    body.appendChild(title);body.appendChild(meta);body.appendChild(footer);body.appendChild(viewBtn);
    card.appendChild(img);card.appendChild(body);return card;
  }
}
