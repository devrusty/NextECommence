import type { NextPage } from 'next'
import { NextPageContext } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Product } from '@prisma/client'
import Link from 'next/link'

export default function Home(props: AppProps) {
  const products = props.products
  const productInfo = products.map((product: Product) => {
    const link = `http://localhost:3000/products/${product.id}`

    return (
      <Link key={product.name} href={link}>{product.name}</Link>
    )
  })

  return (
    <div>
      <h1>Products</h1>
      <div>{productInfo}</div>
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const allProducts = await fetch("http://localhost:3000/api/products")
  const json = await allProducts.json()

  return {
    props: {
      products: json
    }
  }
}