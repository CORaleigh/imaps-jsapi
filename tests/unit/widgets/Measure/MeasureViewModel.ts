import MeasureViewModel from "../../../../src/widgets/Measure/MeasureViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/Measure/MeasureViewModel", () => {
  let vm: MeasureViewModel;

  beforeEach(() => {
    vm = new MeasureViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
