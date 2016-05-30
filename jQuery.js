$(document).ready(function(){
    var count = 16;
    var length = 45;
    var edge = 1;
    createGrid(count,length,edge);
    makeButton();
    $(document).on("mouseenter",".box",function(){
        //could also use a "highlighted" class in css and use ".addClass()"
        $(this).css({"background-color":"blue",
                    "border-color":"blue"});
    });
    $("button").on("click",function(){
        $("#container").remove();
        //todo add prompt then figure out how to resize boxes smaller while keeping same amount of pixels
        createGrid(count,length,edge);
    });
});

function createGrid(numbox,boxsize,bordersize){
    $("body").append("<div id='container'></div>")
    var length = numbox*boxsize +((numbox)*2)*bordersize;
    $("#container").css({"height":length,
                        "width":length,
                    "border-style": "solid",
                    "border-color":"black",
                    "border-width":bordersize,
                    "margin":"auto",
                    "position":"relative",
                    "top":"30px"});
    for(var i = 0; i<(numbox*numbox);i++){
        $("#container").append("<div class=box></div>")
    }
    $(".box").css({"height":boxsize,
                        "width":boxsize,
                        "border-style": "solid",
                        "border-color":"black",
                        "border-width": bordersize,
                        "float":"left"});
};

function makeButton(){
    $("body").prepend("<div id='genButton'><button type='button'>Test</button></div>")
    $("#genButton").css({"text-align":"center"});
};
