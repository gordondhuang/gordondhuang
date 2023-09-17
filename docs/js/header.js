function header() {
    let navContainer = document.createElement('header')

    navContainer.innerHTML = `
    
    <nav>
        <a href="index.html" id="website-name">GH</a>
    </nav>
    `
    
    let body = document.querySelector('body')
    body.insertBefore(navContainer, body.firstChild)
}

header();