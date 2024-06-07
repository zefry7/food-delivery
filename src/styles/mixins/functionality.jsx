export function moveToSection(e) {
    e.stopPropagation()
    let target = e.currentTarget
    let el = document?.getElementById(target.getAttribute("data-section"))
    window.scrollTo({
        top: el?.offsetTop - 120,
        behavior: "smooth"
    })
}

export function sectionInFocus() {
    let listLink = document.getElementsByClassName("header__link")
    for (let link of listLink) {
        window.addEventListener("scroll", () => {
            let el = document.getElementById(link.getAttribute("data-section"))
            if (el.offsetTop - window.scrollY < window.innerHeight/2 && window.scrollY < el.offsetTop + el.offsetHeight/2) {
                link.classList.add("header__link_show")
            } 
            else if (link.getAttribute("data-section") == "footer" && window.scrollY > document.body.offsetHeight - window.innerHeight - 120) {
                link.classList.add("header__link_show")
            }
            else {
                link.classList.remove("header__link_show")
            }
        })
    }

}