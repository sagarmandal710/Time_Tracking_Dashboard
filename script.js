$(document).ready(function() {
    $("#profile ul li").on("click", function() {
        $(this).css("color", "#fbf8ff");
    });
    $("#profile ul li").on("click", function() {
        var val = $(this).val();
        if (val == 1) {
            $(".timeBlock h5 span").html('day');
        }
        else if (val == 2) {
            $(".timeBlock h5 span").html('week');
        }
        else {
            $(".timeBlock h5 span").html('month');
        }
    });
});