import { Button } from "@common/components/forms/button";
import { Input } from "@common/components/forms/input";
import { PATHS } from "@common/routes/paths";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(PATHS.protected.home);
  };

  return (
    <div className="">
      <div className="mb-[2.188rem]">
        <h2 className="text-[#090914] font-bold text-3xl mb-1">Login</h2>
        <p className="text-sm text-[#52525B]">For Authorized Access only!</p>
      </div>
      <form className="flex flex-col gap-y-5" onSubmit={handleLogin}>
        <Input labelText="Partner ID" />
        <Input labelText="Master key" name="password" type="password" />
        <div className="flex justify-between items-center">
          <div className="">
            <label
              htmlFor="remember_me"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                name="remember_me"
                id="remember_me"
                className="mr-2"
              />
              <span className="text-[#18181B] text-sm">Remember me</span>
            </label>
          </div>
          <div className="">
            <p className="text-sm text-[#18181B]">
              Forgot Password?{" "}
              <Link className="font-bold" to="/">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
        <Button variant="secondary">Log in</Button>
      </form>
    </div>
  );
}

export default Login;
