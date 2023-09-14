function header() {
    let navContainer = document.createElement('header')

    navContainer.innerHTML = `
    
    <nav class="header-text-section">
        <ul>
            <li class="header_text"><a class="hover-underline" href="index.html">Home</a></li>
            <li class="header_text"><a class="hover-underline" href="projects.html">Projects</a></li>
            <li class="header_text"><a class="hover-underline" href="contact.html">Contact</li></a>
        </ul>
    </nav>
    `
    
    let body = document.querySelector('body')
    body.insertBefore(navContainer, body.firstChild)
}

header();