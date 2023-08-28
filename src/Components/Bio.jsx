import Button from "../States/Button";

function Bio() {
    return (
        <body>
            <header class="flex-space-between">
                <div>
                    <img src="images/Combined Shape.svg" alt="Portfolio Logo in Black">
                </div>
                <nav class="nav-big flex-space-between clr-neutral-200 letter-spc">
                    <h3>
                        HOME
                    </h3>
                    <h3>
                        PORTFOLIO
                    </h3>
                    <h3>
                        CONTACT ME
                    </h3>
                </nav>

                <div class="nav-small">
                    <div>
                        <img src="images/hamburger.svg" alt="hamburger icon">
                    </div>
                </div>
            </header>

            <main>
                <section class="banner">
                    <img src="images/bannerSmallScreen.svg" alt="banner image for the small screen">
                </section>
                
                <section class="bio">
                    <div class="ff-ibarra fw-700 fs-h1">
                        Hey, I’m Emmanuel Ibenwankwo and I love building beautiful websites
                    </div>
                    
                    <div class="bio-button">
                        <div class="bg-clr-neutral-300"><img src="images/Group 3.svg" alt="Arrow Pointer Button" class="arrow-down"></div>
                        <button className="bg-clr-neutral-200 clr-neutral-100" buttonName = "ABOUT ME" />
                    </div>
                </section>

                <article>
                    <div class="photo">
                        <img src="images/Bitmap.png" alt="Profile Photo">
                    </div>

                    <div class="photo-small-screen">
                        <img src="images/Bitmap.png" alt="Profile Photo">
                    </div>

                    <div class="about">
                        <h1 class="ff-ibarra fs-h2 fw-700">
                            About Me
                        </h1>

                        <p class="fs-article clr-neutral-200">
                            I’m a junior front-end developer looking for a new role in an exciting company. 
                            I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. 
                            When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. 
                            I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. 
                            When I’m not coding, you’ll find me outdoors. 
                            I love being out in nature whether that’s going for a walk, run or cycling. 
                            I’d love you to check out my work.
                        </p>

                        <button buttonName = "GO TO PORTFOLIO" />
                    </div>
                </article>

                <section class="contact flex-space-between">
                    <h1 class="ff-ibarra fs-h2 fw-700">
                        Interested in doing a project together?
                    </h1>

                    <div>
                        <img src="images/Rectangle Copy 2.svg" alt="straight Line">
                    </div>

                    <button buttonName = "CONTACT ME" />
                </section>
            </main>

            <footer>
                <div class="footer-div flex-space-between">
                    <div class="nav-logo flex-space-between clr-neutral-100 gap-2-rem">
                        <div>
                            <img src="images/Combined Shape 2.svg" alt="Portfolio Logo in White">
                        </div>
                        <div class="footer-nav flex-space-between gap-2-rem letter-spc">
                            <h3>
                                HOME
                            </h3>
                            <h3>
                                PORTFOLIO
                            </h3>
                            <h3>
                                CONTACT ME
                            </h3>
                        </div>
                    </div>
                    <div class="socials flex-space-between gap-1-rem">
                        <div><img src="images/Path (1).svg" alt="GitHub Logo"></div>
                        <div><img src="images/Path.svg" alt="Twitter Logo"></div>
                        <div><img src="images/Shape.svg" alt="Linkedin Logo"></div>
                    </div>
                </div>
            </footer>
        </body>
    );
}

