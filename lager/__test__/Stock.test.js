import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import Stock from "../components/stock/Stock";

jest.mock("../components/stock/StockList", () => "StockList");

test("header should exist containing text Inventory", async () => {
    const { getByText } = render(<Stock />);

    const header = await getByText("Inventory");

    expect(header).toBeDefined();
});
