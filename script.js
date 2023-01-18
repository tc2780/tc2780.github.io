const navBar = document.querySelector('.navbar');

window.onscroll = function() {
    if(window.scrollY >= (window.innerHeight - 110)) {
        // navBar.classList.add('navbar-dark');
        navBar.classList.add('navBarDark');
    } else {
        // navBar.classList.remove('navbar-dark');
        navBar.classList.remove('navBarDark');
    }
    //ref: https://alvarotrigo.com/blog/css-animations-scroll/
    let elements = document.getElementsByClassName("fade-section");
    for (let i = 0; i < elements.length; i++) {
        let top = elements[i].getBoundingClientRect().top;
        if (top < (window.innerHeight*0.6)) {
            elements[i].classList.replace('fade-section-out', 'fade-section-in');
            if (elements[i].classList.contains('skills')) {
                let barElements = document.getElementsByClassName("progressBarCol");
                for (let j = 0; j < barElements.length; j++) {
                    let newWidth = "width:" + barElements[j].getAttribute("aria-valuenow") + "%";
                    barElements[j].setAttribute("style", newWidth);
                }
            }
        } else {
            elements[i].classList.replace('fade-section-in', 'fade-section-out');
            if (elements[i].classList.contains('skills')) {
                let barElements = document.getElementsByClassName("progressBarCol");
                for (let j = 0; j < barElements.length; j++) {
                    barElements[j].setAttribute("style", "width: 0");
                }
            }
        }
    }
}