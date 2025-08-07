db.collection("productos").get().then((querySnapshot) => {
  const catalogo = document.getElementById("catalogo");
  querySnapshot.forEach((doc) => {
    const producto = doc.data();
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p><strong>${producto.precio} Bs</strong></p>
    `;
    catalogo.appendChild(card);
  });
});
