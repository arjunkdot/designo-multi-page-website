/**
 * Loads the HTML page in the given path.
 * @param {string} path - URL to the target file.
 */
function loadPath(path: string) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", path, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

/**
 * Contact Form Handler
 */
function formHandler() {
    const formEl = document.getElementById('contactForm');

    // Interface for input errors
    interface InputError {
        'target': string,
        'message': string
    }

    // Interface for array of InputError
    interface inputErrors extends Array<InputError> { }

    const errors: inputErrors = [];

    formEl?.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = <HTMLInputElement>document.getElementById('name');
        const emailInput = <HTMLInputElement>document.getElementById('email');
        const phoneInput = <HTMLInputElement>document.getElementById('phone');
        const messageInput = <HTMLInputElement>document.getElementById('message');

        // Simple error validation

        // Clear error array 
        errors.length = 0;

        // Name
        if (nameInput.value == "") {
            errors.push({ "target": "name", "message": "Can't be empty" });
        }

        // Email
        if (emailInput.value == "") {
            errors.push({ "target": "email", "message": "Can't be empty" });
        } else {
            const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!mailRegex.test(emailInput.value.toLowerCase())) {
                errors.push({ "target": "email", "message": "Invalid email" });
            }
        }

        // Phone Input 
        if (phoneInput.value == "") {
            errors.push({ "target": "phone", "message": "Can't be empty" });
        } else {
            const phoneRegex = /^[0-9()-]+$/;
            if (!phoneRegex.test(phoneInput.value.toLowerCase())) {
                errors.push({ "target": "phone", "message": "Invalid phone" });
            }
        }

        // Message
        if (messageInput.value == "") {
            errors.push({ "target": "message", "message": "Can't be empty" });
        }

        // Clear existing error message
        document.querySelectorAll('.ds-input-group__error')?.forEach(function (item) {
            item.remove();
        });

        // Loop through errors  and add erro messages
        errors.forEach(function (error) {
            const inputGroup = document.getElementById(`${error.target}`)?.parentElement;

            const errorMessage = document.createElement('span');
            errorMessage.classList.add('ds-input-group__error');
            errorMessage.innerText = error.message;

            inputGroup?.appendChild(errorMessage);
            
        });
    });
}

/**
 * Hide & Show Mobile Menu
 */
function toggleMenu() {
    const openMenuIcon = document.getElementById('openMenu');
    const closeMenuIcon = document.getElementById('closeMenu');
    const menuItems = document.getElementsByClassName('ds-header__nav-items')[0];
    const body = document.querySelector('body');

    // Open Menu
    if (openMenuIcon && menuItems) {
        openMenuIcon.addEventListener("click", function (e) {
            e.preventDefault();
            menuItems.classList.remove('ds-header__nav-items--resp-hide');
            openMenuIcon?.classList.add('ds-header__nav-icon--hide');
            closeMenuIcon?.classList.remove('ds-header__nav-icon--hide');
            // Disable scroll
            body!.style.overflowY = 'hidden';
        });
    }

    // Close Menu
    if (closeMenuIcon && menuItems) {
        closeMenuIcon.addEventListener("click", function (e) {
            e.preventDefault();
            menuItems.classList.add('ds-header__nav-items--resp-hide');
            closeMenuIcon?.classList.add('ds-header__nav-icon--hide');
            openMenuIcon?.classList.remove('ds-header__nav-icon--hide');
            // Enable scroll
            body!.style.overflowY = 'auto';
        });
    }
}

/**
 * Loads header & footer
 */
function loadHeaderAndFooter() {
    const headerEl = document.getElementById('header');
    const ctaEl = document.getElementById('cta');
    const footerEl = document.getElementById('footer');

    if (headerEl) {
        headerEl.innerHTML = loadPath('/common/header.html');
    }
    if (ctaEl) {
        ctaEl.innerHTML = loadPath('/common/cta.html');
    }
    if (footerEl) {
        footerEl.innerHTML = loadPath('/common/footer.html');
    }
}
// Call the function so that the header and footer are loaded.
loadHeaderAndFooter();
// Call toggle menu function.
toggleMenu();
// Call form handler function.
formHandler();
