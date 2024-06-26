// adminRoutes.js

import express from "express";
import { addUser, editUser, removeUser } from "./userController.js";
import { addBranch, editIntakeBranch,updateSeatsBranch ,removeBranch, renderEditIntakePage,renderupdateSeatsPage,renderAddBranchPage,renderRemoveBranchPage,getBranchesByCollege } from "./branchController.js";


const router = express.Router();

// User Routes
router.post("/manage-users/add", addUser);
router.put("/manage-users/edit", editUser);
router.delete("/manage-users/remove", removeUser);


// Route to render the edit branch page
router.get('/manage-branches/add', renderAddBranchPage);
router.get('/manage-branches/editIntake', renderEditIntakePage);
router.get('/manage-branches/updateSeats', renderupdateSeatsPage);
router.get('/manage-branches/remove', renderRemoveBranchPage);

// Branch Routes
router.post('/manage-branches/add', addBranch);
router.post('/manage-branches/editIntake', editIntakeBranch);
router.post('/manage-branches/updateSeats', updateSeatsBranch);
router.post('/manage-branches/remove', removeBranch);

router.get('/branches', getBranchesByCollege);


export default router;
