let products = document.getElementById("products");

function getAllProducts() {
  fetch("https://dummyjson.com/products?limit=10")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products);
    
      for(let product of data.products) {
          let card = document.createElement("div");
          card.classList.add("card");
          card.style.width = "18rem";
          let pImg = document.createElement("img");
          pImg.classList.add("card-img-top");
          pImg.style.width = "288px";
          pImg.style.height = "150px";
          pImg.style.objectFit = "cover";
          pImg.src = product.thumbnail;
    
          let cBody = document.createElement("div");
          cBody.classList.add("card-body");
          let cTitle = document.createElement("h5");
          cTitle.classList.add("card-title");
          cTitle.style.textAlign = "center";
          cTitle.textContent = product.title;
    
          let category = document.createElement("p");
          category.classList.add("card-text", "fs-h6", "text-muted");
          category.style.textAlign = "center";
          category.textContent = product.category;
    
          let cText = document.createElement("p");
          cText.classList.add("card-text");
          cText.textContent = product.description;
    
          let btn = document.createElement("a");
          btn.classList.add("btn", "btn-outline-primary", "btn-sm");
          btn.href = "#";
          btn.textContent = "Add to cart";
    
          let btnStar = document.createElement("div");
          btnStar.classList.add("text-end");
          btnStar.innerHTML = getStars(product.rating);
          btnStar.style.color = "gold";
    
          let footer = document.createElement("div");
          footer.style.display = "flex";
          footer.style.justifyContent = "space-between";
          footer.style.alignItems = "center";
          footer.classList.add("card-footer", "text-muted");
          let footerText = document.createElement("span");
          footerText.textContent = "Price: $" + product.price;
          let discount = document.createElement("span");
          discount.textContent =
            "Disc: " + product.discountPercentage + "%";
          footer.appendChild(footerText);
          footer.appendChild(discount);
    
          card.appendChild(pImg);
          cBody.appendChild(cTitle);
          cBody.appendChild(category);
          cBody.appendChild(cText);
          cBody.appendChild(btnStar);
          cBody.appendChild(btn);
          card.appendChild(cBody);
          card.appendChild(footer);
          products.appendChild(card);

      }

    });
}

function getStars(data) {
    let stars = "";
    for (let i = 0; i < Math.floor(data); i++) {
        stars += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>`;
    }
    if (data % 2 > 5) {
        stars += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
      </svg>`;
    }
    return stars;
}

getAllProducts();
