window.addEventListener("load", function(){
    
    var btn = document.querySelector("input");
    
    btn.addEventListener("click", function(){
            console.log("hello");
            var p = document.querySelector("p");
            p.innerText = "clicked!";
    });
});