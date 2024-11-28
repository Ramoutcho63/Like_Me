// Le bouton like devient bleu et affiche un message à coté lorsqu'on clique dessus

$(".like").on("click", function (event) {
    if ($(event.target).attr("src") == "img/miniature_like.png") {
        $(event.target).attr("src", "img/miniature_unlike.png");
    } else {
        $(event.target).attr("src", "img/miniature_like.png");
    }
});
