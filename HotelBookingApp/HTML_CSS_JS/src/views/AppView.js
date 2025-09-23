import { HotelService } from '../services/HotelService.js';
import { SearchBar } from '../components/SearchBar.js';
import { HotelListView } from './HotelListView.js';
import { HotelDetailsView } from './HotelDetailsView.js';
import { BookingView } from './BookingView.js';
import { ConfirmationView } from './ConfirmationView.js';

export class AppView{
  constructor(root){this.root=root;this.service=new HotelService();this.state={hotels:[],selected:null}}
  mount(){
    this.root.innerHTML='';
    this.header=document.createElement('header');this.header.className='app-header';this.header.innerHTML=`<h1 class="brand">StayEasy</h1>`;
    this.container=document.createElement('main');this.container.className='app-container';
    this.root.appendChild(this.header);this.root.appendChild(this.container);
    const search=new SearchBar({onSearch:q=>this.handleSearch(q)});this.container.appendChild(search.render());
    this.hotelListView=new HotelListView(this.container,{service:this.service,onView:id=>this.showDetails(id)});
    this.hotelListView.render();
  }
  async handleSearch(q){await this.hotelListView.search(q)}
  async showDetails(id){const hotel=await this.service.getById(id);this.clearMain();this.hotelDetails=new HotelDetailsView(this.container,{hotel,onBook:h=>this.showBooking(h)});this.hotelDetails.render();}
  showBooking(hotel){this.clearMain();this.bookingView=new BookingView(this.container,{hotel,onConfirm:booking=>this.showConfirmation(booking)});this.bookingView.render();}
  showConfirmation(booking){this.clearMain();this.confirmation=new ConfirmationView(this.container,{booking});this.confirmation.render();}
  clearMain(){this.container.innerHTML=''}
}
