import { contents } from "../../inputs";
import { ContentBox } from "./contentbox/ContentBox";
import "./content.scss"
export default function Content() {
  const contentJSX = contents.map((content, index) => {
    return <ContentBox content={content} index={index} />;
  });

  return <div className="content-wrap">{contentJSX}</div>;
}

