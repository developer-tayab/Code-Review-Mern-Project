import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";

export default function CodeSide({ setReview }) {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(`// your code goes here
  function hello(){
  console.log("Hello World !");
  };`);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const handleSubmit = async () => {
    if (loading) return; // Prevent multiple clicks

    setLoading(true); // Disable button immediately
    try {
      const res = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      if (res) {
        setReview(res.data.response);
        console.log(res.data);
      }
    } catch (error) {
      console.error("Error fetching review:", error);
    } finally {
      setLoading(false); // Re-enable button after response
    }
  };

  return (
    <div className="relative h-screen overflow-auto w-full py-5 px-3 outline-2 outline-[#fa9200] bg-[#2D2D2D]">
      {/* Text Edit */}
      <div>
        <p className="bg-orange-400 text-black inline-block py-1 text-sm font-bold px-3 rounded-md shadow">
          Please Write & Paste Your Code here!
        </p>
        <div>
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(code, prism.languages.js, "javascript")
            }
            padding={10}
            onFocus={(e) => (e.target.style.outline = "none")}
            onBlur={(e) => (e.target.style.outline = "none")}
            style={{
              width: "100%",
              height: "100%",
              marginTop: "2%",
              backgroundColor: "#2D2D2D",
              color: "#FFF",
              fontSize: "14px",
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          />
        </div>
      </div>

      {/* Review Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`absolute bottom-6 right-6 bg-[#FFF] text-[#000000] transition-all 2s hover:font-bold inline-block py-2 px-3 rounded-md shadow ${
          loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      >
        {loading ? "Loading..." : "Get Review"}
      </button>
    </div>
  );
}
