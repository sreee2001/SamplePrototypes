let hotels = [];

async function loadHotels(){
  const res = await fetch('../data/hotels.json');
  hotels = await res.json();
}

function renderCard(h){
  const col = document.createElement('div');
  col.className='col-sm-6 col-lg-4';
  col.innerHTML = `
    <div class="card shadow-sm">
      <img src="${h.images[0]||'../Shared/assets/placeholder.jpg'}" class="card-img-top" alt="${h.name}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${h.name}</h5>
        <p class="card-text text-muted small">${h.location} · ⭐ ${h.rating}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <strong>$${h.price}</strong>
          <button class="btn btn-outline-primary btn-sm" data-id="${h.id}">View</button>
        </div>
      </div>
    </div>
  `;
  return col;
}

function renderList(list){
  const container = document.getElementById('list');
  container.innerHTML='';
  list.forEach(h => container.appendChild(renderCard(h)));
}

document.getElementById('searchBtn').addEventListener('click', ()=>{
  const q=document.getElementById('q').value.trim().toLowerCase();
  if(!q) return renderList(hotels);
  renderList(hotels.filter(h=> (h.name+h.location).toLowerCase().includes(q)));
});

loadHotels().then(()=>renderList(hotels)).catch(err=>{console.error('Failed to load hotels',err)});

document.getElementById('list').addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const id = btn.dataset.id;
  const hotel = hotels.find(h=>h.id===id);
  if(!hotel) return;
  alert(`Open details for ${hotel.name} (demo)`);
});
