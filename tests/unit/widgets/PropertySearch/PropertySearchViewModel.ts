import PropertySearchViewModel from "../../../../src/widgets/PropertySearch/PropertySearchViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/PropertySearch/PropertySearchViewModel", () => {
  let vm: PropertySearchViewModel;

  beforeEach(() => {
    vm = new PropertySearchViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
