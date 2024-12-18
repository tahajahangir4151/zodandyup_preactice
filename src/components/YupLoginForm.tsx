import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer } from "./ui/FormContainer";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { SocialButtons } from "./ui/SocialButtons";
import {
  yupLoginSchema,
  type LoginFormData,
} from "../lib/validations/LoginSchema";

const YupLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(yupLoginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <FormContainer
      theme="purple"
      title="Sign In"
      subTitle="Please Enter Your Credential to Sign In"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          {...register("username")}
          placeholder="Username"
          error={errors.username?.message}
          theme="purple"
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
          theme="purple"
        />
        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm text-purple-100 hover:text-white transition"
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

export default YupLoginForm;
