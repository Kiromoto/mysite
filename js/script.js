let coll = document.getElementsByClassName("button-info-title");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let parentElement =  this.parentNode;
        let content = this.nextElementSibling;
        if (content.style.display === "flex") {
            content.style.display = "none";
            parentElement.style.padding = "5px 0 5px 0"
        } else {
            content.style.display = "flex";
            parentElement.style.padding = "22px 0 22px 0"
        }
    });
};


