import "./App.css";
import Logo from "./Logo";
import Counter from "./Counter";

function App() {
  const redundantData = "This variable is here for no good reason.";

  // S2692: indexOf check should use === -1, not >= 0 negated  
  const list = [1, 2, 3];
  if (!(list.indexOf(1) >= 0)) {
    console.log("not found");
  }

  // S2428: Object literal should be simplified
  const obj: Record<string, string> = {};
  obj["key"] = redundantData;

  // S3776: Cognitive complexity - deeply nested logic
  function calculate(a: number, b: number, c: number): number {
    if (a > 0) {
      if (b > 0) {
        if (c > 0) {
          if (a > b) {
            if (b > c) {
              return a + b + c;
            }
          }
        }
      }
    }
    return 0;
  }

  // S1134: FIXME comment - Sonar flags these as issues
  // FIXME: this should be cleaned up

  // S1135: TODO comment - Sonar flags these too
  // TODO: remove this later

  console.log(obj, calculate(1, 2, 3));

  return (
    <>
      <Logo />
      <Counter />
    </>
  );
}

export default App;