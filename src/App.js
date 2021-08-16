import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/inlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
