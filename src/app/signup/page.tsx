"use client";

import { InputPassword } from "@/components/InputPassword/InputPassword";
import { InputWithValidation } from "@/components/InputWithValidation/InputWithValidation";
import { Button } from "@/components/shadcn/ui/button";
import { supabase } from "@/lib/supabase-client/supabase";
import { toastError } from "@/lib/toast-error/toastError";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (formData: z.infer<typeof signUpSchema>) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
      setIsEmailSent(true);
    } catch (error: unknown) {
      toastError(error);
    }
  };

  return (
    <div className="container flex w-full grow flex-col items-center justify-center space-y-3">
      <div className="w-full space-y-3">
        <h1 className="w-full text-center text-3xl font-bold lg:text-4xl">
          Sign Up
        </h1>
        {!isEmailSent && (
          <div className="flex w-full items-center justify-center text-sm text-muted-foreground lg:text-base">
            <p>Already have an account?</p>
            <Button variant={"link"} asChild className="text-sm lg:text-base">
              <Link href={"/signin"}>Sign In</Link>
            </Button>
          </div>
        )}
      </div>
      {!isEmailSent ? (
        <form
          className="w-full max-w-lg space-y-2 lg:space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputWithValidation
            isInvalid={errors.email}
            invalidMessage={errors.email?.message}
            {...register("email")}
            placeholder="Email"
            type="email"
            disabled={isSubmitting}
            required
          />
          <InputPassword
            isInvalid={errors.password}
            invalidMessage={errors.password?.message}
            {...register("password")}
            placeholder="Password"
            disabled={isSubmitting}
            required
            idShowPassword="signup-showpassword"
          />
          <InputPassword
            isInvalid={errors.confirmPassword}
            invalidMessage={errors.confirmPassword?.message}
            {...register("confirmPassword")}
            placeholder="Confirm password"
            disabled={isSubmitting}
            required
            idShowPassword="signup-showconfirmpassword"
          />
          <Button
            size={"lg"}
            className="w-full text-sm lg:text-base"
            type="submit"
            disabled={isSubmitting}
          >
            Sign Up
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
