import {Router} from "express";
import { createProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/product.controller";


const route:Router = Router();

route.post("/",createProduct);
route.put("/:id",updateProduct);
route.delete("/:id",deleteProduct);
route.get("/",getProducts);
route.get("/:id",getProduct);
export default route;
