import {Router} from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controllers/category.controller";


const route:Router = Router();

route.post("/",createCategory);
route.put("/:id",updateCategory);
route.delete("/:id",deleteCategory);
route.get("/",getCategories);

export default route;
