var video = document.getElementById("myVideo");

function pauseVideo() {
  if (video && video.paused) {
    video.play();
  } else if (video) {
    video.pause();
  }
}

/* products.html — activate tab from URL hash */

function activateTabFromHash() {
  const hash = window.location.hash;
  if (!hash) return;

  // Correct selector matching the ID in products.html
  const tabLink = document.querySelector(`#product-tab a[href="${hash}"]`);
  if (tabLink) {
    bootstrap.Tab.getOrCreateInstance(tabLink).show();
    tabLink.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Single DOMContentLoaded — small delay so Bootstrap finishes init first
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(activateTabFromHash, 50);
});

// Also handle hash changes when already on products.html (no page reload)
window.addEventListener('hashchange', activateTabFromHash);