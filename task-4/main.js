const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  let numbers = result.input.split(",");
  let money = parseInt(numbers[0]);
  let cake = parseInt(numbers[1]);

  let res = money / cake;
  console.log("Cavab: ", parseInt(res));
});
