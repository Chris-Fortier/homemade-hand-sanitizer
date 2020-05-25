function calculate() {
   console.log("recalculating...");
   let desiredVolume = parseFloat($("#desired-volume").val());
   console.log(desiredVolume);
   let desiredABV = parseFloat($("#desired-ABV").val());
   let ingredientABV = parseFloat($("#ingredient-ABV").val());
   let isoRecipe = (desiredABV / ingredientABV) * desiredVolume; // put the amount of iso needed to to page
   console.log("ingredientABV", isoRecipe);
   let aloeRecipe = desiredVolume - isoRecipe; // put the amount of aloe needed to to page
   console.log("desiredVolume", aloeRecipe);
   $("#iso-recipe").text(
      String(isoRecipe + 0.5).split(".")[0] +
         " mL of " +
         ingredientABV +
         "% Isopropyl Alcohol"
   ); // put the amount of iso needed to to page
   $("#aloe-recipe").text(
      String(aloeRecipe + 0.5).split(".")[0] + " mL of Aloe Vera"
   ); // put the amount of aloe needed to to page
}

// $("#calculate-button").click(function () {
//    calculate();
// });

calculate(); // run this function on page load

$(".calculate").keyup(function () {
   calculate();
});
