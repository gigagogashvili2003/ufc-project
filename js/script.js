const slide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.index-ul');
    const navLinks = document.querySelectorAll('.index-ul li');
    // toggle nav
    burger.addEventListener('click', () => {
       nav.classList.toggle ('index-nav-active')
            // animation links
        navLinks.forEach((link,index) => { 
        // Toggle nav   
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.4}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
}

slide();