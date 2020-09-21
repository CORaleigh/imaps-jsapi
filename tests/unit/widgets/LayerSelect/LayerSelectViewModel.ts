import LayerSelectViewModel from "../../../../src/widgets/LayerSelect/LayerSelectViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/LayerSelect/LayerSelectViewModel", () => {
  let vm: LayerSelectViewModel;

  beforeEach(() => {
    vm = new LayerSelectViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
