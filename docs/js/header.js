function header() {
    let navContainer = document.createElement('header')

    navContainer.innerHTML = `
    
    <nav id="navigation">
        <a href="index.html" id="website-name">GH</a>
        <?xml version="1.0" encoding="UTF-8"?>
        <button type="button" id="menu-nav-button">
            <svg class="menu-bar-icon" width="2.5rem" height="2.5rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#00000">
                <path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
    </nav>
    `
    
    let body = document.querySelector('body')
    body.insertBefore(navContainer, body.firstChild)
}

header();