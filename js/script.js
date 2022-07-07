/** Start Up Button */
let upButton = document.querySelector(".up");
window.addEventListener("scroll", function() {
    this.scrollY >= 600? upButton.classList.add("show") : upButton.classList.remove("show") ;
});
upButton.onclick = () => window.scrollTo({ top:0, behavior:"smooth", });

/** End Up Button */

/** Start Toggle Header */
let toggle = document.querySelector("header nav .toggle");

toggle.onclick = function(){
    toggle.classList.toggle("open");
}
/** End Toggle Header */

/* Start Slider */
let landing = document.querySelector(".landing");
let bull_landing = document.querySelectorAll(".landing .bullets li");
let arrowLeft_Landing = document.querySelector(".landing i.left"),
    arrowRight_Landing = document.querySelector(".landing i.right");

let backgroudArray = ['0','1','2','3','4','5'];

function backgroundRandom() {
    setInterval(() => {
        let ImgRand = Math.floor(Math.random() * backgroudArray.length );
        landing.style.backgroundImage = 'url("../images/slider/landing-0'+ backgroudArray[ImgRand] +'.jpg")';
        bull_landing.forEach((ele) => {
            ele.classList.remove('active');
        });
        document.querySelector('.landing .bullets li[data-land="'+ImgRand+'"]').classList.add('active');
        

    }, 10000);
}
backgroundRandom();

arrowRight_Landing.addEventListener("click", function (){
    landing.style.backgroundImage = 'url("../images/slider/landing-0'+ backgroudArray[5] +'.jpg")';
});
arrowLeft_Landing.addEventListener("click", function (){
    landing.style.backgroundImage = 'url("../images/slider/landing-0'+ backgroudArray[0] +'.jpg")';
});


bull_landing.forEach((ele) => {
    ele.addEventListener("click",function (e) {
        bull_landing.forEach((ele) => {
            ele.classList.remove('active');
        });
        this.classList.add('active');
        landing.style.backgroundImage = 'url("../images/slider/landing-0'+ ele.dataset.land +'.jpg")';        
    });
});








/* End Slider */


/* Start portfolio */
let shuffle_portfolio = document.querySelectorAll(".shuffle li"),
    box_portfolio = document.querySelectorAll(".portfolio-content .box");
    
shuffle_portfolio.forEach((ele) => {
    ele.addEventListener("click",function(e){
        shuffle_portfolio.forEach((ele) => {
            ele.classList.remove("active");
        });
        ele.classList.add("active");
        box_portfolio.forEach((ele) => {
            ele.style.display = 'none';
        });
        document.querySelectorAll(ele.dataset.port).forEach((ele) => {
            ele.style.display = 'block';
        });
    })
});

let img_portfolio = document.querySelectorAll(".portfolio-content .box img");
img_portfolio.forEach((ele) => {

    ele.addEventListener("click", function (e){
    
        let overlay = document.createElement('div');
        overlay.classList.add('popup-overlay');
        document.body.appendChild(overlay);
    
        let img_pop = document.createElement('div');
        img_pop.classList.add('img-pop');
        overlay.appendChild(img_pop);
    
        let img = document.createElement('img');
        img.src = ele.src;
        img_pop.appendChild(img);
        if(ele.alt !== null)
        {
            let pop_heading = document.createElement("h3");
            let pop_headText = document.createTextNode(ele.alt);
            pop_heading.appendChild(pop_headText);
            img_pop.appendChild(pop_heading);
        }
        let close_pop = document.createElement('i');
        close_pop.className = "fas fa-times-circle Popup-close";
        img_pop.appendChild(close_pop);   
    });
});

document.addEventListener("click", function(e){
    if(e.target.className == "fas fa-times-circle Popup-close")
    {
        document.querySelector('.popup-overlay').remove();
    }
});






/* End portfolio */

/*Start testimonials*/
let links_test = document.querySelectorAll(".testimonials .bullets li"),
    box_test = document.querySelectorAll(".testimonials .content-group .content");

links_test.forEach((ele) => {
    ele.addEventListener("click",function(e) {
        links_test.forEach((ele) => {
            ele.classList.remove("active");
        });
        ele.classList.add("active");

        box_test.forEach((ele) => {
            ele.classList.remove("active");
        });
        document.querySelectorAll(ele.dataset.test).forEach((ele) => {
            ele.classList.add("active");
        });

    });
});

/*End testimonials*/



/* Start skills */
let skills_section = document.querySelector(".skills");
window.addEventListener("scroll", function (){
    let skills_offsetTop = skills_section.offsetTop;
    let skills_offsetHeight = skills_section.offsetHeight;
    let window_innerHeight = this.innerHeight;
    let window_pageYOffset = this.pageYOffset;

    if(window_pageYOffset >= (skills_offsetTop + skills_offsetHeight - window_innerHeight ) ) {
        let allskills = document.querySelectorAll(".skills .prog-group .prog span");
        allskills.forEach((ele) => {
            ele.style.width = ele.dataset.progress;
        });
    }
});


/* End skills */


/** Start Footer */
document.querySelector("footer .copyright .year").innerHTML = new Date().getFullYear();
/** End Footer */
