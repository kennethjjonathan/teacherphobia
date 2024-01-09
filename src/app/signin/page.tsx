"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Link } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const SignInPage = () => {
  const [isPasswordVisible, setisPasswordVisible] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit = async (formData: z.infer<typeof signInSchema>) => {};
  const togglePasswordVisibilty = () => setisPasswordVisible((prev) => !prev);
  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center space-y-5">
      <div className="w-full space-y-5">
        <h1 className="w-full text-center text-3xl font-bold lg:text-4xl">
          Sign In
        </h1>
        <p className="text-center lg:text-lg">
          Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </div>
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
        <Button
          color="primary"
          type="submit"
          fullWidth
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
