type Route = {
  label: string;
  pathname: string;
};

const routes: Route[] = [
  {
    label: "Works",
    pathname: "/works",
  },
  // {
  //   label: "Photos",
  //   pathname: "/photos",
  // },
  {
    label: "Blog",
    pathname: "/posts",
  },
];

export { routes };
