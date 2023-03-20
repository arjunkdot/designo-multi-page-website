/**
 * Loads the HTML page in the given path.
 * @param {string} path - URL to the target file.
 */
function loadPath(path: string) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", path, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}


/**
 * Hide & Show Mobile Menu
 */
function toggleMenu() {
    let openMenuIcon = document.getElementById('openMenu');
    let closeMenuIcon = document.getElementById('closeMenu');
    let menuItems = document.getElementsByClassName('ds-header__nav-items')[0];
    let body = document.querySelector('body');

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
    let headerEl = document.getElementById('header');
    let ctaEl = document.getElementById('cta');
    let footerEl = document.getElementById('footer');

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