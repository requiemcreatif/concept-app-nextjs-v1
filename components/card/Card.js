import styled from "styled-components";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import CodeBlock from "../codeBlock/CodeBlock";

const style = {
  width: "250px",
  color: "#000",
};

const Card = ({ property: { description, code, language, title } }) => {
  const codeTrim = code.length > 20 ? code.substring(0, 25) + "..." : code;
  const codeDescription =
    description.length > 20 ? description.substring(0, 70) + "..." : description;

  return (
    <button type="button" className=" hover:scale-x-105 hover:scale-y-105 transition-all 300s">
      <div className="card shadow-lg rounded-b-xl relative">
        <div className=" bg-custom-blue-card h-36 rounded-t-xl pt-4">
          <CodeBlock>{codeTrim}</CodeBlock>
        </div>
        <div className=" bg-white p-3 h-40 rounded-b-xl">
          {/* <div className="language-div flex self-start">
            {language === "JavaScript" ? (
              <div className="language javaScript icon">
                <IoLogoJavascript style={style} />
              </div>
            ) : language === "React" ? (
              <div className="language react icon">{language}</div>
            ) : language === "CSS" ? (
              <div className="language CSS icon">
                <SiCsswizardry />
              </div>
            ) : language === "Node" ? (
              <div className="language node icon">{language}</div>
            ) : language === "Express" ? (
              <div className="language express icon">{language}</div>
            ) : (
              <div className="language html icon">{language}</div>
            )}
          </div> */}
          <h3 className="title font-semibold text-left">{title}</h3>
          <p className="code-description pt-2 leading-5 text-sm text-left">{codeDescription}</p>

          <button className=" text-xs absolute left-3 bottom-3 font-semibold">Read more</button>
        </div>
      </div>
    </button>
  );
};

export default Card;
