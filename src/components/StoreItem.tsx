import { Button, Card } from 'react-bootstrap'
import formatCurrecy from '../utilities/formatCurrecy'
import { useShoppingCart } from '../context/ShoppingCartContent'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    const {
        getItemQuantity,
        decreaseCartQuantity,
        increaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)


    return (
        <Card className='h-100'>
            <Card.Img
                variant="top"
                // src="./pubilc/imgs/book.jpg"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrecy(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add to Card</Button>
                    ) : <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                        <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className='fs-3'>
                                    {quantity}
                                </span>
                                in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>

                        <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
                            Remove
                        </Button>
                    </div>}
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem