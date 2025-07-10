import Image from "next/image";

export default function Page() {
  return (
    <main>
       <section id="slideshow_container">
            <figure id="name-wrapper">
                <h1 id="name">Gordon Huang</h1>
            </figure>
            <Image className="slideshow_img" width="1000" height="1000" alt="seattle" src="./images/seattle.jpg"/>
            <Image className="slideshow_img" width="1000" height="1000" alt="inside of the space needle" src="./images/seattle2.jpg"/>
            <Image className="slideshow_img" width="1000" height="1000" alt="pike place market" src="./images/seattle3.jpg"/>
        </section>
        <summary id="about-section">
            <p id="about-text-highlight">
                Hello, I'm an aspiring software engineer and 
                undergraduate computer science student at the 
                <a id="uw" href="https://www.washington.edu/">
                    University of Washington
                </a>.
            </p>
            <button id="about-button" onClick={() => "location.href='./about.html'"}>More About me</button>
        </summary>
        <section id="main-display-section">
            <section id="skills-section">
                
            </section>
        </section>
        <summary id="projects-section">
            <p id="projects-text-highlight">
                Check out all the projects that I have worked on that range from web development to virtual reality and more.
            </p>
            <button id="projects-button" onClick={() => "location.href='./projects.html'"}>
                Go to projects
            </button>
        </summary>
    </main>
  );
}
