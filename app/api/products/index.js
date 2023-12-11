import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    const { method, cookies } = req

    const token = cookies.token

    await dbConnect()

    
    if (method === "GET") {
        console.log("Request Body:", req.body);
        try {
            const products = await Product.find();
            res.status(201).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
    if (method === "POST") {

        if(!token || token !== process.env.TOKEN){
            return res.status(401).json("Not authenticated")
        }
        try {
            const product = await Product.create(req.body);
            console.log("Product Created:", product);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
}