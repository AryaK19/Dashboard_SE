// adminRoutes.js

import express from "express";
import { addUser, editUser, removeUser } from "./userController.js";
import { addBranch, editBranch, removeBranch, renderEditBranchPage,renderAddBranchPage,renderRemoveBranchPage } from "./branchController.js";


const router = express.Router();

// User Routes
router.post("/manage-users/add", addUser);
router.put("/manage-users/edit", editUser);
router.delete("/manage-users/remove", removeUser);

// Branch Routes
router.post('/manage-branches/add', addBranch);
router.post('/manage-branches/edit', editBranch);
router.post('/manage-branches/remove', removeBranch);

// Route to render the edit branch page
router.get('/manage-branches/add', renderAddBranchPage);
router.get('/manage-branches/edit', renderEditBranchPage);
router.get('/manage-branches/remove', renderRemoveBranchPage);

export default router;
