$(".darkbutt").click(
    function(){
      $(".box").toggleClass("dark");
      $(".container").toggleClass("dark");
    }
);

$(".spinbutt").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reset").click(
    function(){
        location.reload();
    }
);

$(".lol").click(
    function(){
        // $(".penis").addClass("show");
        // $(".penis").css("display", "inline");
        $(".penis").show();
        $(".lol").hide();
    }
);

$( function() {
    $( ".draggable" ).draggable();
} );