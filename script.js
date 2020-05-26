// function calculate() {
//    console.log("recalculating...");
//    let finalConcentration = $("#final-concentration").val();
//    let stockConcentration = $("#stock-concentration").val();

//    let stockVolume = $("#stock-volume").val();
//    let dilutantVolume = $("#dilutant-volume").val();
//    let finalVolume = $("#final-volume").val();

//    console.log(
//       stockConcentration,
//       finalConcentration,
//       stockVolume,
//       dilutantVolume,
//       finalVolume
//    );

//    if (stockConcentration != "" && finalConcentration != "") {
//       if (stockVolume != "") {
//          finalVolume = stockVolume / (finalConcentration / stockConcentration);
//          dilutantVolume = finalVolume - stockVolume;
//          $("#dilutant-volume").val(String(dilutantVolume + 0.5).split(".")[0]); // put the amount of aloe needed to to page
//          $("#final-volume").val(String(finalVolume + 0.5).split(".")[0]); // put the amount of iso needed to to page
//       }
//       if (dilutantVolume != "") {
//          stockVolume =
//             -(finalConcentration * dilutantVolume) /
//             (finalConcentration + stockConcentration);
//          finalVolume = stockVolume / (finalConcentration / stockConcentration);
//          $("#stock-volume").val(String(stockVolume + 0.5).split(".")[0]); // put the amount of iso needed to to page
//          $("#final-volume").val(String(finalVolume + 0.5).split(".")[0]); // put the amount of iso needed to to page
//       }
//       if (finalVolume != "") {
//          stockVolume = (finalConcentration / stockConcentration) * finalVolume;
//          dilutantVolume = finalVolume - stockVolume;
//          $("#stock-volume").val(String(stockVolume + 0.5).split(".")[0]); // put the amount of iso needed to to page
//          $("#dilutant-volume").val(String(dilutantVolume + 0.5).split(".")[0]); // put the amount of aloe needed to to page
//       }
//    }
// }

// $("#calculate-button").click(function () {
//    calculate();
// });

// function checkForErrors(variablesToCheck) {
//    var output = true;
//    for ( let v in variablesToCheck) {
//       if (isNan(variablesToCheck)) {

//          output = false;
//       }
//    }
//    return output;
// }

function makeNiceNumber(number) {
   if (number >= 100) {
      return String(number + 0.5).split(".")[0];
   }
   // else if (number >= 10) {
   //    console.log(">=10");
   //    return String(number + 0.05).slice(0, 4);
   // }
   else {
      return String(number + 0.005).slice(0, 4);
   }
}

$("#final-concentration").keyup(function () {
   $("#stock-volume").val("");
   $("#dilutant-volume").val("");
   $("#final-volume").val("");
});

$("#stock-concentration").keyup(function () {
   $("#stock-volume").val("");
   $("#dilutant-volume").val("");
   $("#final-volume").val("");
});

$("#stock-volume").keyup(function () {
   let finalConcentration = $("#final-concentration").val();
   let stockConcentration = $("#stock-concentration").val();

   let stockVolume = $("#stock-volume").val();

   finalVolume = stockVolume / (finalConcentration / stockConcentration);
   dilutantVolume = finalVolume - stockVolume;
   $("#dilutant-volume").val(makeNiceNumber(dilutantVolume));
   $("#final-volume").val(makeNiceNumber(finalVolume));
});

$("#dilutant-volume").keyup(function () {
   console.log("sdfsdf");
   let finalConcentration = $("#final-concentration").val();
   let stockConcentration = $("#stock-concentration").val();

   let dilutantVolume = $("#dilutant-volume").val();

   stockVolume =
      -(finalConcentration * dilutantVolume) /
      (finalConcentration - stockConcentration);
   finalVolume = stockVolume / (finalConcentration / stockConcentration);
   $("#stock-volume").val(makeNiceNumber(stockVolume));
   $("#final-volume").val(makeNiceNumber(finalVolume));
});

$("#final-volume").keyup(function () {
   let finalConcentration = $("#final-concentration").val();
   let stockConcentration = $("#stock-concentration").val();

   let finalVolume = $("#final-volume").val();

   // if (
   //    isNaN(finalConcentration) == false &&
   //    isNaN(stockConcentration) == false &&
   //    isNaN(finalVolume) == false
   // ) {
   stockVolume = (finalConcentration / stockConcentration) * finalVolume;
   dilutantVolume = finalVolume - stockVolume;
   $("#stock-volume").val(makeNiceNumber(stockVolume));
   $("#dilutant-volume").val(makeNiceNumber(dilutantVolume));
   // } else {
   //    $("#stock-volume").val("");
   //    $("#dilutant-volume").val("");
   // }
});
