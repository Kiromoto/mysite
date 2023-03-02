var coll = document.getElementsByClassName("button-info-title");
var i;


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var parentElement =  this.parentNode;
        var content = this.nextElementSibling;
        if (content.style.display === "flex") {
            content.style.display = "none";
            parentElement.style.padding = "5px 0 5px 0"
        } else {
            content.style.display = "flex";
            parentElement.style.padding = "22px 0 22px 0"
        }
    });
};

// alert('js/script.js is connected!');

