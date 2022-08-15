export const authMiddleware = (req: any) => {
  let { token }: any = localStorage.getItem("token") || "";
  let url = req.url;
  if (!token && url.include("/profile")) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  if (token && url === "http://localhost:3000/") {
    return {
      redirect: {
        destination: "/profile",
        permanent: true,
      },
    };
  }
};
