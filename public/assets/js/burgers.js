$(function() {
    $(".change-eaten").on("click", function(event) {
        let id = $(this).data("id");
        $.ajax("/api/burgers/" +id, {
            type: "PUT",
            data: id
        }).then(function () {
            location.reload();
        })
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#nb").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        })
    })
})