import dbConnect from "../../../util/mongo"
import Order from "../../../models/Order"

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    
    if (method === "GET") {
        console.log("Request Body:", req.body);
        try {
            const orders = await Order.find();
            res.status(201).json(orders);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
    if (method === "POST") {
        console.log("Request Body:", req.body);
        try {
            const order = await Order.create(req.body);
            console.log("Order Created:", order);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
}