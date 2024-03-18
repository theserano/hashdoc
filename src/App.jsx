import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Question = lazy(() => import("./pages/Question/Question"));
const HealthCareSignup = lazy(() => import("./pages/HealthCareSignUp/HealthCareSignup"));
const PatientSignUp = lazy(() => import("./pages/PatientSignUp/PatientSignUp"));
const Login = lazy(() => import('./pages/Login/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/login" element={<Login />} />
          <Route path="/health-care-sign-up" element={<HealthCareSignup />} />
          <Route path="/patient-sign-up" element={<PatientSignUp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
