function countdown(num){
        let nums = setInterval(function(){
            num--;
            if(num<=0){
                clearInterval(nums);
                console.log("DONE!");
            } else
            {
                console.log(num);
            }
        },1000)

    }

    function randomGame(){
        let ranNum;
        let counter = 0;
        let timer = setInterval(function(){
            ranNum = Math.random();
            counter++;
            if(ranNum>.75){
                clearInterval(timer);
                console.log("Tries:" + counter);
            }
            },1000)
    }
        

    
