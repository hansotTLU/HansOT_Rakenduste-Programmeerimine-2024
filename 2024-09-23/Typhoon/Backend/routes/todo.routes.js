const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares");

router.use(todoRouteMiddleware);

// /todo/ Get endpoint level middleware
router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", todoController.create);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;
