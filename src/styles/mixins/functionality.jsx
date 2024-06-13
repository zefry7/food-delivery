export function moveToSection(e) {
    e.stopPropagation()
    const target = e.currentTarget
    const el = document?.getElementById(target.getAttribute("data-section"))

    window.scrollTo({
        top: el?.offsetTop - 120,
        behavior: "smooth"
    })
}

export function sectionInFocus(classLink, nameAttrSection, classInFocus) {
    const listLink = document.getElementsByClassName(classLink)

    for (let link of listLink) {
        window.addEventListener("scroll", () => {
            const el = document.getElementById(link.getAttribute(nameAttrSection))

            if (el) {
                if (el.offsetTop - window.scrollY < window.innerHeight / 2 && window.scrollY < el.offsetTop + el.offsetHeight / 2) {
                    link.classList.add(classInFocus)
                }
                else if (link.getAttribute(nameAttrSection) == "footer" && window.scrollY > document.body.offsetHeight - window.innerHeight - 120) {
                    link.classList.add(classInFocus)
                }
                else {
                    link.classList.remove(classInFocus)
                }
            }
        })
    }
}

export function parallaxElement(classElement, wrapperClass) {
    const root = document.getElementsByClassName(wrapperClass)[0]
    const decorList = document.getElementsByClassName(classElement)

    root.addEventListener("mousemove", (e) => {
        const sizeWindow = window.innerWidth

        if (sizeWindow > 768) {
            const parallaxLeftOffset = root.getBoundingClientRect().left;
            const parallaxTopOffset = root.getBoundingClientRect().top;
            const coordX = e.clientX - parallaxLeftOffset - 0.5 * root.offsetWidth;
            const coordY = e.clientY - parallaxTopOffset - 0.5 * root.offsetHeight;

            for (let decor of decorList) {
                decor.setAttribute('style', `position: absolute; left: ${coordX.toFixed(2) * decor.getAttribute("data-speed")}px; top: ${coordY.toFixed(2) * decor.getAttribute("data-speed")}px;`)
            }
        }
    })

}