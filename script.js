function ConverterReal() {
  var valueCoast = document.getElementById("valor").value;
  var calculo = parseFloat(valueCoast) * 5.25;

  var response = "O valor em real é de R$ " + calculo.toFixed(2);
  document.getElementById("response").innerText = response;
  console.log(response);
}
function ConverterEuro() {
  var valueCoast = document.getElementById("valor").value;
  var calculo = parseFloat(valueCoast) * 1.00;

  var response = "O valor em euro é de € " + calculo.toFixed(2);
  document.getElementById("response").innerText = response;
  console.log(response);
}
