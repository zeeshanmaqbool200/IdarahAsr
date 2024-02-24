const search = document.getElementById('search');
const searchTextOutput = document.getElementById('search-text-output');
const popularBook = document.getElementById('popular');
const authorHero = document.getElementById('author');
const detailsHero = document.getElementById('details-hero');
const cartContainer = document.getElementById('container');
const boxes = document.querySelectorAll('.image');
//Boxes Click
boxes.forEach(box => {
  box.addEventListener('click', () => {
    let boxImg = box.querySelector("img");
    let boxHead = box.querySelector("#text h3");
    let boxText = box.querySelector("#text p");
    let cartHeader = cartContainer.querySelector('#header');
    let cartDescription = cartContainer.querySelector('#description');
    let btnText = document.getElementById('cart-btn');
    let cartImage = cartContainer.querySelector('#left-image');
    cartHeader.innerText = boxHead.innerText;
    cartImage.innerHTML = boxImg.outerHTML;
    cartDescription.innerText = boxText.innerText;
    btnText.innerHTML = `<a href="https://wa.me/+916005156100?text=Salamun Alikum I Want *${cartHeader.innerText}* book of *_${cartDescription.innerText}_* from your website https://idarahwaliulasr.netlify.app/library .Let me know when and how this would be available."><svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" />
        </svg>Order</a>`
    cartContainer.style.display = "grid";
    document.body.style.overflow = "hidden";

  })
});

function hideCart() {
  cartContainer.style.display = "none";
  document.body.style.overflow = "auto";

}

// Hero Random
window.addEventListener('DOMContentLoaded', randomBookFunc)

function randomBookFunc() {
  let randomBook = Math.floor(Math.random() * boxes.length);

  popularBook.innerHTML = boxes[randomBook].outerHTML;

}

//Search Start 

function resetQuery() {
  search.value = "";
  searchQuery();
  searchTextOutput.innerText = "";
}


let searchTimeout;

function searchQuery() {
  // Clear the previous timeout
  clearTimeout(searchTimeout);

  // Set a new timeout for 1000 milliseconds (1 second)
  searchTimeout = setTimeout(function() {
    searchTerm = search.value.toUpperCase();

    boxes.forEach(title => {
      text = title.textContent.toUpperCase();

      if (text.includes(searchTerm)) {
        title.style.display = "flex";
        if (search.value == null || search.value.length == 0) {
          searchTextOutput.innerText = "Enter Any  Query";
        } else {
          searchTextOutput.innerText = ` Results for " ${search.value}"`;

        }
      } else {
        title.style.display = "none";

      }
    });
  }, 500);
}

// Assuming you have a button with the ID 'searchButton'
const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');

// Add a click event listener to the button
resetButton.addEventListener('click', resetQuery);
searchButton.addEventListener('click', searchQuery);
/*
//Nav Start
(function($) {
  $(function() {

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  });
})(jQuery);
//Nav End
*/
