export default function drawerAltControl(container, headContainer, moveBtn) {
    let startY = 0;
    let isDragging = false;

    container.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const currentY = e.touches[0].clientY;
        const diffY = startY - currentY;

        if (diffY > 50) {
            container.classList.add('expanded');
            moveBtn();
            isDragging = false;
        }
        if (diffY < -50) {
            container.classList.remove('expanded');
            moveBtn();
            isDragging = false;
        }
    });

    container.addEventListener('touchend', () => {
        isDragging = false;
    });

    headContainer.addEventListener('click', () => {
        container.classList.toggle('expanded');
        moveBtn();
    });
}