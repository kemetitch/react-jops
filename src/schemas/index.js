import * as Yup from "yup";

const addJobSchema = Yup.object({
  type: Yup.string().required("Job type is required"),
  title: Yup.string()
    .min(3, "Title must be at least 3 characters long")
    .required("Title is required"),
  location: Yup.string().required("Location is required"),
  salary: Yup.string().required("Salary is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters long")
    .required("Description is required"),
  contactPhone: Yup.string()
    .min(10, "Contact phone must be at least 10 digits long")
    .max(15, "Contact phone can be at most 15 digits long")
    .required("Contact phone is required"),
  contactEmail: Yup.string()
    .email("Invalid email format")
    .required("Contact email is required"),
  companyDescription: Yup.string()
    .min(10, "Company description must be at least 10 characters long")
    .required("Company description is required"),
  companyName: Yup.string()
    .min(2, "Company name must be at least 2 characters long")
    .required("Company name is required"),
});
export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Contact email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});
export const registerSchmea = Yup.object({
  firstName: Yup.string()
    .min(3, "First Name must be at least 3 characters long")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(3, "Last Name must be at least 3 characters long")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Contact email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export default addJobSchema;
