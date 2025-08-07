// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnMc_zGGdTTTSCYTZDRaEm83Sbn9rK_ow",
  authDomain: "dulcesbrii-59369.firebaseapp.com",
  projectId: "dulcesbrii-59369",
  storageBucket: "dulcesbrii-59369.firebasestorage.app",
  messagingSenderId: "464730723924",
  appId: "1:464730723924:web:f71ace4ffc62cecd5a7fc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const imagen = document.getElementById("imagen").value;
  const precio = document.getElementById("precio").value;
  const descripcion = document.getElementById("descripcion").value;

  db.collection("productos").add({
    nombre,
    imagen,
    precio,
    descripcion
  }).then(() => {
    alert("Producto agregado con éxito 🎉");
    document.getElementById("formulario").reset();
  }).catch((error) => {
    console.error("Error al agregar producto: ", error);
  });
});
