import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Googlelogin from "./Googlelogin";
import useAxiospublic from "../hooks/useAxiospublic";

const Register = () => {
  const { createUser, googleLogin, user } = useAuth();
  const axiosPublic = useAxiospublic()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      role: data.role,
      status: data.role === 'buyer' ? 'approved' : 'pending',
      wishlist: [],
    }
    await createUser(data.email, data.password)
      const res = await axiosPublic.post('/users', userInfo)
      if(res?.data.insertedId){
        console.log('registration successful');
      }
  };

  return (
    <div>
      <div className="">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col md:flex-row-reverse max-w-7xl mx-auto gap-16">
            <div className="hidden md:block">
              <img
                src="https://i.ibb.co.com/Kz1CYVF/6325230-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="card shrink-0 border-2 border-orange-400 w-64 md:w-80 lg:w-[450px]">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="file"
                    {...register("image")}
                    className="outline-none px-3 py-2 rounded-lg border-2 border-orange-300 lg:w-96"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your Name"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-orange-300 lg:w-96"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-orange-300 lg:w-96"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      pattern: /^(?=.*[A-Z]).{6,}$/,
                    })}
                    placeholder="Password"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-orange-300 lg:w-96"
                    required
                  />
                  <div className="py-1">
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have 6 characters with one uppercase word
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black text-base">
                        Confirm Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) => {
                          if (watch("password") !== value) {
                            return "your password didn't matched";
                          }
                        },
                      })}
                      className="outline-none px-3 py-2 rounded-lg border-2 border-orange-300 lg:w-96"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 py-2 font-medium">
                        Both passwords must be matched
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black text-base">
                        Role
                      </span>
                    </label>
                    <select
                    {...register('role', {required: true})}
                    className="select outline-none px-3 py-2 rounded-lg border-2 border-orange-300 lg:w-96">
                      <option value="buyer">Buyer</option>
                      <option value='seller'>Seller</option>
                    </select>
                    {errors.role && <p>You must select a role</p>}
                  </div>
                  <label className="label">
                    <p className="text-sm lg:text-base">
                      Already Have An Account? Please{" "}
                      <Link
                        to="/login"
                        className="text-blue-600 font-bold cursor-pointer"
                      >
                        Sign In...
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-orange-600 hover:bg-orange-400 w-40 mx-auto text-white text-base">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="mx-auto pb-7">
                <Googlelogin></Googlelogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
