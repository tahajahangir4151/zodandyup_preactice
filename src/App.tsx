import { useState } from "react";
import { motion } from "framer-motion";
import ZodLoginForm from "./components/ZodLoginForm";
import YupLoginForm from "./components/YupLoginForm";
import ZodSignupForm from "./components/ZodSignupForm";
import YupSignUpForm from "./components/YupSignUpForm";

function App() {
  const [activeForm, setActiveForm] = useState<"zod" | "yup">("zod");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative">
      <div className="fixed top-4 right-4 z-10 bg-white/20 backdrop-blur-lg rounded-lg p-2">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveForm("zod")}
              className={`px-4 py-2 rounded-lg transition ${
                activeForm === "zod"
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              Zod
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveForm("yup")}
              className={`px-4 py-2 rounded-lg transition ${
                activeForm === "yup"
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              Yup
            </motion.button>
          </div>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 rounded-lg transition ${
                isLogin
                  ? "bg-green-600 text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 rounded-lg transition ${
                !isLogin
                  ? "bg-green-600 text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              Signup
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        key={`${activeForm}-${isLogin}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isLogin ? (
          activeForm === "zod" ? (
            <ZodLoginForm />
          ) : (
            <YupLoginForm />
          )
        ) : activeForm === "zod" ? (
          <ZodSignupForm />
        ) : (
          <YupSignUpForm />
        )}
      </motion.div>
    </div>
  );
}

export default App;
