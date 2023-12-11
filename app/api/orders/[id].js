import dbConnect from "../../../util/mongo"
import Order from "../../../models/Order"

export default async function handler(req, res) {
    const { method, query: { id } } = req

    await dbConnect()

    
    if (method === "GET") {
        console.log("Request Body:", req.body);
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
    if (method === "PUT") {
        try {
          const order = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          res.status(200).json(order);
        } catch (err) {
          res.status(500).json(err);
        }
    }
    
    if (method === "DELETE") {
        console.log("Request Body:", req.body);
        try {
            const order = await order.create(req.body);
            console.log("Order Created:", order);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
}