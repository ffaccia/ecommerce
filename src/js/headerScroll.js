

const func = function(){
    //the shrinkHeader variable is where you tell the scroll effect to start.
    var shrinkHeader = 70;
    function getCurrentScroll2() {
      return window.pageYOffset || document.documentElement.scrollTop;
      }
    document.addEventListener("scroll", () => {
       var scroll = getCurrentScroll2();
       let announ = document.querySelector('.announcement')
       if ( scroll >= shrinkHeader ) {
              document.querySelector('.announcement').classList.add('smaller');
           }
           else {
            document.querySelector('.announcement').classList.remove('smaller');
           }
     });
    
    console.log("function calle3d")
   };

func()   
