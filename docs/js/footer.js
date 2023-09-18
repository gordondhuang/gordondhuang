function footer(){
    let footerContainer = document.createElement('footer')

    footerContainer.innerHTML = `

    <nav id="footer-sections">
        <div id="social-media-section">
            <ul id="social-media-list">
            <li class="footer-heading">Follow me on social media:</li>
            <li class="social-media"><a href="https://www.linkedin.com/in/gordondhuang/">LinkedIn</a></li>
            <li class="social-media"><a href="https://www.instagram.com/gordon.d.huang/">Instagram</a></li>
            <li class="social-media"><a href="https://github.com/GordonDHuang">GitHub</a></li>
            </ul>
        </div>
        <div class="contact-section">
            <span class="footer-heading">Need to follow up through email?:</span>
            <button id="contact-me-button" onclick="location.href='./contact.html'">Contact me</button>
        </div>
    </nav>
    <div>
        <span id="copyright-information"></span>
    </div>
    `

    let body = document.querySelector('body')
    body.appendChild(footerContainer)
}

footer();