import ActionBarViewModel from "../../../../src/widgets/ActionBar/ActionBarViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/ActionBar/ActionBarViewModel", () => {
  let vm: ActionBarViewModel;

  beforeEach(() => {
    vm = new ActionBarViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
