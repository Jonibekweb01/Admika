import axios from 'axios';
import { useEffect, useRef, useState } from "react"
import { Form, ProductTitle, Row } from "../../App.styles"
import { ButtonAddition, ButtonSubmitter } from "../../components/Button/Button.component"
import { Modal } from "../../components/Modal/Modal.component"
import { Input } from '../../components/Input/Input.component'
import { api } from '../../API/API';
import { ProductsList, StyledFlex } from './products.styles';
import { Card } from '../../components/Card/Card.component';

export const Products = () => {
    const [product, setProduct] = useState([])

    const productName = useRef()
    const productPrice = useRef()
    const productImage = useRef()
    const productDesc = useRef()
    const [modal, setModal] = useState(false)

    const getProducts = async () => {
        const res = await api.getProducts();
        setProduct(res.data)
    };

    const postProducts = async (params) => {
        const res = await api.postProducts(params)
        if (res.status === 201) {
            setModal(false)
        }
    }

    useEffect(() => {
        getProducts()
    })

    const handleAddProducts = ((evt) => {
        evt.preventDefault();

        postProducts({
            product_name: productName.current.value,
            product_price: productPrice.current.value,
            product_img: productImage.current.value,
            product_desc: productDesc.current.value,
        });
    })
    return (
        <>
            <Row justify='space-between'>
                <StyledFlex>
                    <ProductTitle>Products</ProductTitle>
                    <ButtonAddition onClick={() => setModal(true)} />
                </StyledFlex>
                {
                    product.length && (
                        <ProductsList>
                            {
                                product.map((item) => (
                                    <Card item={item} />
                                ))
                            }
                        </ProductsList>
                    )
                }
            </Row>
            {modal &&
                <Modal setModal={setModal} >
                    <Form onSubmit={handleAddProducts}>
                        <Input ref={productName} type="text" placeholder="Profuct name" />
                        <Input ref={productPrice} type="number" placeholder="Product price" />
                        <Input ref={productImage} type="text" placeholder="Product image" />
                        <Input ref={productDesc} type="text" placeholder="Product description" />
                        <ButtonSubmitter />
                    </Form>
                </Modal>}
        </>
    )
}
