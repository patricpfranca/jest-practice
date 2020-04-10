import { expect } from "chai";
import reduce from "../src/reduce/reduce-recursive";

it("reduce should be a function", () => {
  expect(reduce).to.be.a("function");
});

it("reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6", () => {
  expect(reduce([1, 2, 3], (acc, item) => acc + item, 0)).to.be.deep.equal(6);
});

it("reduce([2, 3, 4], (acc, item) => acc + item, 0) should return 9", () => {
  expect(reduce([2, 3, 4], (acc, item) => acc + item, 0)).to.be.deep.equal(9);
});

it("reduce([2, 3, 4], (acc, item) => acc + item) should return 9", () => {
  expect(reduce([2, 3, 4], (acc, item) => acc + item)).to.be.deep.equal(9);
});

it("reduce([1, 2], (acc, item) => { acc['number-' + item] = item; return acc }, {}), should be return {'number-1': 1, 'number-2': 2}", () => {
  expect(
    reduce(
      [1, 2],
      (acc, item) => {
        acc["number-" + item] = item;
        return acc;
      },
      {}
    )
  ).to.be.deep.equal({ "number-1": 1, "number-2": 2 });
});

it("reduce([1, 2], (acc, item, index) => acc + index, 0) should return 1", () => {
  expect(reduce([1, 2], (acc, item, index) => acc + index, 0)).to.be.equal(1);
});

it("reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) should be return 3", () => {
  expect(
    reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
  ).to.be.deep.equal(3);
});
