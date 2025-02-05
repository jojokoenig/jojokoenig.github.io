document.addEventListener('DOMContentLoaded', function() {
  const imageLinks = document.querySelectorAll('a img');

  imageLinks.forEach(img => {
    img.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    img.addEventListener('mouseover', function() {
      img.style.transform = 'scale(1.05)';
      img.style.opacity = '0.8';
    });

    img.addEventListener('mouseout', function() {
      img.style.transform = 'scale(1)';
      img.style.opacity = '1';
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const title = document.querySelector('.title');
  const titleText = title.textContent;
  title.innerHTML = '';

  for (let letter of titleText) {
    const span = document.createElement('span');
    span.textContent = letter;
    title.appendChild(span);
  }
});

document.getElementById("p1").addEventListener("click", function() {
        window.location.href = "https://example.com";
    });

    document.getElementById("p2").addEventListener("click", function() {
      window.location.href = "https://page3.com";
  });
