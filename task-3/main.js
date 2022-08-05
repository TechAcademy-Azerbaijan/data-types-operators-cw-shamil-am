const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  let numbers = result.input.split(",");
  let a = parseInt(result.input.split(",")[0]);
  let n = parseInt(result.input.split(",")[1]);
  //   let number1 = parseInt(n);
  // addd

  console.log(a ** n);
});
