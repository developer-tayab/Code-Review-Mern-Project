import { useEffect, useState } from "react";
import CodeSide from "./components/CodeSide";
import ReviewSide from "./components/ReviewSide";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";
function App() {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(review);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen overflow-hidden flex-col gap-1.5 bg-gradient-to-r from-orange-300 to-white flex justify-center items-center">
          <motion.span
            initial={{ opacity: 100, scale: 1 }}
            animate={{ scale: 200, opacity: 50 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FaCode fontSize={100} className=" text-black " />
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl"
          >
            Welcome to the Code Review Web App
          </motion.p>
        </div>
      ) : (
        <main className="grid grid-cols-2  text-white font-sans gap-2.5 min-h-screen w-full bg-[#171717]  ">
          <CodeSide setReview={setReview} />
          <ReviewSide review={review} />
        </main>
      )}
    </>
  );
}

export default App;
