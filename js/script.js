var coll = document.getElementsByClassName("button-info-title");
var i;


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var parentElement =  this.parentNode;
        var content = this.nextElementSibling;
        if (content.style.display === "flex") {
            content.style.display = "none";
            parentElement.style.padding = "5.0907px 0 5.0907px 0"
        } else {
            content.style.display = "flex";
            parentElement.style.padding = "22.0907px 0 22.0907px 0"
        }
    });
};

// alert('js/script.js is connected!');

