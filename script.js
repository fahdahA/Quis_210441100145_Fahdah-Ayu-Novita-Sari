$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY > 20){
            $('.navigation').addClass("sticky");
        }else{
            $('.navigation').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing", {
        strings: ["Fahdah Ayu Novita Sari"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Fahdah "],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

       

