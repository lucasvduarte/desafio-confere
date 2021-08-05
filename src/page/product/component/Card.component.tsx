import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../../context/Car';
import { Product } from '../interface/Product';
import { Container, Sizes, ContainerCard, ContainerSize } from './Card';
import { Text } from '../../../component/text/Text';
import { Buttom } from '../../../component/button/Button';
import ImageComponent from '../../../component/image/Image.component';

interface Cardprops {
    product: Product;
}

const Card = ({ product }: Cardprops) => {

    const [size, setSize] = useState<boolean>(false);
    const { addProduct } = useContext(CartContext);

    const isSize: boolean = product.sizes.length === 1 && product.sizes[0].size !== 'u';

    const addCard = (size?: string) => {
        if (isSize || size) {
            addProduct(product, size);
            setSize(false);
        } else {
            setSize(true);
        }
    }

    return (
        <ContainerCard>
            <ImageComponent image={product.image} offer={product.discount_percentage} />
            <Container >
                <Text>{product.name}</Text>
                {(!isSize && !size) ? (
                    <ContainerSize>
                        <Text>Tamanhos</Text>
                        {product.sizes.map((size, index) => size.available ? <Sizes key={`${product.name}-${index}`}>{size.size}</Sizes> : null)}
                    </ContainerSize>
                )
                    :
                    <Text>Tamanho único</Text>
                }
                {product.on_sale ? <Text fontSize={18} weight={400}>{`de ${product.regular_price}`}</Text> : <></>}
                <Text fontSize={19} weight={700} color='#404040'>{`por R$ ${product.actual_price}`}</Text>

                <Text fontSize={12} weight={400}>{`ou em ${product.installments} `}</Text>
                {size && (
                    <ContainerSize>
                        <Text>Adicionar tamanho</Text>
                        {product.sizes.map((size, index) => size.available ? <Sizes key={`${product.name}-${index}`} onClick={() => addCard(size.size)}>{size.size}</Sizes> : null)}
                    </ContainerSize>
                )}
            </Container>
            <Buttom onClick={() => addCard()} >
                Adiconar ao carrinho
            </Buttom>
        </ContainerCard>
    );
}

export default Card;