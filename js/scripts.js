$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var pokemon = "";
    var pokemonimg = "";
    var elements = $("input:radio[name=elements]:checked").val();
    var personality = $("#personality").val();

    if (personality === "Lazy") {
      pokemon = "Snorlax";
      pokemonimg ="img/snorlax.gif";
    } else if (elements ==="fire") {
      pokemon = "Charmander";
      pokemonimg = "img/charmander.gif";
    } else if (elements ==="water") {
      pokemon = "Squirtle";
      pokemonimg = "img/squirtle.gif";
    } else if (elements ==="grass") {
      pokemon = "Bulbasaur";
      pokemonimg = "img/bulbasaur.gif";
    } else if (elements ==="electric") {
      pokemon = "Pikachu"
      pokemonimg = "img/pikachu.gif"
    }

    $("#results").removeClass("hide");
    $("#results p").text(pokemon);
    $ ("#results img").attr("src", pokemonimg)
  });
});
