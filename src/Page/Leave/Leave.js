import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import axios from "axios";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./Leave.css";

const Leave = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            leaveStartDate: "",
            leaveDays: "",
            leaveRequestType: "",
            leaveType: "",
            leaveReason: ""
        }
    });
    const onSubmit = (data) => {
        console.log(data);
        const payLoad = {
            emp_id: "1",
            leave_start: moment(data.leaveStartDate).format("DD-MMM-yyyy"),
            leave_days:data.leaveDays,
            request_type:data.leaveRequestType,
            leave_type:data.leaveType,
            notes:data.leaveReason
        }
        axios.post("https://sandbox.cuteweb.in/api/addLeave", payLoad)
        .then(response => {
            console.log("Leave request submitted:", response.data);
        })
        alert("Leave request submitted successfully!");
    };
  return (
    <div className="container">
      <h1>Leave Page</h1>
      <form className="validate" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3" >
          <label htmlFor="leaveStartDate" className="form-label">Leave Start Date</label>
          <Controller
            name="leaveStartDate"
            control={control}
            rules={{ required: "Leave start date is required" }}
            render={({ field }) => (
              <DatePicker
                className={`form-control ${errors.leaveStartDate ? "is-invalid" : ""}`}
                selected={field.value}
                onChange={(date) => {field.onChange(date); setStartDate(date)}}
                placeholderText="Select start date"
                dateFormat={"dd-MMM-yyyy"}
                
              />
            )}
          />
          {errors.leaveStartDate && <span className="text-danger">{errors.leaveStartDate.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="leaveDays" className="form-label">No of Days</label>
          <Controller
            name="leaveDays"
            control={control}
            rules={{ required: "Leave days are required" }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className={`form-control ${errors.leaveDays ? "is-invalid" : ""}`}
                placeholder="Enter number of leave days"
              />
            )}
            />
          {errors.leaveDays && <span className="text-danger">{errors.leaveDays.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="leaveRequestType" className="form-label">Leave Request Type</label>
          <Controller
            name="leaveRequestType"
            control={control}
            rules={{ required: "Leave request type is required" }}
            render={({ field }) => (
              <select
                {...field}
                className={`form-select ${errors.leaveRequestType ? "is-invalid" : ""}`}
              >
                <option value="">Select Leave Type</option>
                <option value="0">Sick Leave</option>
                <option value="1">Casual Leave</option>
              </select>
            )}
          />
            {errors.leaveRequestType && <span className="text-danger">{errors.leaveRequestType.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="leaveType" className="form-label">Leave Type</label>
          <Controller
            name="leaveType"
            control={control}
            rules={{ required: "Leave type is required" }}
            render={({ field }) => (
              <select
                {...field}
                className={`form-select ${errors.leaveType ? "is-invalid" : ""}`}
              >
                <option value="">Select Leave Type</option>
                <option value="0">Full Day</option>
                <option value="1">First Half day</option>
                <option value="2">Second Half day</option>
              </select>
            )}
          />
            {errors.leaveType && <span className="text-danger">{errors.leaveType.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="leaveReason" className="form-label">Leave Reason</label>
          <Controller
            name="leaveReason"
            control={control}
            rules={{ required: "Leave reason is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                className={`form-control ${errors.leaveReason ? "is-invalid" : ""}`}
                placeholder="Enter leave reason"
                rows="3"
              ></textarea>
            )}
          />
            {errors.leaveReason && <span className="text-danger">{errors.leaveReason.message}</span>}
        </div>
        <div className="mb-3">
         <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
    </div>
  );
}
export default Leave;