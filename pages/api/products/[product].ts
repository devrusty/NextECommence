import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../../../objects/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let productId = req.query.product
    let product = await PrismaClient.product.findFirst({
        where: {
            id: Number(productId)
        }
    })

    if (!product)
        return res.status(404).send("Product not found.")

    res.status(200).send(product)
}