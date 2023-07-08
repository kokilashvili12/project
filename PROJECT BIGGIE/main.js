
let anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
  
});


document.getElementById("search-button").addEventListener("click", function() {
    let searchQuery = document.getElementById("search-bar").value.toLowerCase();
    performSearch(searchQuery);
  });
  
  function performSearch(query) {
    let images = document.getElementsByClassName("myimage");
    for (let i = 0; i < images.length; i++) {
      let altText = images[i].getAttribute("alt").toLowerCase();
      if (altText.includes(query)) {
        images[i].style.display = "block";
      } else {
        images[i].style.display = "none";
      }
    }
  }

