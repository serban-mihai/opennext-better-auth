import { auth } from "./../../../../lib/auth/index";

const toNextJsHandler = () => {
  const handler = async (request: Request) => {
    return await auth().handler(request);
  };
  return {
    GET: handler,
    POST: handler,
  };
};

export const { POST, GET } = toNextJsHandler();
