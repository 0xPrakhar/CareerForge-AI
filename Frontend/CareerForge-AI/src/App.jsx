import { RouterProvider } from "react-router-dom";   // ✅ use react-router-dom
import { router } from "./routes/AppRouter.jsx";

import "./App.css";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
