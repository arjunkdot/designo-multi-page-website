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
 * Loads header & footer
 */
function loadHeaderAndFooter(){
    let headerEl = document.getElementById('header');
    let footerEl = document.getElementById('footer');

    if (headerEl) {
        headerEl.innerHTML = loadPath('/common/header.html');
    }
    if (footerEl) {
        footerEl.innerHTML = loadPath('/common/footer.html');
    }
}
// Call the function so that the header and footer are loaded.
loadHeaderAndFooter();