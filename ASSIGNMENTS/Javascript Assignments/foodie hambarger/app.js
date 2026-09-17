let ul = document.querySelector("ul")
let li = document.querySelectorAll("li")
let header = document.querySelector("header")



function checkWidth() {

    if (window.innerWidth <= 390) {

        ul.style.display = "none"

     

            let button = document.createElement("button")
            button.innerText = "men menu"

            let div = document.createElement("div")

            header.append(div, button)

            button.addEventListener("click", () => {

                if (div.children.length > 0) return

                li.forEach(element => {
                    let p = document.createElement("p")
                    p.innerText = element.innerText
                    div.appendChild(p)
                })
            })

    }
}

checkWidth()
window.addEventListener("resize", checkWidth)