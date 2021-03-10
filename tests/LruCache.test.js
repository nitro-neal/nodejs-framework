const { ExampleService } = require("../services/ExampleService");

test("example", () => {
  let es = new ExampleService();
  es.doSomething();

  expect(1).toBe(1);
});
