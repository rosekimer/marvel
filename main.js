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
                [0,100],
                [.5,3],
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
            [70,120],
            [0,1]
        ],
        translateY:[
            [0,800],
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
            [0,900],
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
            [400,500,600,700,800,900,1000,1100],
            [0,50,0,50,0,50,0,50],
            {
                cssFn: function(value){
                    return `drop-shadow(0 0 ${value}px yellow)`;
                },
            },
        ],
        translateY:[
            [600,1400], 
            [90,"elCenterY"],
        ]

       },
    });

    lax.addElements('.ironman-01',{
        scrollY:{
         translateY:[
            [300,1500],
            [100,-1000],
        ]

       },
    });


    lax.addElements('.ironman-02',{
        scrollY:{
            scale:[
                [1200,2500],
                [0,2],
            ],
         translateX:[
            [1200,1350,1900],
            [0,500,-700],
        ],

        translateY:[
            [1200,1350,1900],
            [-600,-400,-300],
        ],
       },
    });


    lax.addElements('.shield',{
        scrollY:{
        translateX:[
            [1900,2100,2200,2300],
            [-800,"screenWidth-200",0,"screenWidth+200"],
            
        ],
        translateY:[
            [1900,2100,2200,2300],
            [-100,50,200,400],
        ],

       },
    });

    lax.addElements('.capital-title',{
        scrollY:{
        filter:[
            [1900,2000,2100,2200,2300,2400,2500,2600],
            [0,50,0,50,0,50,0,50],
            {
                cssFn: function(value){
                    return `drop-shadow(0 0 ${value}px blue)`;
                },
            },
        ],
        translateY:[
            [1900,2100],
            [-400,"elCenterY-2600"],
        ],

       },
    });
   

    lax.addElements('.cap2',{
        scrollY:{
        translateX:[
                [2400,2800],
                [200,-800],
                
            ],
       translateY:[
            [2400,2800],
            [-400,-400],
        ],
        scale:[
            [2400,2800],
            [1,0.1],
        ],
        
        opacity:[
            [2400,2800],
            [0,3],
        ]

       },
    });

    lax.addElements('.shield02',{
        scrollY:{
        translateX:[
            [2400,2800],
            [260,"screenWidth+1900"],
            
        ],
        translateY:[
            [2400,2800],
            [-1000,-1000],
        ],
        opacity:[
            [2400,2800],
            [0,3],
        ],
        scale:[
            [2400,2800],
            [1,4],
        ],

       },
    });

    lax.addElements('.rayo',{
        scrollY:{
        scaleX:[
            [2800,3000],
            [0,1],
            
        ],
        translateY:[
            [2950,3300,3550],
            [-1150,-1150,0],
        ],
        opacity:[
            [2800,3000, 3050],
            [1,1,0],
        ],
        

       },
    });


    lax.addElements(".thor1 img",{
        scrollY:{
        opacity:[
            [3000,3200],
            [0,1],
        ],
        scale:[
            [3000,3200],
            [2,1],
        ],
         },
    });


    lax.addElements(".thor2 img",{
        scrollY:{
        opacity:[
            [3050,3250],
            [0,1],
        ],
        scale:[
            [3050,3250],
            [2,1],
        ],
         },
    });

    lax.addElements(".thor3 img",{
        scrollY:{
        opacity:[
            [3100,3300],
            [0,1],
        ],
        scale:[
            [3100,3300],
            [2,1],
        ],
         },
    });
    lax.addElements(".thor4 img",{
        scrollY:{
        opacity:[
            [3150,3350],
            [0,1],
        ],
        scale:[
            [3150,3350],
            [2,1],
        ],
         },
    });

    lax.addElements(".thor",{
        scrollY:{
            translateX:[
                [2900,3300],
                [-500,1500],
            ],
            translateY:[
                [2900,3300],
                [-600,-1800],
            ],
         },
    });


    lax.addElements(".thor2a",{
        scrollY:{
            translateX:[
                [2900,3400],
                [505,505],
            ],
        
            translateY:[
                [2900,3400],
                [-2000,-700],
            ],
            opacity:[
                [2900,3000,3200,3399,3400],
                [0,0,1,1,0],
            ],
                      
         },
    });


    lax.addElements(".thor2b",{
        scrollY:{
            translateX:[
                [3400,3400],
                [500,500],
            ],
        
            translateY:[
                [3400,3400],
                [-1050,-1050],
            ],
            opacity:[
                [3400,3400],
                [0,1],
            ],
            // filter:[
            //     [3200,3500],
            //     [100,0],
            //     {
            //         cssFn:(value) =>{
            //             return`blur(${value}px)`;
            //         },
            //     },
            //],
          
         },
    });


    lax.addElements(".avenger-logo",{
        scrollY:{
           
            translateY:[
                [3400,3400],
                [-1000,-1000],
            ],
            opacity:[
                [3800,4000],
                [0,1],
            ],
            scale:[
                [3800,4000],
                [0,1],
            ],
           
                      
         },
    });
   
};

