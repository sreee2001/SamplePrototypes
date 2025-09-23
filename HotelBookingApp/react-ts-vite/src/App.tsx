import React, { useState, useEffect } from "react";
import hotelsData from "../../data/hotels.json";

type Hotel = {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  images: string[];
  description: string;
};

export default function App() {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    setHotels(hotelsData as unknown as Hotel[]);
  }, []);

  return (
    <div className="app container py-4">
      <header>
        <h1 className="text-primary">StayEasy</h1>
      </header>
      <div className="row g-3 mt-3">
        {hotels.map((h) => (
          <div className="col-sm-6 col-lg-4" key={h.id}>
            <div className="card shadow-sm">
              <img
                src={h.images[0] || "../Shared/assets/placeholder.jpg"}
                className="card-img-top"
                alt={h.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{h.name}</h5>
                <p className="text-muted small">
                  {h.location} · ⭐ {h.rating}
                </p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <strong>${h.price}</strong>
                  <button className="btn btn-outline-primary btn-sm">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
