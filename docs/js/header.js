function header() {
    let navContainer = document.createElement('header')

    navContainer.innerHTML = `
    
    <nav>
        <ul>
            <span id="website-name"><a href="index.html">GH</a></span>
        </ul>
    </nav>
    `
    
    let body = document.querySelector('body')
    body.insertBefore(navContainer, body.firstChild)
}

header();