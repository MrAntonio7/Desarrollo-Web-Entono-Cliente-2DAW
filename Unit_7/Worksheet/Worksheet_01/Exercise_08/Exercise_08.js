$(document).ready(function() {
    $("p").css('font-size', "20px");
    $("h1").click(function() { $(this).hide(); });
    $("p").hover(function() { $(this).css("background", "red"); });
    $("p").mouseout(function() { $(this).css("background", "white"); });
});