import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </NextUIProvider>
    </div>
  );
}

export default App;
