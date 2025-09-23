import { Hotel } from '../models/Hotel.js';

const sample = [
  {id:'h1',name:'Seaside Resort',location:'Santa Monica, CA',rating:4.6,price:220,images:['./assets/h1-1.jpg'],description:'Oceanfront resort with pools, spa and beach access.'},
  {id:'h2',name:'Urban Comfort Hotel',location:'San Francisco, CA',rating:4.3,price:180,images:['./assets/h2-1.jpg'],description:'Cozy rooms in the heart of the city.'},
  {id:'h3',name:'Mountain View Inn',location:'Aspen, CO',rating:4.8,price:300,images:['./assets/h3-1.jpg'],description:'Alpine lodge with ski access.'}
];

export class HotelService{
  constructor(data=sample){
    this.data=data.map(d=>new Hotel(d));
  }
  search(query=''){
    const q=(query||'').trim().toLowerCase();
    if(!q) return Promise.resolve(this.data);
    return Promise.resolve(this.data.filter(h=> (h.name+h.location).toLowerCase().includes(q)));
  }
  getById(id){
    return Promise.resolve(this.data.find(h=>h.id===id));
  }
}
