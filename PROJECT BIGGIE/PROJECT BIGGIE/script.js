let photos = document.querySelectorAll('#photos img');
let btn = document.querySelector('#btn');


photos.forEach(photo => photo.style.display = 'none');

btn.addEventListener('click', () => {

  let randomIndex = Math.floor(Math.random() * photos.length);

  photos.forEach(photo => photo.style.display = 'none');

  photos[randomIndex].style.display = 'block';
  photos[randomIndex].style.width = '300px'; 

  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, 5000);
});
