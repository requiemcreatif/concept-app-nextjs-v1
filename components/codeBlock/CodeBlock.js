import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, prism, dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ children, language = "javascript" }) {
  return (
    <div className="codeBlock">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLines={true}
        customStyle={{
          // position: "absolute",
          // top: "20px",
          // left: "0",
          // right: "0",
          margin: "0 auto",
          backgroundColor: "#1d293b",
          width: "90%",
          height: "80px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: ".9rem",
          fontFamily: "monospaced",
          wordSpacing: "0rem",
        }}
        wrapLongLines={true}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
