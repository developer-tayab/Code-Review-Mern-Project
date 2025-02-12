import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function ReviewSide({ review }) {
  return (
    <div className="overflow-auto w-full py-5 px-3">
      <p className="bg-green-400 text-black inline-block py-1 text-sm font-bold px-3 rounded-md shadow">
        Here is the review of your code and improvements!
      </p>
      <div className="text-sm text-black bg-gradient-to-r from-orange-300 to-white w-full p-3  rounded-md shadow mt-5">
        {review ? (
          <Markdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <pre className={`language-${match[1]}`}>
                    <code {...props}>{children}</code>
                  </pre>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {review}
          </Markdown>
        ) : (
          "No review available. Please submit your code"
        )}
      </div>
    </div>
  );
}
