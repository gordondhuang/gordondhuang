function header() {
    let navContainer = document.createElement('header')

    navContainer.innerHTML = `
    
    <nav>
        <ul>
            <strong>GH<strong>
        </ul>
    </nav>
    `
    
    let body = document.querySelector('body')
    body.insertBefore(navContainer, body.firstChild)
}

header();