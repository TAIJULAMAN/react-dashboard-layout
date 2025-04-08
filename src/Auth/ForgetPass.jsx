import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Add your password reset logic here
      console.log("Password reset requested for:", email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to verification code page
      navigate("/verify");
    } catch (error) {
      setError("Failed to send reset code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#202020] min-h-screen flex items-center justify-center p-5">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full lg:w-1/2 bg-[#202020] p-5 md:px-18 md:py-28 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-2xl">
            <h2 className="text-white text-2xl font-bold text-center mb-5">
              Forgot Password?
            </h2>
            <p className="text-gray-400 text-center mb-10">
              Enter your email address and we'll send you a verification code to reset your password.
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                <p className="text-red-500 text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="w-full">
                <label className="text-xl text-white mb-2 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 bg-gray-800 text-white border-2 border-gray-700 rounded-md outline-none mt-5 placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-1/2 mx-auto bg-[#0B704E] hover:bg-[#0B704E]/90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending Code..." : "Send Reset Code"}
                </button>

                <Link 
                  to="/login" 
                  className="text-[#0B704E] text-center text-lg hover:text-[#0B704E]/80 transition-colors"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
