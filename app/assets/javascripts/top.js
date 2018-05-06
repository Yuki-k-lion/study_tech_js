window.addEventListener("load", function(){
    
    var btn = document.querySelector("input");
    
    btn.addEventListener("click", function(){
            console.log("hello");
            var p = document.querySelector("p");
            p.innerText = "clicked!";
    });
});

$(window).on("load",function() {
        $("li").on("click",function() {
        $("li.selected").removeClass("selected");
        $(this).addClass("selected");
        $(".contents div").hide();
        $("." + this.id).show();
    });
})

    
