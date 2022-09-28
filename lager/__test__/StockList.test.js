import { render } from "@testing-library/react-native";
import StockList from "../components/stock/StockList";

jest.mock("../components/stock/Stock.tsx", () => "Stock");

const products = [
    { name: "Shampoo", stock: 2 },
    { name: "Balsam", stock: 3 },
    { name: "Tvål", stock: 15 },
];

const route = { params: false };
const navigation = { navigate: jest.fn() };
const setProducts = () => false;

test("List should contain three items", async () => {
    const { getByText, debug } = await render(
        <StockList
            route={route}
            products={products}
            setProducts={setProducts}
        />
    );

    // debug("Stocklist component");

    const shampoo = await getByText("Shampoo", { exact: false });
    const balsam = await getByText("Balsam", { exact: false });
    const soap = await getByText("Tvål", { exact: false });

    expect(shampoo).toBeDefined();
    expect(balsam).toBeDefined();
    expect(soap).toBeDefined();
});
