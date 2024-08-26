document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let currentCardIndex = 0;
    const windowHeight = window.innerHeight;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add("visible");
                card.style.transform = "translateY(0)";
            } else if (i < index) {
                card.style.transform = `translateY(-${windowHeight}px)`;
            } else {
                card.style.transform = `translateY(${windowHeight}px)`;
            }
        });
    }

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const headerHeight = document.querySelector('.header').offsetHeight;
        const introHeight = document.querySelector('.intro').offsetHeight;

        // Calcula a posição ajustada levando em consideração a altura do header e da intro
        const adjustedScrollPosition = scrollPosition - (headerHeight + introHeight);

        if (adjustedScrollPosition > windowHeight * currentCardIndex + windowHeight / 2) {
            if (currentCardIndex < cards.length - 1) {
                currentCardIndex++;
                showCard(currentCardIndex);
                window.scrollTo({
                    top: windowHeight * currentCardIndex + headerHeight + introHeight,
                    behavior: "smooth"
                });
            }
        } else if (adjustedScrollPosition < windowHeight * currentCardIndex - windowHeight / 2) {
            if (currentCardIndex > 0) {
                currentCardIndex--;
                showCard(currentCardIndex);
                window.scrollTo({
                    top: windowHeight * currentCardIndex + headerHeight + introHeight,
                    behavior: "smooth"
                });
            }
        }
    });

    // Inicializa mostrando o primeiro card
    showCard(currentCardIndex);
});
