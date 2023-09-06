const navbarToggler = document.querySelector(".navbar-toggler");
const navbarLinks = document.querySelector(".navbar-links");

navbarToggler.addEventListener("click", () => {
    navbarLinks.classList.toggle("show");
});


const textElement = document.getElementById('text');
        const texts = ["Data Engineer", "Data Analyst", "B.I."];
        let currentIndex = 0;

        function changeTextAndAnimate() {
            const text = texts[currentIndex];
            anime({
                targets: textElement,
                opacity: 0,
                rotate: '360deg',
                duration: 1000,
                easing: 'easeInOutQuad',
                complete: function() {
                    textElement.textContent = text;
                    anime({
                        targets: textElement,
                        opacity: 1,
                        rotate: '0deg',
                        duration: 1000,
                        easing: 'easeInOutQuad'
                    });
                }
            });
            currentIndex = (currentIndex + 1) % texts.length;
        }

        setInterval(changeTextAndAnimate, 3000);