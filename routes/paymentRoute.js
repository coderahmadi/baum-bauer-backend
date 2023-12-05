import express from "express";
import {
    createStripePayment
} from "../controllers/paymentController.js";
const router = express.Router();

router.post("/checkout", createStripePayment);

export default router