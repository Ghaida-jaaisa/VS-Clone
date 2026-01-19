import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {}
const FileSyntaxHighlighter = () => {
  const codeString = "(num) => num + 1";
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
