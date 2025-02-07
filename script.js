

  // Kommentare
  const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

  document.addEventListener('DOMContentLoaded', function () {
    // Kommentare laden und anzeigen
    storedComments.forEach(comment => {
      addCommentToDOM(comment.name, comment.nachricht);
    });

    // Kommentarformular-Event-Listener
    document.getElementById('commentForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const nachricht = document.getElementById('nachricht').value;

      if (name && nachricht) {
        const comment = { name, nachricht };
        storedComments.push(comment);
        localStorage.setItem('comments', JSON.stringify(storedComments));
        addCommentToDOM(name, nachricht);
  
        document.getElementById('name').value = '';
        document.getElementById('nachricht').value = '';
        }
      });
    });
  
    function addCommentToDOM(name, nachricht) {
      const commentsSection = document.getElementById('commentsSection');
      const newComment = document.createElement('div');
      newComment.innerHTML = `<p><strong>${name}:</strong> ${nachricht} <button class="deleteComment">Löschen</button></p>`;
      commentsSection.appendChild(newComment);
  
      newComment.querySelector('.deleteComment').addEventListener('click', function () {
        commentsSection.removeChild(newComment);
        const index = storedComments.findIndex(comment => comment.name === name && comment.nachricht === nachricht);
        if (index > -1) {
          storedComments.splice(index, 1);
          localStorage.setItem('comments', JSON.stringify(storedComments));
        }
      });
    };




//konfetti libary
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
    document.head.appendChild(script);
   
  //partyButton
    script.onload = () => {
      console.log("Confetti library loaded!");
    
      const party = document.querySelector(".partyButton");
    
      if (!party) {
        console.error("Button mit class 'partyButton' nicht gefunden!");
        return;
      }
    
      party.addEventListener("click", () => {
        const duration = 10000, // 10 Sekunden
          animationEnd = Date.now() + duration,
          defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
        function randomInRange(min, max) {
          return Math.random() * (max - min) + min;
        }
    
        const interval = setInterval(function () {
          const timeLeft = animationEnd - Date.now();
    
          if (timeLeft <= 0) {
            clearInterval(interval);
            return;
          }
    
          const particleCount = 50 * (timeLeft / duration);
    
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
          );
    
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
          );
        }, 250);
      });
    };



  






//submit = Absenden. konfetti button
  document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector(".submit");

    if (!submit) {
        console.error("Button mit class 'submit' nicht gefunden!");
        return;
    }

   submit.addEventListener("click", () => {
      const submit = document.querySelector(".submit");

      const end = Date.now() + 2000;
    
      const colors = ["#bb0000", "#ffffff"];
      
      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
      
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });
      
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    });
});    






const stars = 40;
const skyStars = document.getElementById("sky__stars");
const toggleAnimation = document.getElementById("toggle-animation");

// Generate stars randomly using absolute position
function createStars() {
	for (let i = 0; i < stars; i++) {
		let x = Math.floor(Math.random() * 100 + 1);
		let y = Math.floor(Math.random() * 100 + 1);
		const starPoint = document.createElement("div");
		starPoint.style.left = `${x}%`;
		starPoint.style.top = `${y}%`;
		skyStars.appendChild(starPoint);
	}
}
createStars();
// butoon to pause/play animation
toggleAnimation.addEventListener("click", playAnimation);
