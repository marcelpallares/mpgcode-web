import { androidstudio } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

// Language imports
import html from "react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars";
import xml from "react-syntax-highlighter/dist/cjs/languages/hljs/xml";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import kotlin from "react-syntax-highlighter/dist/cjs/languages/hljs/kotlin";
import swift from "react-syntax-highlighter/dist/cjs/languages/hljs/swift";
import applescript from "react-syntax-highlighter/dist/cjs/languages/hljs/applescript";
import shell from "react-syntax-highlighter/dist/cjs/languages/hljs/shell";

SyntaxHighlighter.registerLanguage("language-html", html);
SyntaxHighlighter.registerLanguage("language-xml", xml);
SyntaxHighlighter.registerLanguage("language-js", js);
SyntaxHighlighter.registerLanguage("language-shell", shell);
SyntaxHighlighter.registerLanguage("language-kotlin", kotlin);
SyntaxHighlighter.registerLanguage("language-swift", swift);
SyntaxHighlighter.registerLanguage("language-applescript", applescript);

const PostCode = ({ className, children }) => {
  function replaceLast(text, y, z) {
    var a = text.split("");
    a[text.lastIndexOf(y)] = z;
    return a.join("");
  }

  children = replaceLast(children, "\n", "");

  return (
    <SyntaxHighlighter
      PreTag="div"
      language={className}
      style={androidstudio}
      showLineNumbers={true}
      wrapLines={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default PostCode;
