
//  1 part

const filterButtons = document.querySelectorAll(".filter-btn");

const storeItems = document.querySelectorAll(".store-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const dataAttr = e.target.dataset.filter;
    console.log("btn-data :", dataAttr);

    storeItems.forEach((card) => {
      if (dataAttr === "all") {
        card.style.display = "block";
      } else {
        if (card.classList.contains(dataAttr)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});

// 2 part

const inputSearcher = document.getElementById("search-item");

function filterItems(e) {
  console.log(e);

  const text = e.target.value.toLowerCase();
  console.log(text);

  storeItems.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

inputSearcher.addEventListener("keyup", filterItems);
