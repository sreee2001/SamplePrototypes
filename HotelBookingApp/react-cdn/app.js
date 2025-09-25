let hotels = [];
const e = React.createElement;

async function loadHotels(){
  const res = await fetch('../data/hotels.json');
  hotels = await res.json();
}

function HotelCard({h}){
  return e('div',{className:'col-sm-6 col-lg-4'},
    e('div',{className:'card shadow-sm'},
      e('img',{src:h.images[0]||'../Shared/assets/placeholder.jpg',className:'card-img-top',alt:h.name}),
      e('div',{className:'card-body d-flex flex-column'},
        e('h5',{className:'card-title'},h.name),
        e('p',{className:'card-text text-muted small'},`${h.location} · ⭐ ${h.rating}`),
        e('div',{className:'mt-auto d-flex justify-content-between align-items-center'},
          e('strong',null,`$${h.price}`),
          e('button',{className:'btn btn-outline-primary btn-sm',onClick:()=>alert(`View ${h.name}`)},'View')
        )
      )
    )
  );
}

function App(){
  return e('div',null,
    e('header',{className:'mb-3'},e('h1',{className:'brand'},'StayEasy')),
    e('div',{className:'row g-3'},hotels.map(h=>e(HotelCard,{h, key:h.id})))
  );
}

loadHotels().then(()=>ReactDOM.createRoot(document.getElementById('root')).render(e(App))).catch(err=>{console.error('Failed to load hotels',err)});
