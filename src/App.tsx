import Navigator from "./Router";
import { Provider } from "./utils/store";

function App() {
  return (
    <Provider>
      <Navigator />
    </Provider>
  );
}

export default App;
