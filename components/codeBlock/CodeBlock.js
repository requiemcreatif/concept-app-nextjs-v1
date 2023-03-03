import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ children, language = "javascript" }) {
  return (
    <div className="codeBlock">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        //showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          margin: "0 auto",
          backgroundColor: "#1d293b",
          maxWidth: "260px",
          width: "100%",
          height: "10rem",
          padding: "2rem",
          borderRadius: "1rem",
          fontSize: "1.2rem",
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
