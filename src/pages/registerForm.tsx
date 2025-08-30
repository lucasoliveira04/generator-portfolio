import { useState } from "react";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateAccount = () => {
    console.log("Create account clicked", { email, password, confirmPassword });
  };

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-100">
      <div className="border rounded-lg w-[400px] p-6 bg-white shadow-lg flex flex-col">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center mb-4 justify-between">
          <div>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-600">
              Show Password
            </label>
          </div>
        </div>

        <button
          onClick={handleCreateAccount}
          className="w-full py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};
