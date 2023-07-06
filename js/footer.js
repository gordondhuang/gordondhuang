function footer(){
    let footerContainer = document.body.createElement('footer')

    footerContainer.innerHTML = `
    <div class="icon-section">
        <ul>
            <li class="iconList"><a href="https://www.instagram.com/gordon.d.huang/"><img class="icons"
                        src="../images/instagram.png"></a></li>
            <li class="iconList"><a href="https://www.linkedin.com/in/gordon-huang-802585190/"><img class="icons"
                        src="../images/linkedin.png"></a></li>
        </ul>
    </div>
    `
}

footer();