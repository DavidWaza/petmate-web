import ColumnTwo from "@/Components/Column-2/Column-2";
import AuthLayout from "../layout";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const Login = () => {
  return (
    <AuthLayout>
      <ColumnTwo>
        <div className="my-20">
          <h1 className="font-dmSans text-[#604533] lg:text-3xl text-2xl">
           Welcome back Itachi!
          </h1>
          <p className=" py-1 text-xl text-[#333333] opacity-80 ">
           Ready to start  the day?
          </p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "70%", marginTop: 4 },
            }}
            noValidate
            autoComplete="off"
            className="font-dmSans"
          >
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#604533",
                  "& fieldset": {
                    color: "#604533",
                    fontFamily: '"DM Serif Display", serif',
                  },
                  "&:hover .MuiOutlinedInput-root": {
                    borderColor: "#604533",
                  },
                  "&:focus .MuiOutlinedInput-root": {
                    borderColor: "#604533",
                  },
                  "&:active .MuiOutlinedInput-root": {
                    borderColor: "#604533",
                  },
                },
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#604533",
                  "& fieldset": {
                    color: "#604533",
                    fontFamily: '"DM Serif Display", serif',
                  },
                  "&:hover .MuiOutlinedInput-root": {
                    borderColor: "#604533",
                  },
                  "&:focus .MuiOutlinedInput-root": {
                    borderColor: "#604533",
                  },
                  "&:active .MuiOutlinedInput-root": {
                    borderColor: "#604533",
                  },
                },
              }}
            />
            <div className="flex gap-6 items-center w-full">
              <button className="bg-[#604533] w-full rounded-[50px] p-3 text-white shadow-lg font-poppins">
                Login
              </button>
              <p>or</p>
              <div className="rounded-full shadow-xl">
                <Image
                  src="/icons/google.svg"
                  alt=""
                  width={20}
                  height={20}
                  className=" w-20 flex justify-center items-center p-2 object-fit: cover"
                />
              </div>
              <div className="rounded-full shadow-xl">
                <Image
                  src="/icons/fb.svg"
                  alt=""
                  width={20}
                  height={20}
                  className=" w-20 flex justify-center items-center p-2 object-fit: cover"
                />
              </div>
            </div>
            <p className="text-[#604533] font-poppins">
              Don&apos;t have an account?{" "}
              <span className="font-bold">
                <Link href={"/auth/signup"}>Sign up</Link>
              </span>
            </p>
          </Box>
        </div>
        <div>
          <Image
            src="/images/login-dog.png"
            alt="sign-up dog"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </ColumnTwo>
    </AuthLayout>
  );
};
export default Login;
