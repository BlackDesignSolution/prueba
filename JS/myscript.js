var nav=document.querySelector('nav');
    window.addEventListener('scroll', function(){
       if(window.pageYOffset > 100){
        nav.classList.add('bg-danger', 'shadow');
       }else{
        nav.classList.remove('bg-danger', 'shadow')
       }
    })

 /*----------------scroll-------------------------*/ 

 ScrollReveal({
   reset: true,
   distance:'80px',
   duration: 1000,
   delay: 400
  });

  ScrollReveal().reveal('.texto, h2, h3, .container, .estudios, .btn, p', { origin:'top'});
  ScrollReveal().reveal('.imagen, .galeria', { origin: 'bottom' });
  ScrollReveal().reveal('h1, .imagen2, .card', { origin: 'left' });

/*----------------Multiple text-------------------------*/ 

 
 const typed = new Typed('.multiple-text',{
   strings:['CDMX', ' Acapulco', 'Puebla', 'Monterrey'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
 });

/*----------------Clientes-------------------------*/  

const myCarousel = document.getElementById('myCarousel')
  myCarousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = this.querySelector(".active");
    document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
    document.querySelector(".testi-img .circle").style.backgroundColor = activeItem.getAttribute("data-color");
  })