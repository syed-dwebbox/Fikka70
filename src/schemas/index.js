import * as Yup from "yup";

export const signUpSchema = Yup.object({
  date: Yup.date().typeError("Invalid date of birth").min(
        new Date(
          new Date().getFullYear() - 100,
          new Date().getMonth(),
          new Date().getDate()
        ),
        "Date of birth cannot be earlier than 100 years ago"
      )
      .max(new Date(), "Date of birth cannot be greater than today")
      .required("Date of birth is required"),
  total_downloads: Yup.number().positive().integer().required("Required"),
  django_users: Yup.number().positive().integer().required("Required"),
  account_completed: Yup.number().positive().integer().required("Required"),
  pan_verified_users:Yup.number().positive().integer().required("Required"),
  kyc_verified_users: Yup.number().positive().integer().required("Required"),
  ucc_verified_users: Yup.number().positive().integer().required("Required"),
  fatca_uploaded_users: Yup.number().positive().integer().required("Required"),
  users_investing: Yup.number().positive().integer().required("Required"),
  total_funds_collected: Yup.number().positive().integer().required("Required"),
  total_funds_sold: Yup.number().positive().integer().required("Required"),
  per_user_avg_investment: Yup.number().positive().integer().required("Required"),
})
export const loginSchema = Yup.object({
  username:Yup.string().min(2).max(25).required("Please Enter Your Username"),
  password:Yup.string().min(6).required("Please Enter Your Password")
})