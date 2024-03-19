const llavesEncriptacion = [
  { letra: "e", clave: "enter" },
  { letra: "i", clave: "imes" },
  { letra: "a", clave: "ai" },
  { letra: "o", clave: "ober" },
  { letra: "u", clave: "ufat" },
];

function copiarTexto() {
  const texto = document.getElementById("sin-mensaje").innerText;
  navigator.clipboard
    .writeText(texto)
    .then(() => alert("Texto Copiado al Portapapales"))
    .catch((error) => alert(`${error.message}`));
}

function encriptarMensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let index = 0; index < llavesEncriptacion.length; index++) {
    const llave = llavesEncriptacion[index];
    const regex = new RegExp(`${llave.letra}`, "g");
    if (index == 0) {
      mensajeEncriptado = mensaje.replace(regex, llave.clave);
    } else {
      mensajeEncriptado = mensajeEncriptado.replace(regex, llave.clave);
    }
  }
  return mensajeEncriptado;
}

function desencriptarMensaje(mensajeEncriptado) {
  let mensajeDesencriptado = "";
  const llavesDesencriptacion = llavesEncriptacion.toReversed();
  for (let index = 0; index < llavesDesencriptacion.length; index++) {
    const llave = llavesDesencriptacion[index];
    const regex = new RegExp(`${llave.clave}`, "g");
    if (index == 0) {
      mensajeDesencriptado = mensajeEncriptado.replace(regex, llave.letra);
    } else {
      mensajeDesencriptado = mensajeDesencriptado.replace(regex, llave.letra);
    }
  }
  return mensajeDesencriptado;
}

function encriptar() {
    const texto = document.getElementById("texto").value;
    if (texto != "") {
        const textoEncriptado = encriptarMensaje(texto);
        document.getElementById("sin-mensaje").innerText = textoEncriptado;
        document.querySelector("img").style.display = "none";
        document.getElementById("ingresa-texto").style.display = "none";
        document.getElementById("btn-copiar").style.display = "block";
    }
  }
  
  function desencriptar() {
    const texto = document.getElementById("texto").value;
    if (texto != "") {
        const textoDesencriptado = desencriptarMensaje(texto);
        document.getElementById("sin-mensaje").innerText = textoDesencriptado;
        document.querySelector("img").style.display = "none";
        document.getElementById("ingresa-texto").style.display = "none";
        document.getElementById("btn-copiar").style.display = "block";
    }
  }
