import './App.css';
import { RouterProvider, createHashRouter } from "react-router-dom";
import { appRoutes } from "./config/appRoutes.config";

function App() {
  const router = createHashRouter(appRoutes);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
