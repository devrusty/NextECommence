import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../../../objects/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let products = await PrismaClient.product.findMany()
    res.status(200).send(products)
}