import { Input, Button } from "@heroui/react";

const SignIn = () => {
  return (
    <div>
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Button>Sign In</Button>
    </div>
  );
};

export default SignIn;
