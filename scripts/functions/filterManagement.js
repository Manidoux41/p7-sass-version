export function filterManagement() {
    const arrowDown = document.querySelectorAll('.arrow-down');
    arrowDown.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const parentTitle = arrow.parentElement;
            const parentCategory = parentTitle.parentElement;
            parentCategory.classList.toggle('active');

            if (parentCategory.classList.contains('active')) {
                arrow.style.transform = 'rotate(calc(90deg - 180deg))';
                let newDiv = document.createElement('div');
                newDiv.classList.add('newDiv');
                newDiv.innerHTML = `
                    <input type="text" class="search-category" aria-label="Search category" ">
                    <ul>
                     <li>Pomme de terre</li>
                     <li>Pomme de terre</li>
                     <li>Pomme de terre</li>
                    </ul>`;
                parentCategory.appendChild(newDiv);
            } else {
                arrow.style.transform = 'rotate(calc(90deg - 0deg))';
                let newDiv = parentCategory.querySelector('.newDiv');
                if (newDiv) {
                    parentCategory.removeChild(newDiv);
                }
            }
        }) 
    })
}
