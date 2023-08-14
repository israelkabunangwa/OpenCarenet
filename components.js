export const navBar=()=>{
    return `  <div class="navBarContainer">
    <div class="menu">
        <span class="logo">
                <img src="IMG/oche.png" alt="">
        </span>
        <div class="menuList">
            <ul >
                <li><a href="index.html">Accueil</a></li>
                <li><a href="about.html">A propos</a></li>
                <li><a href="documentation.html" target="_blank">Documentation</a></li>
            </ul>
        </div>  
    </div>
    <div class="language_bars">
        <div class="language_bars_Container">
            <div class="language">
                <div class="languageIcon">
                    <i class="fa-solid fa-globe" id="globe"></i>
                </div>
                <div class="changeLanguage">
                    <div class="changeLanguageContainer">
                        <span class="indicator">
                             <i class="fa-solid fa-caret-up"></i>
                        </span>
                        <span class="langue">FRA</span>
                        <span class="langue">ENG</span>
                    </div>
                </div>
            </div>
            <div class="bars">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>      
    </div>
</div>`
}
export const donexa=()=>{
    return`<div class="donexaContainer">
    <p class="donexaPowered">powered by :</p>
    <a href="https://donexa.org/"  target="_blank"><img src="IMG/donexa_logo.png" alt=""></a>
</div> `
}