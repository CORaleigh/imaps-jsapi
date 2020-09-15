import ClearViewModel from "../../../../src/widgets/Clear/ClearViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/Clear/ClearViewModel", () => {
  let vm: ClearViewModel;

  beforeEach(() => {
    vm = new ClearViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
