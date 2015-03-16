    function password() {
        return [0,1,2,3,4,5,6,7,8,9].sort(function(){
            return Math.random() > .5;
        }).slice(7);
    }
