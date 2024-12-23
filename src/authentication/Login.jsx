
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Googlelogin from './Googlelogin';

const Login = () => {

  const {createSignIn} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    createSignIn(data.email, data.password)
  }

    return (
        <div>
      <div className="">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col md:flex-row max-w-7xl mx-auto gap-16">
            <div className="hidden md:block">
              <img
                src="https://i.ibb.co.com/hBG2jcM/3094352-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="card shrink-0 border-2 border-orange-400 w-64 md:w-80 lg:w-[450px]">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-black">
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
                    <span className="label-text text-base text-black">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-orange-300 lg:w-96"
                    required
                  />
                  <label className="label">
                    <p className="text-sm lg:text-base">
                      Don't Have An Account? Please{" "}
                      <Link
                        to="/signup"
                        className="text-blue-600 font-bold cursor-pointer"
                      >
                        Sign Up...
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

export default Login;