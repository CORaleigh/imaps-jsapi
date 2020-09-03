import BaseMapsViewModel from "../../../../src/widgets/BaseMaps/BaseMapsViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/BaseMaps/BaseMapsViewModel", () => {
  let vm: BaseMapsViewModel;

  beforeEach(() => {
    vm = new BaseMapsViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
