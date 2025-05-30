import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Lazy load chapter components
const Chapter03 = lazy(() => import("./pages/Chapter03"));
const Chapter04 = lazy(() => import("./pages/Chapter04"));
const Chapter05 = lazy(() => import("./pages/Chapter05"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/03/*" element={<Chapter03 />} />
          <Route path="/04/*" element={<Chapter04 />} />
          <Route path="/05/*" element={<Chapter05 />} />
          {/* <Route path="/" element={<Navigate to="/03" replace />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
