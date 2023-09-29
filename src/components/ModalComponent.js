import {
  Button,
  Divider,
  Typography,
  TextField,
  Box,
  Paper,
  Modal,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { signUpSchema } from "../schemas";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const initialValues = {
  date: "",
  total_downloads: "",
  django_users: "",
  account_completed: "",
  pan_verified_users: "",
  kyc_verified_users: "",
  ucc_verified_users: "",
  fatca_uploaded_users: "",
  users_investing: "",
  total_funds_collected: "",
  total_funds_sold: "",
  per_user_avg_investment: "",
};
function ModalComponent({ open, handleClose }) {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  // console.log(errors);
  const [clicked,setClicked] = useState(false);
  return (
    <>
      <Modal open={open} onClose={handleClose} sx={{ overflow: "auto" }}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "488px",
            padding: "20px",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{ color: "#C9234A", fontSize: "22px", fontWeight: "600" }}
            >
              Add Data
            </Typography>
            {/* <Button onClick={() => setClicked(true)}>{clicked ? "Add Data" : "Clicked"}</Button> */}
            <Button onClick={handleClose}>
              <CloseOutlinedIcon sx={{ color: "#C9234A" }} />
            </Button>
          </Box>
          <Divider />
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              Date
            </Typography>
            <TextField
              placeholder="Enter Date"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="date"
              type="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>


{clicked && <>
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              Total Downloads
            </Typography>
            <TextField
              placeholder="Enter Total Downloads"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="total_downloads"
              type="number"
              value={values.total_downloads}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.total_downloads && touched.total_downloads ? (
              <Typography sx={{ color: "red" }}>
                {errors.total_downloads}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              Django User
            </Typography>
            <TextField
              placeholder="Enter Django User"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="django_users"
              type="number"
              value={values.django_users}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.django_users && touched.django_users ? (
              <Typography sx={{ color: "red" }}>
                {errors.django_users}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              Account Completed
            </Typography>
            <TextField
              placeholder="Enter Account Completed"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="account_completed"
              type="number"
              value={values.account_completed}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.account_completed && touched.account_completed ? (
              <Typography sx={{ color: "red" }}>
                {errors.account_completed}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              PAN Verified Users
            </Typography>
            <TextField
              placeholder="Enter PAN Verified Users"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="pan_verified_users"
              type="number"
              value={values.pan_verified_users}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.pan_verified_users && touched.pan_verified_users ? (
              <Typography sx={{ color: "red" }}>
                {errors.pan_verified_users}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              KYC Verified Users
            </Typography>
            <TextField
              placeholder="Enter KYC Verified Users"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="kyc_verified_users"
              type="number"
              value={values.kyc_verified_users}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.kyc_verified_users && touched.kyc_verified_users ? (
              <Typography sx={{ color: "red" }}>
                {errors.kyc_verified_users}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              UCC Verified Users
            </Typography>
            <TextField
              placeholder="Enter UCC Verified Users"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="ucc_verified_users"
              type="number"
              value={values.ucc_verified_users}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.ucc_verified_users && touched.ucc_verified_users ? (
              <Typography sx={{ color: "red" }}>
                {errors.ucc_verified_users}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              Fatca Uploaded Users
            </Typography>
            <TextField
              placeholder="Enter Fatca Uploaded Users"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="fatca_uploaded_users"
              type="number"
              value={values.fatca_uploaded_users}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.fatca_uploaded_users && touched.fatca_uploaded_users ? (
              <Typography sx={{ color: "red" }}>
                {errors.fatca_uploaded_users}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              User Investing
            </Typography>
            <TextField
              placeholder="Enter User Investing"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="users_investing"
              type="number"
              value={values.users_investing}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.users_investing && touched.users_investing ? (
              <Typography sx={{ color: "red" }}>
                {errors.users_investing}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              Total Funds Collected
            </Typography>
            <TextField
              placeholder="Enter Total Funds Collected"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="total_funds_collected"
              type="number"
              value={values.total_funds_collected}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.total_funds_collected && touched.total_funds_collected ? (
              <Typography sx={{ color: "red" }}>
                {errors.total_funds_collected}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              Total Funds Sold
            </Typography>
            <TextField
              placeholder="Enter Total Funds Sold"
              fullWidth
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              name="total_funds_sold"
              type="number"
              value={values.total_funds_sold}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.total_funds_sold && touched.total_funds_sold ? (
              <Typography sx={{ color: "red" }}>
                {errors.total_funds_sold}
              </Typography>
            ) : null}
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              Per User Average Investment
            </Typography>
            <TextField
              placeholder="Enter Per User Average Investment"
              sx={{
                marginBottom: "12px",
                background: "rgba(209, 223, 229, 0.29)",
                fontWeight: "500",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              name="per_user_avg_investment"
              type="number"
              value={values.per_user_avg_investment}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.per_user_avg_investment &&
            touched.per_user_avg_investment ? (
              <Typography sx={{ color: "red" }}>
                {errors.per_user_avg_investment}
              </Typography>
            ) : null}
           
            </>}
            {!clicked ? 
            <Button
            onClick={() => setClicked(true)}
              sx={{
                padding: "12px 0px",
                background: "#C9234A",
                "&:hover": { backgroundColor: "#C9234A" },
              }}
              fullWidth
              type="button"
              variant="contained"
            >
            Continue
             </Button>
            :
            <Button
              sx={{
                padding: "12px 0px",
                background: "#C9234A",
                "&:hover": { backgroundColor: "#C9234A" },
              }}
              fullWidth
              variant="contained"
            >
               Add Data
            </Button>}
          </form>
        </Paper>
      </Modal>
    </>
  );
}
export default ModalComponent;
