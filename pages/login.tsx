import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    
  

      <div
        className="relative flex h-screen w-screen flex-col bg-black
    md:items-center md:justify-center md:bg-transparent"
      >
        
        <Head>
          <title>Netflix - Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className="-z-10">
          <Image
            src="/images/login-bg.jpg"
            objectFit="cover"
            layout="fill"
            className="!hidden opacity-60 sm:!inline"
          />
        </div>

        <div className="absolute left-6 top-0 w-28 h-28 md:w-40 md:h-40 bg-transparent">
        <Image
          layout="fill"
          objectFit="contain"
          src="/images/netflix-logo.svg"
        />
      </div>

        <form className="space-y-8 bg-black/75  px-8 py-8  md:px-16 md:py-10 
        rounded-md md:h-auto h-screen flex flex-col justify-center ">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <div className="space-y-4 flex flex-col">
            <label>
              <input
                className="rounded-md bg-[#333] outline-none p-3 w-full border-0"
                type="email"
                placeholder="Email or phone number"
              />
            </label>
            <label>
              <input
                className="rounded-md bg-[#333] outline-none p-3 w-full border-0"
                type="password"
                placeholder="Password"
              />
            </label>
          </div>

          <div className="">
            <button
              className="h-12 rounded-md w-full bg-[#e50914]
        font-bold mt-4 hover:opacity-90 transition"
            >
              Sign In
            </button>

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center space-x-1.5">
                <input type="checkbox" className="" />
                <span className="text-xs text-[#b3b3b3]">Remember me</span>
              </label>
              <span className="cursor-pointer hover:underline text-xs text-[#b3b3b3]">
                Need help?
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-[#b3b3b3]">
              New to Netflix?{" "}
              <span className="font-semibold hover:underline cursor-pointer text-white">
                Sign up now.
              </span>
            </p>
            <p className="text-xs text-[#b3b3b3] mt-4 max-w-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="hover:underline text-[#0071eb]">
                Learn more.
              </span>
            </p>
          </div>
        </form>
      </div>

  );
}

export default Login;
