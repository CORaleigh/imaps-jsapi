import SelectViewModel from "../../../../src/widgets/Select/SelectViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/Select/SelectViewModel", () => {
  let vm: SelectViewModel;

  beforeEach(() => {
    vm = new SelectViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
