$(document).ready(function(){
    var numbox = 16;
    var boxsize = 45;
    var bordersize=0;
    l = numbox*boxsize +((numbox)*2)*bordersize;
    createGrid(numbox,boxsize,bordersize);
    makeButton();
    $(document).on("mouseenter",".box",function(){
        //could also use a "highlighted" class in css and use ".addClass()"
        $(this).css({"background-color":"blue",
                    "border-color":"blue"});
    });
    $("button").on("click",function(){
        $("#container").remove();
        //todo remove bordersize var
        boxes = prompt("Enter number of boxes");
        boxsize = (l-2*boxes)/(boxes);
        createGrid(boxes,boxsize,bordersize);
    });
});

function createGrid(numbox,boxsize,bordersize){
    $("body").append("<div id='container'></div>")
    var length = numbox*boxsize +((numbox)*2)*bordersize;
    $("#container").css({"height":length,
                        "width":length,
                    "border-style": "solid",
                    "border-color":"black",
                    "border-width":"1px",
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
