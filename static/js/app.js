document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector("#fas-bars");
    const closeIcon = document.querySelector('#closeIcon');
    const navMenu = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');

    menuIcon.addEventListener('click', () => {
        openMenu();
    });

    closeIcon.addEventListener('click', () => {
        closeMenu();
    });

    overlay.addEventListener('click', () => {
        closeMenu();
    });

    function openMenu() {
        navMenu.style.right = '0px';
        overlay.style.display = 'block';
    }

    function closeMenu() {
        navMenu.style.right = '-300px';
        overlay.style.display = 'none';
    }

    // Toggle menu functionality
    function toggleMenu() {
        if (navMenu.style.right === '-300px') {
            openMenu();
        } else {
            closeMenu();
        }
    }

    menuIcon.addEventListener('click', () => {
        toggleMenu();
    });

    closeIcon.addEventListener('click', () => {
        toggleMenu();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
})

const handleDisplay = async () => {
     const data = {} || []
    const output = document.querySelector('.product-grid')
    output.innerHTML = ''
    try {
        products.forEach((item) => {
            console.table(item)
            const product_item = document.createElement('div')
            product_item.classList.add('product-item')
            product_item.innerHTML = `
               <div><img src="${item.img}" /></div>
               <div class="product-info">
                   <h3>${ item.title }</h3>
                   <p>Price: ${ item.price }</p>
               </div>
            `;
            output.appendChild(product_item)
        })
    } catch (error) {
        console.error(error)
    }
}
handleDisplay()


