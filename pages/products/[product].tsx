import { NextPageContext } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Product from "@prisma/client"

export default function Home(props: AppProps) {
    const product = props.product

    return (
        <div>
            <h1>{product.name}</h1>
            <label>${product.price}</label>
            <p>{product.description}</p>
        </div>
    )
}

export async function getServerSideProps(context: NextPageContext) {
    const params = context.query
    const productId = params.product

    const product = await fetch(`http://localhost:3000/api/products/${productId}`)

    const json = await product.json()

    return {
        props: {
            product: json
        }
    }
}