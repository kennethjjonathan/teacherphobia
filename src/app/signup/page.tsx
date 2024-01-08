"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Link } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and with a minimum of 8 characters",
      ),
    confirmPassword: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and with a minimum of 8 characters",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm password must match",
    path: ["confirmPassword"],
  });

const SignUpPage = () => {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isPasswordVisible, setisPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmpasswordVisible] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (formData: z.infer<typeof signUpSchema>) => {};

  const togglePasswordVisibilty = () => setisPasswordVisible((prev) => !prev);

  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmpasswordVisible((prev) => !prev);

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center space-y-5">
      <div className="w-full space-y-5">
        <h1 className="w-full text-center text-3xl font-bold lg:text-4xl">
          Sign Up
        </h1>
        {!isEmailSent && (
          <p className="text-center lg:text-lg">
            Already have an account? <Link href="/signin">Sign In</Link>
          </p>
        )}
      </div>
      {!isEmailSent ? (
        <form
          className="w-full max-w-lg space-y-3 lg:space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            isInvalid={errors.email ? true : false}
            errorMessage={errors.email?.message}
            {...register("email")}
            type="email"
            label="Email"
            isRequired
            fullWidth
            isDisabled={isSubmitting}
          />
          <Input
            isInvalid={errors.password ? true : false}
            errorMessage={errors.password?.message}
            {...register("password")}
            type={isPasswordVisible ? "text" : "password"}
            label="Password"
            isRequired
            fullWidth
            isDisabled={isSubmitting}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={togglePasswordVisibilty}
              >
                {isPasswordVisible ? (
                  <EyeOff className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <Eye className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
          />
          <Input
            isInvalid={errors.confirmPassword ? true : false}
            errorMessage={errors.confirmPassword?.message}
            {...register("confirmPassword")}
            type={isConfirmPasswordVisible ? "text" : "password"}
            label="Confirm password"
            isRequired
            fullWidth
            isDisabled={isSubmitting}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleConfirmPasswordVisibility}
              >
                {isConfirmPasswordVisible ? (
                  <EyeOff className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <Eye className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
          />
          <Button
            color="primary"
            type="submit"
            fullWidth
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </form>
      ) : (
        <div className="space-y-3 text-sm lg:text-base">
          <p className="font-semibold">Check your email.</p>
          <p>
            We&apos;ve sent you an email, please confirm your account to
            continue.
          </p>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
