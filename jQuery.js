$(document).ready(function(){
    $("body").append("<div id='container'></div>")
    var numbox = 16;
    var boxsize = 45;
    var bordersize = 1;
    var length = numbox*boxsize +((numbox)*2)*bordersize;
    $("#container").css({"height":length,
                        "width":length,
                    "border-style": "solid",
                    "border-color":"black",
                    "border-width":bordersize,
                    "margin":"auto"});
    for(var i = 0; i<(numbox*numbox);i++){
        $("#container").append("<div class=box></div>")
    }
    $(".box").css({"height":boxsize,
                        "width":boxsize,
                        "border-style": "solid",
                        "border-color":"black",
                        "border-width": bordersize,
                        "float":"left"});
    $(".box").on("mouseenter",function(){
        //could also use a "highlighted" class in css and use ".addClass()"
        $(this).css({"background-color":"blue",
                    "border-color":"blue"});
    });
});
