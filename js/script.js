let listElements = document.querySelectorAll('li');
listElements.forEach(element => {
    element.addEventListener('click', function(){
        let clr = this.getAttribute('data-color');
        document.documentElement.style.setProperty('--color', clr);
        listElements.forEach(element=>{
            element.style.border="none";
        })
        this.style.border="3px solid black";
        
    })
});