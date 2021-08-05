import Card from "./component/Card.component";
import { Product } from "./interface/Product";
import jsonBd from '../../bd.json';
import { BodyStyled } from "./component/Card";

export default function BodyComponent() {

    return (
        <BodyStyled>
            {jsonBd.products.map((item: Product, index: number) => {
                return <Card key={index} product={item} />
            })}
        </BodyStyled>
    );
}