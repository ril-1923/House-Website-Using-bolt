const properties = [
  {
    id: 1,
    title: "Maple Ridge Estate",
    location: "Greenfield, CO",
    price: 875000,
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Harbor View Loft",
    location: "Coral Bay, FL",
    price: 425000,
    type: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Sunset Villa",
    location: "Mira Sol, CA",
    price: 1250000,
    type: "villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "Cedarwood Cottage",
    location: "Pinecrest, OR",
    price: 395000,
    type: "house",
    bedrooms: 3,
    bathrooms: 2,
    area: 1850,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    title: "Skyline Penthouse",
    location: "Metro Heights, NY",
    price: 950000,
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    title: "Olive Grove Villa",
    location: "Stone Brook, TX",
    price: 1100000,
    type: "villa",
    bedrooms: 5,
    bathrooms: 3,
    area: 3400,
    image: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

function formatPrice(price) {
  return "$" + price.toLocaleString();
}

function renderProperties(list) {
  const grid = document.getElementById("propertyGrid");
  if (list.length === 0) {
    grid.innerHTML = '<div class="col-12 text-center py-5"><h3>No properties match your filters</h3><p class="text-muted">Try adjusting your search criteria</p></div>';
    return;
  }
  grid.innerHTML = list
    .map(
      (p) => `
    <div class="col-md-6 col-lg-4">
      <div class="property-card">
        <div class="property-img" style="background-image:url('${p.image}')">
          <span class="property-badge">${p.type}</span>
        </div>
        <div class="property-body">
          <h3>${p.title}</h3>
          <div class="property-location">${p.location}</div>
          <div class="property-price">${formatPrice(p.price)}</div>
          <div class="property-features">
            <span>&#128719; ${p.bedrooms} Beds</span>
            <span>&#128703; ${p.bathrooms} Baths</span>
            <span>&#9634; ${p.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>`
    )
    .join("");
}

function applyFilters() {
  const type = document.getElementById("filterType").value;
  const beds = document.getElementById("filterBedrooms").value;
  const price = document.getElementById("filterPrice").value;

  let filtered = properties;

  if (type !== "all") {
    filtered = filtered.filter((p) => p.type === type);
  }
  if (beds !== "all") {
    filtered = filtered.filter((p) => p.bedrooms >= parseInt(beds));
  }
  if (price !== "all") {
    filtered = filtered.filter((p) => p.price <= parseInt(price));
  }

  renderProperties(filtered);
}

document.getElementById("filterType").addEventListener("change", applyFilters);
document.getElementById("filterBedrooms").addEventListener("change", applyFilters);
document.getElementById("filterPrice").addEventListener("change", applyFilters);
document.getElementById("resetFilters").addEventListener("click", () => {
  document.getElementById("filterType").value = "all";
  document.getElementById("filterBedrooms").value = "all";
  document.getElementById("filterPrice").value = "all";
  renderProperties(properties);
});

renderProperties(properties);
