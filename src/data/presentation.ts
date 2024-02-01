type Social = {
  label: string;
  link: string;
};

type Presentation = {
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  title: "Hi, I’m Adam 👋",
  profile: "/profile.webp",
  description: "asd",
  socials: [
    {
      label: "Github",
      link: "https://github.com/energywraith",
    },
  ],
};

export default presentation;
