import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

// Language imports
// import xml from "react-syntax-highlighter/dist/cjs/languages/hljs/xml";
// import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import applescript from "react-syntax-highlighter/dist/cjs/languages/hljs/applescript";
// import shell from "react-syntax-highlighter/dist/cjs/languages/hljs/shell";
import kotlin from "react-syntax-highlighter/dist/cjs/languages/hljs/kotlin";

// SyntaxHighlighter.registerLanguage("language-xml", xml);
// SyntaxHighlighter.registerLanguage("language-javascript", javascript);
SyntaxHighlighter.registerLanguage("language-applescript", applescript);
// SyntaxHighlighter.registerLanguage("language-shell", shell);
SyntaxHighlighter.registerLanguage("language-kotlin", kotlin);

const PostCode = ({ className, ...otherProps }) => {
  return (
    <SyntaxHighlighter language={className} style={docco} {...otherProps} />
  );
};

export default PostCode;
