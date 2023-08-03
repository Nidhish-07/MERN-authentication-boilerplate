import { check } from "express-validator";

export const userSingupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Email must be valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should of minimum 6 characters long"),
];
