document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.login-form');

  // Crear div para mensajes
  const mensajeDiv = document.createElement('div');
  mensajeDiv.className = 'mensaje';
  form.prepend(mensajeDiv);

  function mostrarMensaje(texto, tipo = 'error') {
    mensajeDiv.textContent = texto;
    mensajeDiv.className = `mensaje ${tipo}`;
    mensajeDiv.style.display = 'block';
    setTimeout(() => mensajeDiv.style.display = 'none', 3000);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioFijo = { email: 'jose@raizcol.com', password: 'raizcol1234' };
    if (!usuarios.find(u => u.email === usuarioFijo.email)) {
      usuarios.push(usuarioFijo);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
      mostrarMensaje('Usuario incorrecto');
    } else if (usuario.password !== password) {
      mostrarMensaje('Contraseña incorrecta');
    } else {
      mostrarMensaje('Inicio de sesión exitoso', 'success');
      setTimeout(() => {
        window.location.href = 'inicio.html';
      }, 1000);
    }
  });
});
