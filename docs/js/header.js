function header() {
    let navContainer = document.createElement('header')

    navContainer.innerHTML = `

    <nav id="navigation">
        <a href="index.html" id="website-name">GH</a>
        <button type="button" aria-label="menu-button" id="menu-nav-button">
            <svg class="menu-bar-icon" width="2.5rem" height="2.5rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#00000">
                <path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
    </nav>
    <section id="sideNav">
        <ul id="sideNav-list">
            <li class="sideNav-list-item"><a href="./index.html">Home</a></li>
            <li class="sideNav-list-item"><a href="./about.html">About</a></li>
            <li class="sideNav-list-item"><a href="./contact.html">Contact</a></li>
            <li class="sideNav-list-item"><a href="./projects.html">Projects</a></li>
        </ul>
    </section>
    `
    let body = document.querySelector('body')
    body.insertBefore(navContainer, body.firstChild)
    document.getElementById("menu-nav-button").addEventListener("click", toggleNavBar);
}

function toggleNavBar(){
    let sideMenu = document.getElementById("sideNav");
    let navBtn = document.getElementById("menu-nav-button");
    let background = document.querySelector('main');
    background.style.opacity = background.style.opacity === "0.2" ? "1" : "0.2"; 
    sideMenu.style.width = sideMenu.style.width === "20vw" ? "0" : "20vw";
}

header();