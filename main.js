window.addEventListener("scroll",()  => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


const faq =document.querySelectorAll('.faq');

faq.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
         
        const icon=faq.querySelector('.faq-icon');
        if(icon.className === 'uil uil-plus'){
            icon.className ="uil uil-minus"
        }
    })
})


    const menu=document.querySelector(".nav__menu");
    const menubtn=document.querySelector("#open-menu-btn");
    const closebtn=document.querySelector("#close-menu-btn");

    menubtn.addEventListener('click' , ()=>{
        menu.style.display ="flex";
        closebtn.style.display ="inline-block";
        menubtn.style.display ="none";
    }
    )

    const closeNav = () => {
        menu.style.display = "none"
        closebtn.style.display = "none"
        menubtn.style.display = "inline-block"
    }

    closebtn.addEventListener('click', closeNav)


