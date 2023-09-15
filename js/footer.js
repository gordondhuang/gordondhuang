function footer(){
    let footerContainer = document.createElement('footer')

    footerContainer.innerHTML = `

    <div class="icon-section">
        <ul>
            
        </ul>
    </div>

    `

    let body = document.querySelector('body')
    body.appendChild(footerContainer)
}

footer();