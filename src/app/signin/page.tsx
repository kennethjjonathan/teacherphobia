"use client";

import { InputPassword } from "@/components/InputPassword/InputPassword";
import { InputWithValidation } from "@/components/InputWithValidation/InputWithValidation";
import { Button } from "@/components/shadcn/ui/button";
import { supabase } from "@/lib/supabase-client/supabase";
import { toastError } from "@/lib/toast-error/toastError";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const SignInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (formData: z.infer<typeof signInSchema>) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      router.replace("/");
    } catch (error: unknown) {
      toastError(error);
    }
  };

  return (
    <div className="container flex w-full grow flex-col items-center justify-center space-y-5">
      <div className="w-full space-y-5">
        <h1 className="w-full text-center text-3xl font-bold lg:text-4xl">
          Sign In
        </h1>
        <p className="text-center text-sm lg:text-base">
          Don&apos;t have an account?
          <Button variant={"link"} asChild className="text-sm lg:text-base">
            <Link href={"/signup"}>Sign Up</Link>
          </Button>
        </p>
      </div>
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
          idShowPassword="signin-showpassword"
        />
        <Button
          size={"lg"}
          className="w-full"
          type="submit"
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
