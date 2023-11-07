import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../provider/AuthProviders";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, setLoading } = useContext(authContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    signIn(data.email, data.password)
      .then((res) => {
        // console.log(res.user);
        setLoading(true);
        navigate("/home");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="lg:w-4/12 w-full border rounded-lg p-7 bg-slate-300">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                {...register("password")}
                aria-invalid={errors.password ? "true" : "false"}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>

          <div className="form-control mt-6">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
          <p>
            <small>
              New here?
              <Link to="/signUp">Create a new Account</Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
