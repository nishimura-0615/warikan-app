import { Expense } from "../type";
import { calculateSettlements } from "./settlements";
import { Settlement } from "../type";
describe("calculateSettlements", () => {
  it("清算リストが算出される", () =>{
    const expenses: Expense[] = [
      {
        groupName: "group1",
        expenseName: "支出1",
        payer: "一郎",
        amount: 300,
      },
      {
        groupName: "group2",
        expenseName: "支出2",
        payer: "二郎",
        amount: 100,
      },
    ];
    const groupMembers = ["一郎", "二郎", "三郎"];

    const expectedSettlements: Settlement[] = [
      { from:"二郎", to:"一郎", amount: 34 },
      { from:"三郎", to:"一郎", amount: 133 },
    ];
    const result =calculateSettlements(expenses, groupMembers);
    expect(result).toEqual(expectedSettlements);
  })
})
