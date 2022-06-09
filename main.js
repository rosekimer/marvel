window.onload = function{
    window.addEventListener("scroll",(e)=>{
    console.log(window.scrollY);
    });

    lax.init();
    lax.addDriver('scrollY', function(){
        return window.scrollY; 
    });

    lax.addElements('.logo',{
        scrollY:
            scale:[
                [0,200],
                [1,3],
            ],
        opacity:[
            [0,70],
            [1,0],
        ],
        
    });
};