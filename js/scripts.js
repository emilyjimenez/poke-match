$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var pokemon;
    var pokemonimg;
    var age = $("input#age").val();
    var elements = $("input:radio[name=elements]:checked").val();
    var personality = $("#personality").val();

    if (personality === "Lazy") {
      pokemon = "Snorlax";
      pokemonimg ="img/snorlax.gif";

      // Fire
    } else if (elements === "fire") {
      if (age >= 30) {
        pokemon = "Charizard";
        pokemonimg = "img/charizard.gif";
      }
      else {
        pokemon = "Charmander";
        pokemonimg = "img/charmander.gif";
      }

      // Water
    } else if (elements === "water") {
      if (age >= 30) {
        pokemon = "Blastoise";
        pokemonimg = "img/blastoise.gif";
      } else {
        pokemon = "Squirtle";
        pokemonimg = "img/squirtle.gif";
      }

      // Grass
    } else if (elements === "grass") {
      if (age >= 30) {
        pokemon = "Venusaur";
        pokemonimg = "img/venusaur.gif";
      } else {
        pokemon = "Bulbasaur";
        pokemonimg = "img/bulbasaur.gif";
      }

      // Electric
    } else if (elements === "electric") {
      if (age >= 30) {
        pokemon = "Raichu";
        pokemonimg = "img/raichu.gif";
      } else {
        pokemon = "Pikachu"
        pokemonimg = "img/pikachu.gif"
      }
    }

    $("#results").removeClass("hide");
    $("#results p").text(pokemon);
    $ ("#results img").attr("src", pokemonimg)
  });
});
