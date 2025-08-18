import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Signup: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    let emailError = "";
    let passwordError = "";

    if (!form.email) {
      emailError = "Email is required.";
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      emailError = "Please enter a valid email address.";
      valid = false;
    }

    if (!form.password) {
      passwordError = "Password is required.";
      valid = false;
    } else if (form.password.length < 8) {
      passwordError = "Password must be at least 8 characters.";
      valid = false;
    }

    setErrors({ email: emailError, password: passwordError });
    return valid;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Signup data:", form);
      alert("Sign Up Clicked");
    }
  };

  const handleClear = () => {
    setForm({
      name: "",
      email: "",
      password: "",
    });
    setErrors({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputField
              label="Full Name"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              variant="outlined"
              size="md"
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              variant="outlined"
              size="md"
              errorMessage={errors.email}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              variant="outlined"
              size="md"
              passwordToggle
              helperText="Password must be at least 8 characters."
              errorMessage={errors.password}
            />
            <Button type="submit">Sign Up</Button>
            <Button
              type="button"
              onClick={handleClear}
              className="mt-2 bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
            >
              Clear All
            </Button>
          </form>

          <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-4">
            Already have an account?{" "}
            <a className="text-blue-400 hover:underline cursor-pointer">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;