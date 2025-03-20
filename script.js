    let currentIndex = 0;

function moveSlide(index) {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 1; // Количество видимых карточек

    // Ограничение индекса
    if (index < 0) {
        currentIndex = 0;
    } else if (index > totalCards - visibleCards) {
        currentIndex = totalCards - visibleCards;
    } else {
        currentIndex = index;
    }

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;

    // Обновление активной точки
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function toggleButton(activeId, inactiveId) {
    const activeBtn = document.getElementById(activeId);
    const inactiveBtn = document.getElementById(inactiveId);

    activeBtn.classList.add("active");

    inactiveBtn.classList.remove("active");
}


// Инициализация точек
updateDots();