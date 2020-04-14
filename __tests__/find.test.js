import { expect } from "chai";
import find from "../src/find/find";

it("find should be a function", () => {
  expect(find).to.be.a("function");
});

it("find([1, 2, 3], (item) => item === 1) should return 1", () => {
  expect(find([1, 2, 3], (item) => item === 1)).to.be.equal(1);
});

it("find([1, 2, 3], (item) => item === 3) should return 3", () => {
  expect(find([1, 2, 3], (item) => item === 3)).to.be.equal(3);
});

it("find([1, 2, 3], (item, index) => item === 1) should return 1", () => {
  expect(find([1, 2, 3], (item, index) => item === 1)).to.be.equal(1);
});

it("find([1, 2, 3], (item, index, array) => array[index] === 2) should return 2", () => {
  expect(
    find([1, 2, 3], (item, index, array) => array[index] === 2)
  ).to.be.equal(2);
});
