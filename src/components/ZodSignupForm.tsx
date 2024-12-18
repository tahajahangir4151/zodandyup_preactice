import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "./ui/FormContainer";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { SocialButtons } from "./ui/SocialButtons";
import { type SignupFormData, zodSignupSchema } from "../lib/validations/SignUpSchema";

export const ZodSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(zodSignupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <FormContainer
      theme="blue"
      title="Sign Up"
      subTitle="You are only one step away to create account"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          {...register("username")}
          placeholder="Username"
          error={errors.username?.message}
          theme="blue"
        />
        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          theme="blue"
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
          theme="blue"
        />
        <Input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          error={errors.confirmPassword?.message}
          theme="blue"
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Sign Up →"}
        </Button>

        <p className="text-center text-sm text-white/80">
          Already have an account?{" "}
          <a href="#" className="text-blue-200 hover:text-white transition">
            Sign In
          </a>
        </p>
      </form>

      <SocialButtons />
    </FormContainer>
  );
};
export default ZodSignupForm;
