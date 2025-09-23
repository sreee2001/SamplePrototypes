export class Hotel {
  constructor({id,name,location,rating,price,images,description}){
    this.id=id;this.name=name;this.location=location;this.rating=rating;this.price=price;this.images=images||[];this.description=description||'';
  }
}
