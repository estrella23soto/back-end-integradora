import {Router} from "express";
import { methods as cursoControllers } from "../controllers/curso.controller";

const router = Router();

 router.get("/", cursoControllers.getCurso);
 router.get("/:id", cursoControllers.getUnCurso);
 router.post("/", cursoControllers.addCurso);
 router.put("/:id", cursoControllers.updateCurso);
 router.delete("/:id", cursoControllers.deleteCurso);



 export default router;