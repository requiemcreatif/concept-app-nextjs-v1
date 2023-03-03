import styled from "styled-components";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ContentWrapper, Button } from "@/styledComponents/dashboardStyled";
import CodeBlock from "../codeBlock/CodeBlock";

const style = {
  width: "250px",
  color: "#000",
};

const Card = ({ property: { description, code, language, title } }) => {
  const codeTrim = code.length > 20 ? code.substring(0, 30) + "..." : code;
  const codeDescription =
    description.length > 20 ? description.substring(0, 110) + "..." : description;

  return (
    <div>
      <Button
        type="button"
        className="btn-code"
        // onClick={() => {
        //   openModal();
        //   console.log("clicked");
        // }}
      >
        <div className="card">
          <div className="card-header">
            <div className="language-div">
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
            </div>
            <div>
              <h3 className="title">{title}</h3>
            </div>
          </div>

          <p className="code-description">{codeDescription}</p>
          <div className="code-block">
            <CodeBlock>{codeTrim}</CodeBlock>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default Card;
