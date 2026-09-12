import {Router} from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controllers/category.controller";
import { shouldBeAdmin } from "../middleware/authMiddleware";


const route:Router = Router();

route.post("/",shouldBeAdmin,createCategory);
route.put("/:id",shouldBeAdmin,updateCategory);
route.delete("/:id",shouldBeAdmin,deleteCategory);
route.get("/",getCategories);

export default route;
