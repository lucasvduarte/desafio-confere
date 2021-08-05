import { Image, Promo, } from './Card';
import { Text } from '../../../component/text/Text';
import { memo } from 'react';

interface ImageProps {
    image: string;
    offer?: string;
}

const ImageComponent = ({ image, offer }: ImageProps) => {

    return (
        <div style={{ position: 'relative' }}>
            <Promo>
                {offer && <Text fontSize={20} color='#ff0000' weight={900}>{`${offer} OFF`}</Text>}
            </Promo>
            <Image src={image} width={216} height={200} />
        </div>
    );
}

export default memo(ImageComponent);