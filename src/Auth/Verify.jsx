import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VerificationCode() {
  const [code, setCode] = useState(new Array(4).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if current field is filled
    if (value && index < code.length - 1) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current field is empty
    if (e.key === "Backspace" && !code[index] && index > 0) {
      e.preventDefault();
      document.getElementById(`code-${index - 1}`).focus();
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setError("");

    try {
      // Add your resend code logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTimeLeft(60);
    } catch (error) {
      setError("Failed to resend code. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    const verificationCode = code.join("");
    if (verificationCode.length !== 4) {
      setError("Please enter all digits");
      return;
    }

    setIsSubmitting(true);
    try {
      // Add your verification logic here
      console.log("Verifying code:", verificationCode);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/reset-password");
    } catch (error) {
      setError("Invalid verification code. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#202020] min-h-screen flex items-center justify-center p-5">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full lg:w-1/2 bg-[#202020] p-5 md:px-18 md:py-28 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-2xl">
            <h2 className="text-white text-2xl font-bold text-center mb-5">
              Verify Your Email
            </h2>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-gray-400 mb-10 w-full md:w-2/3">
                We've sent a verification code to your email. Please enter the 4-digit code below.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                <p className="text-red-500 text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex justify-center gap-4">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-14 h-14 text-center text-2xl font-bold bg-gray-800 text-white border-2 border-gray-700 rounded-lg outline-none focus:border-[#0B704E] transition-colors"
                    required
                  />
                ))}
              </div>

              <div className="flex flex-col items-center space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-1/2 bg-[#0B704E] hover:bg-[#0B704E]/90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Verifying..." : "Verify Code"}
                </button>

                <div className="text-center">
                  <p className="text-gray-400">
                    Didn't receive the code?
                    {timeLeft > 0 ? (
                      <span className="text-gray-500 ml-2">
                        Resend in {timeLeft}s
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendCode}
                        disabled={isResending}
                        className="text-[#0B704E] hover:text-[#0B704E]/80 ml-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isResending ? "Resending..." : "Resend Code"}
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationCode;