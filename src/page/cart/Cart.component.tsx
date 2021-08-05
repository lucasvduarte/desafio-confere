import { useContext } from "react";
import CartContext from "../../context/Car";
import { BodyStyled } from "./component/Card";
import Card from "./component/Card.component";
import { Cart } from "./interface/Cart";

export default function BodyComponent() {
    const { cart } = useContext(CartContext);
    return (
        <BodyStyled>
            {cart.map((item: Cart, index: number) => {
                return <Card key={index} product={item} />
            })}
        </BodyStyled>
    );
}