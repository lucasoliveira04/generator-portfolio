import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login clicked", { email, password });
  };

  const handleGoogleLogin = () => console.log("Google login clicked");
  const handleGithubLogin = () => console.log("GitHub login clicked");

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-100">
      <div className="border rounded-lg w-[400px] p-6 bg-white shadow-lg flex flex-col">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

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

          <Link to="/criar-conta" className="text-blue-400 text-sm">
            Create Account
          </Link>
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
        >
          Login
        </button>

        <div className="flex items-center justify-center mb-4">
          <span className="border-b w-full border-gray-300"></span>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <span className="border-b w-full border-gray-300"></span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full py-2 mb-2 border rounded hover:bg-gray-100 transition cursor-pointer"
        >
          <FaGoogle className="mr-2 text-red-500" />
          Login with Google
        </button>

        <button
          onClick={handleGithubLogin}
          className="flex items-center justify-center w-full py-2 border rounded hover:bg-gray-100 transition cursor-pointer"
        >
          <FaGithub className="mr-2" />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};
