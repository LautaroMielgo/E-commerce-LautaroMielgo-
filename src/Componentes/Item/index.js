
import { Image,Text,VStack } from '@chakra-ui/react'


const Item = ({product}) => {
  return (
    <VStack>
    <Text>{product.product}</Text>
    <Image src={product.imagen}></Image>
    <Text> ${product.precio}</Text>

    </VStack>
  )
}

export {Item}