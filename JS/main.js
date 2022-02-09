
    //Select services Selector

    let ourservices = document.querySelector(".services");

    window.onscroll = () => {

        //services Offset Top
    let ourservicesOffsetTop = ourservices.offsetTop;
        
        //Outer Height
    let ourservicesOuterHeight = ourservices.offsetHeight;
    
        //Window Height
    let windowHeight = this.innerHeight;

        //windowScrollTop
    let windowScrollTop = this.pageYOffset;
        
    if (windowScrollTop > ((ourservicesOffsetTop + ourservicesOuterHeight) - windowHeight)) {
        
        let allservices = document.querySelectorAll(".service-box .service-progress span");

        allservices.forEach(service => {

            service.style.width = service.dataset.progress;

        });
    }
};