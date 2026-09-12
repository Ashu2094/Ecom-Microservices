import {Router} from "express";
import { createProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/product.controller";
import { shouldBeAdmin } from "../middleware/authMiddleware";


const route:Router = Router();

route.post("/",shouldBeAdmin,createProduct);
route.put("/:id",shouldBeAdmin,updateProduct);
route.delete("/:id",shouldBeAdmin,deleteProduct);
route.get("/",getProducts);
route.get("/:id",getProduct);
export default route;
