import OverviewMapViewModel from "../../../../src/widgets/OverviewMap/OverviewMapViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/OverviewMap/OverviewMapViewModel", () => {
  let vm: OverviewMapViewModel;

  beforeEach(() => {
    vm = new OverviewMapViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
