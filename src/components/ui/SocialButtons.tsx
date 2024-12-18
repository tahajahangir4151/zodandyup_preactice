import { Github, Twitter, Facebook, MessageCircle } from "lucide-react";
import { Button } from "./Button";

export const SocialButtons = () => {
  const socialIcons = [
    { Icon: Github, label: "GitHub" },
    { Icon: Facebook, label: "Facebook" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: MessageCircle, label: "Chat" },
  ];

  return (
    <div className="mt-8">
      <p className="text-center text-white/60 mb-4">Or continue with</p>
      <div className="flex justify-center space-x-4">
        {socialIcons.map(({ Icon, label }) => (
          <Button key={label} variant="social">
            <Icon className="w-5 h-5 text-white" aria-label={label} />
          </Button>
        ))}
      </div>
    </div>
  );
};
