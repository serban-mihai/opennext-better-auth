import { Button } from "@heroui/react";

const Homepage = () => {
  return (
    <div className="bg-slate-700 size-full flex items-center justify-center space-x-4 py-4">
      <p className="text-white font-semibold">random.com</p>
      <Button>Random</Button>
    </div>
  );
};

export default Homepage;
