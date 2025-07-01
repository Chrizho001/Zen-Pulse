import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import AuthLayout from "./layout/AuthLayout";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmailVerification from "./pages/EmailVerification";
import ActivateAccount from "./pages/ActivateAccount";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-email" element={<EmailVerification />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="activate-account" element={<ActivateAccount />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;