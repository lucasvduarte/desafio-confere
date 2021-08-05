import { Container, Sizes, ContainerCard, ContainerSize } from './Card';
import { Text } from '../../../component/text/Text';
import ImageComponent from '../../../component/image/Image.component';
import { Cart } from '../interface/Cart';

interface Cardprops {
    product: Cart;
}

const Card = ({ product }: Cardprops) => {

    return (
        <ContainerCard>
            <ImageComponent image={product.product.image} offer={product.product.discount_percentage} />
            <Container >
                <Text>{product.product.name}</Text>
                {product.size && (
                    <ContainerSize>
                        <Text>Tamanho</Text>
                        <Sizes  >{product.size}</Sizes>
                    </ContainerSize>
                )}
                <Text fontSize={19} color='#404040'>{`por ${product.product.actual_price}`}</Text>
                <Text fontSize={13} >{`Quantidade ${product.quantity}`}</Text>
            </Container>
        </ContainerCard>
    );
}

export default Card;