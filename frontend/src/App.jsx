import { useState } from "react";
import CodeSide from "./components/CodeSide";
import ReviewSide from "./components/ReviewSide";

function App() {
  const [review, setReview] = useState(null);
  console.log(review);

  return (
    <>
      <main className="grid grid-cols-2  text-white font-sans gap-2.5 min-h-screen w-full bg-[#171717]  ">
        <CodeSide setReview={setReview} />
        <ReviewSide review={review} />
      </main>
    </>
  );
}

export default App;
