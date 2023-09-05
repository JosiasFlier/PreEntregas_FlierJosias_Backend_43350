import { Router } from "express"
import ProductManager from "../dao/fsManager/productManager.js";

const router = Router();

const productManager = new ProductManager()

const products = await productManager.getProducts()

router.get("/", async (req, res) => {
    try {
    res.render("home", { products });
    } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
    }
});

router.get("/realTimeProducts", async (req, res) => {
    try {
    res.render("realTimeProducts", { products });
    } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
    }
});

export default router;