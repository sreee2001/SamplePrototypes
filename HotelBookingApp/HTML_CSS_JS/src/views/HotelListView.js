import { HotelCard } from '../components/HotelCard.js';
export class HotelListView{constructor(root,{service,onView}){this.root=root;this.service=service;this.onView=onView;this.listEl=null}
  async render(){const section=document.createElement('section');section.className='hotel-list-section';const title=document.createElement('h2');title.textContent='Available hotels';this.listEl=document.createElement('div');this.listEl.className='hotel-list';section.appendChild(title);section.appendChild(this.listEl);this.root.appendChild(section);await this.search('');}
  async search(query){const hotels=await this.service.search(query);this.listEl.innerHTML='';hotels.forEach(h=>{const card=new HotelCard(h,{onView:this.onView});this.listEl.appendChild(card.render())});}
}
