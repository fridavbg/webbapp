import { render } from "@testing-library/react-native";
import Header from "../components/incl/Header";

jest.mock("../components/stock/StockList.tsx", () => "StockList");

test("header should exist containing text Warehouse App", async () => {
    const { getByText } = render(<Header />);
    const header = await getByText("Warehouse App");

    expect(header).toBeDefined();
});
