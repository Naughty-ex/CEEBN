$("#myCarousel").carousel({
  interval: false
});

$(document).ready(function(){
  $("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".price-box__wrap").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

document.getElementById('searchInput').addEventListener('keyup', function(event) {
    var searchQuery = event.target.value.toLowerCase();
    var items = document.querySelectorAll('.row.row--center.row--margin .price-box__title');

    items.forEach(function(item) {
        var itemText = item.textContent.toLowerCase();
        var box = item.closest('.col-md-4');
        if (itemText.includes(searchQuery)) {
            box.style.display = '';
        } else {
            box.style.display = 'none';
        }
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               entry.target.classList.add('animate');
//           } else {
//               entry.target.classList.remove('animate');
//           }
//       });
//   });

//   const elem = document.querySelector('.row__title');
//   observer.observe(elem);
// });


