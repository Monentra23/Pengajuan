const ktpImage = document.getElementById("ktpImage");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

const notificationBtn =
  document.getElementById("notificationBtn");


/* =========================
   KTP PREVIEW
========================= */

ktpImage.addEventListener("click", function () {

  modalImage.src = this.src;

  imageModal.classList.add("show");

  document.body.style.overflow = "hidden";

});


/* =========================
   CLOSE MODAL
========================= */

function closeImageModal() {

  imageModal.classList.remove("show");

  document.body.style.overflow = "";

}

closeModal.addEventListener(
  "click",
  closeImageModal
);


imageModal.addEventListener(
  "click",
  function (event) {

    if (event.target === imageModal) {
      closeImageModal();
    }

  }
);


/* =========================
   NOTIFICATION
========================= */

notificationBtn.addEventListener(
  "click",
  function () {

    const message =
      "Belum ada pembaruan status baru.";

    showToast(message);

  }
);


/* =========================
   TOAST
========================= */

function showToast(message) {

  const oldToast =
    document.querySelector(".toast");

  if (oldToast) {
    oldToast.remove();
  }


  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.textContent = message;


  Object.assign(
    toast.style,
    {
      position: "fixed",
      left: "50%",
      bottom: "25px",
      transform: "translateX(-50%)",
      padding: "12px 17px",
      borderRadius: "12px",
      background: "rgba(20,35,58,.95)",
      border: "1px solid rgba(255,255,255,.1)",
      color: "white",
      fontSize: "11px",
      zIndex: "999",
      boxShadow: "0 15px 40px rgba(0,0,0,.35)",
      opacity: "0",
      transition: ".3s"
    }
  );


  document.body.appendChild(toast);


  requestAnimationFrame(() => {
    toast.style.opacity = "1";
  });


  setTimeout(() => {

    toast.style.opacity = "0";

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 2500);

}


/* =========================
   CARD SCROLL ANIMATION
========================= */

const cards = document.querySelectorAll(
  ".card, .notification-card, .help-card"
);


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },
    {
      threshold: .12
    }
  );


cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition =
    "opacity .6s ease, transform .6s ease";

  observer.observe(card);

});