import { type ReactNode } from "react";
import {motion} from "framer-motion"
import { Rocket } from "lucide-react";

interface FormContainerProps {
  children: ReactNode;
  title: string;
  subTitle: string;
  theme: "blue" | "purple";
}

export const FormContainer =({children, title, subTitle, theme}:FormContainerProps)=>{
const gradientColors={
    blue : 'from-blue-600 to-purple-600',
    purple: 'from-purple-600 to-blue-600'
}

return (
  <div
    className={`min-h-screen bg-gradient-to-br ${gradientColors[theme]} flex items-center justify-center p-4`}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md"
    >
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`inline-block p-3 bg-${theme}-600 rounded-2xl mb-4`}
          >
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className={`text-${theme}-100`}>{subTitle}</p>
        </div>
        {children}
      </div>
    </motion.div>
  </div>
);
}