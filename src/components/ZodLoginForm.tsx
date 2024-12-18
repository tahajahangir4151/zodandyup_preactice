import React from "react";
import { useForm } from "react-hook-form";
import {
  zodLoginSchema,
  type LoginFormData,
} from "../lib/validations/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "./ui/FormContainer";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { SocialButtons } from "./ui/SocialButtons";

const ZodLoginForm:React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(zodLoginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <FormContainer
      theme="blue"
      title="Sign In"
      subTitle="Please Enter Your Credential to Sign In"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          {...register("username")}
          placeholder="UserName"
          error={errors.username?.message}
          theme="blue"
        />
        <Input
          {...register("password")}
          placeholder="Password"
          error={errors.password?.message}
          theme="blue"
        />
        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm text-blue-100 hover:text-white transition"
          >
            Forgot Password?
          </a>
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign In →"}
        </Button>
      </form>
      <SocialButtons />
    </FormContainer>
  );
};

export default ZodLoginForm;
