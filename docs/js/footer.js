function footer(){
    let footerContainer = document.createElement('footer')

    footerContainer.innerHTML = `

    <nav id="footer-sections">
        <section id="social-media-section">
            <ul class="footer-list">
            <li class="footer-heading">Follow me on social media:</li>
            <li class="footer-list-item"><a href="https://www.linkedin.com/in/gordondhuang/">LinkedIn</a></li>
            <li class="footer-list-item"><a href="https://www.instagram.com/gordon.d.huang/">Instagram</a></li>
            <li class="footer-list-item"><a href="https://github.com/GordonDHuang">GitHub</a></li>
            </ul>
        </section>

        <section id="navigation-links-section">
            <ul class="footer-list"> 
                <li class="footer-heading">Navigation Links:</li>
                <li class="footer-list-item"><a href="./index.html">Home</a></li>
                <li class="footer-list-item"><a href="./about.html">About</a></li>
                <li class="footer-list-item"><a href="./contact.html">Contact</a></li>
                <li class="footer-list-item"><a href="./projects.html">Projects</a></li>
            </ul>
        </section>

        <section class="contact-section">
            <span class="footer-heading">Need to follow up through email?:</span>
            <button id="contact-me-button" onclick="location.href='./contact.html'">Contact me</button>
        </section>
    </nav>
    <div>
        <span id="copyright-information"></span>
    </div>
    `

    let body = document.querySelector('body')
    body.appendChild(footerContainer)
}

footer();