import { render } from "@testing-library/react-native";
import DeliveriesList from "../components/deliveries/DeliveriesList";

const route = { params: true };
const navigation = { navigate: jest.fn() };
const setAllDeliveries = () => false;

test("If no deliveries there should be a message informing user", async () => {
    const {
        getByText,
        // debug
    } = await render(
        <DeliveriesList route={route} setAllDeliveries={setAllDeliveries} />
    );

    // debug("DeliveryList component");

    const noDeliveries = await getByText("Inga inleveranser", { exact: false });

    expect(noDeliveries).toBeDefined();
});
