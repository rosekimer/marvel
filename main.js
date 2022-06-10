window.onload = function(){
    window.addEventListener("scrollY",(e)=>{
    console.log(window.scrollY);
    });

    lax.init();
    lax.addDriver('scrollY', function(){
        return window.scrollY; 
    });

    lax.addElements('.logo',{
        scrollY:{
            scale:[
                [0,80],
                [1,3]
            ],
        opacity:[
            [0,70],
            [1,0]
        ],
        translateY:[
            [0,80],
            [0,100]
        ],
        },
    });


    lax.addElements('.ultron',{
        scrollY:{
        opacity:[
            [0,80],
            [0,1]
        ],
        translateY:[
            [0,400],
            [0,80]
        ],

        },
    });

    lax.addElements('.loki',{
        scrollY:{
        opacity:[
            [30,100],
            [0,1]
        ],
        translateY:[
            [0,400],
            [0,-80]
        ],

        },
    });

    lax.addElements('.thanos',{
        scrollY:{
        opacity:[
            [50,120],
            [0,1]
        ],
        translateY:[
            [0,400],
            [0,80]
        ],

        },
    });

    lax.addElements('.scroll-tip',{
        scrollY:{
        opacity:[
            [0,700],
            [1,0]
        ],
        translateY:[
            [0,800],
            [-250,0]
        ],

        "letter-spacing":[
            [0,600],
            [0,150],{
                cssUnit:"px",
            },
        ],

        },
    });


    lax.addElements('.ironman-title',{
        scrollY:{
        filter:[
            [600,700,800,900,1000],
            [0,50,0,50,50],
            {
                cssFn: function(value){
                    return `drop-shadow(0 0 ${value}px yellow)`;
                },
            },
        ],
       },
    });

};