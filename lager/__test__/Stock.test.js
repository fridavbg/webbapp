import { render } from "@testing-library/react-native";
import MockedNavigator from "./MockedNavigator";
import Stock from "../components/stock/Stock";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
// jest.mock("../components/stock/StockList", () => "StockList");

it("should render correctly", async () => {
    const { getByText } = render(<MockedNavigator component={Stock} />);

    // const header = await getByText("Inventory");

    // expect(header).toBeDefined();
});
