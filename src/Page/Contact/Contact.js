import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Contact.css";

const InputField = ({ name, control, rules, placeholder, type = "text", errors }) => (
    <div className="mb-3">
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                type === "textarea" ? 
                <textarea {...field} className={`form-control ${errors[name] ? "is-invalid" : ""}`} placeholder={placeholder} rows="3" /> :
                <input {...field} type={type} className={`form-control ${errors[name] ? "is-invalid" : ""}`} placeholder={placeholder} />
            )}
        />
        {errors[name] && <span className="text-danger">{errors[name].message}</span>}
    </div>
);

const Contact = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "srinivasan",
            email: "",
            phone: "",
            message: ""
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("Form submitted successfully!");
    };

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <form className="validate" onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    placeholder="Name"
                    errors={errors}
                />
                <InputField
                    name="email"
                    control={control}
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address"
                        }
                    }}
                    placeholder="Email"
                    errors={errors}
                />
                <InputField
                    name="phone"
                    control={control}
                    rules={{
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number"
                        }
                    }}
                    placeholder="Phone Number"
                    errors={errors}
                />
                <InputField
                    name="message"
                    control={control}
                    rules={{ required: "Message is required" }}
                    placeholder="Message"
                    type="textarea"
                    errors={errors}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;