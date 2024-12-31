  
const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const openRegister = document.getElementById('openRegister');
const backToLogin = document.getElementById('backToLogin');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

loginButton.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
});

openRegister.addEventListener('click', () => {
    loginPopup.style.display = 'none';
    registerPopup.style.display = 'flex';
});

backToLogin.addEventListener('click', () => {
    registerPopup.style.display = 'none';
    loginPopup.style.display = 'flex';
});

closeLogin.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

closeRegister.addEventListener('click', () => {
    registerPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    } else if (event.target === registerPopup) {
        registerPopup.style.display = 'none';
    }
});

  window.addEventListener('click', (event) => {
      if (event.target === loginPopup) {
          loginPopup.style.display = 'none';
      } else if (event.target === registerPopup) {
          registerPopup.style.display = 'none';
      }
  });

  



