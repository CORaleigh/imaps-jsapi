import LayersViewModel from "../../../../src/widgets/Layers/LayersViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/Layers/LayersViewModel", () => {
  let vm: LayersViewModel;

  beforeEach(() => {
    vm = new LayersViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
