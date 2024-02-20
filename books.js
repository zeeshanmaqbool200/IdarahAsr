const search = document.getElementById('search');
const searchTextOutput = document.getElementById('search-text-output');
const popularBook = document.getElementById('popular');
const authorHero = document.getElementById('author');
const detailsHero = document.getElementById('details-hero');
const boxes = document.querySelectorAll('.image');
const cartContainer = document.getElementById('container');
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
boxes.forEach(box=>{
  box.addEventListener('click', ()=>{
    let boxImg = box.querySelector("img");
    let boxHead = box.querySelector("#text h3");
    let boxText = box.querySelector("#text p");
    let cartHeader = cartContainer.querySelector('#header');
    let cartDescription = cartContainer.querySelector('#description');
    let cartImage = cartContainer.querySelector('#left-image');
    cartHeader.innerText = boxHead.innerText;
    cartImage.innerHTML = boxImg.outerHTML;
    cartDescription.innerText = boxText.innerText;
    cartContainer.style.display = "grid";
    document.body.style.overflow = "hidden";
    
  })
})
function hideCart() {
  cartContainer.style.display = "none";
 document.body.style.overflow = "auto";
    
}
// Hero Random
window.addEventListener('DOMContentLoaded', randomBookFunc)

function randomBookFunc() {
  let randomBook = Math.floor(Math.random() * boxes.length);
  console.log(boxes[randomBook])
  popularBook.innerHTML = boxes[randomBook].outerHTML;

}

//Search Start 

let searchTimeout;

function searchQuery() {
  // Clear the previous timeout
  clearTimeout(searchTimeout);

  // Set a new timeout for 1000 milliseconds (1 second)
  searchTimeout = setTimeout(function () {
    searchTerm = search.value.toUpperCase();

    boxes.forEach(title => {
      text = title.textContent.toUpperCase();

      if (text.includes(searchTerm)) {
        title.style.display = "flex";
        searchTextOutput.innerText = ` Results for " ${search.value}"`
      } else {
        title.style.display = "none";
    
      }
    });
  }, 1000);
}

// Assuming you have a button with the ID 'searchButton'
const searchButton = document.getElementById('searchButton');

// Add a click event listener to the button
searchButton.addEventListener('click', searchQuery);
