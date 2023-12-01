// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 40);

    //remove toggle icon and navbar when click links (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

}

function aulaSearch() {
    var filter, ul, li, a, i, txtValue;
    let input = document.getElementById('busca');
    filter= input.value.toUpperCase();
    ul = document.getElementById('buscaAula');
    li = ul.getElementsByTagName('li');
  
    for(i=0; i< li.length; i++){a = li[i].getElementsByTagName('h4')[0];
    txtValue = a.textContent || a.innerText;
      if (txtValue.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
      
    }
  }


//filter
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");


const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name ||  e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }

    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));
