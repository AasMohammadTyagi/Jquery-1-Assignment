$("#c-button").click(function(){
    $("#title").html("C#");
    $(".description").html("<li>C# is pronounced C-Sharp.</li> <li> It is an object-oriented programming language created by Microsoft that runs on the.NET Framework. </li> <li>C# has roots from the C family, and the language is close to other popular languages like C++ and Java.<li></li>The first version was released in year 2002. The latest version, C# 11, was released in November 2022.</li>");
})
$("#css-button").click(function(){
    $("#title").html("CSS");
    $(".description").html("<li>CSS stands for Cascading Style Sheets</li><li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li><li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li><li>External stylesheets are stored in CSS files</li>");
})
$("#angular-button").click(function(){
    $("#title").html("Angular");
    $(".description").html("<li>AngularJS extends HTML with new attributes.</li> <li>AngularJS is perfect for Single Page Applications (SPAs).</li> <li>AngularJS is easy to learn.</li>");
})
$("#jquery-button").click(function(){
    $("#title").html("JQuery");
    $(".description").html("<li>jQuery is a small and lightweight JavaScript library.</li><li>jQuery is cross-platform.</li><li>jQuery means write less do more.</li><li>jQuery simplifies AJAX call and DOM manipulation.</li>");
})
let i=0;
$("#change-theme").click(function(){
    if(i==0){
    $("#container-theme").css("background-color", "red");
    i++;
}
else if(i==1){
        $("#container-theme").css("background-color", "green");
    i++;  
}
else{
    $("#container-theme").css("background-color", "blue");
    i=0;
}

})

