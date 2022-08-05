const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  let a = result.input;
  let s = 6 * a ** 2;
  let v = a ** 3;
  console.log(s, v);
});
