import { AppProvider } from "./hooks";
import { Router } from "./router";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
