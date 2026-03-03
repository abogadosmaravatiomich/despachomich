const imagesPerPage = 12;

function setupPagination(galleryId, paginationId) {

  const gallery = document.getElementById(galleryId);
  const pagination = document.getElementById(paginationId);
  const images = gallery.querySelectorAll(".gallery-img");

  let currentPage = 1;

  function showPage(page) {
    currentPage = page;

    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    images.forEach((img, index) => {
      img.style.display = (index >= start && index < end) ? "block" : "none";
    });

    updatePagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updatePagination() {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(images.length / imagesPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className = (i === currentPage) ? "active-page" : "";
      btn.onclick = () => showPage(i);
      pagination.appendChild(btn);
    }
  }

  showPage(1);
}