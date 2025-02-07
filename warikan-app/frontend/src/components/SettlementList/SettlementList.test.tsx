import { Settlement } from "../../type";
import SettlementList from "./SettlementList";
import  { render } from "@testing-library/react"

describe("SettlementList", () =>{
  it("Snapshot test", () => {
    const settlements: Settlement[] =[
      { from: "二郎", to: "一郎", amount: 1000 }
    ];

    const { container } = render(<SettlementList settlements={settlements} />)
    expect(container).toMatchSnapshot();
  })
})
