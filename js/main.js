const image = document.getElementById("image");
const design = document.getElementById("design");
const inputImage = design.querySelector(".input");

image.addEventListener("change", function(){
    const data = this.files[0];
    if (data) {
        const readData = new FileReader();
        inputImage.style.display ="block";

        readData.addEventListener("load", function(){
            inputImage.setAttribute("src", this.result);
           
        });
        
        readData.readAsDataURL(data);


    }

})