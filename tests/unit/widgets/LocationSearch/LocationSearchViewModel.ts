import LocationSearchViewModel from "../../../../src/widgets/LocationSearch/LocationSearchViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/LocationSearch/LocationSearchViewModel", () => {
  let vm: LocationSearchViewModel;

  beforeEach(() => {
    vm = new LocationSearchViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
