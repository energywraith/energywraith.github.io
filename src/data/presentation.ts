import type { ButtonVariant } from "@/utils/linkVariants";

interface Link {
  label: string;
  link: string;
  color: ButtonVariant;
}

interface SocialLink extends Omit<Link, "color"> {
  icon: string;
}

type Presentation = {
  title: string;
  description: string;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
    mail: SocialLink;
    instagram: SocialLink;
  };
  recentlyWorkedOn: Link;
  about: string[];
  profile: string;
};

const presentation: Presentation = {
  title: "Hey, I’m ***Adam!***",
  profile: "/profile.webp",
  description:
    "**Front-End Developer** with **3+** years of experience. Worked on cool stuff for companies like ***HSS***, ***Fingoweb*** and ***Trol***.",
  recentlyWorkedOn: {
    label: "Emotion 98.3",
    link: "https://emotion.miami/",
    color: "accent",
  },
  about: [
    "💻 Fluent in the language of web development, whether it's TypeScript, React, Next.js, Vue, or any other tech du jour. Always riding the wave of new trends.",
    "📚 Constantly learning, geeking out on tech. Also, cooking up personal projects like Emotion 98.3 and adding flair to local events like Drugie Życie.",
    "📷 Passionate about photography, I find immense joy in capturing the intricate details of the natural world.",
  ],
  socials: {
    github: {
      icon: "github",
      label: "Github",
      link: "https://github.com/energywraith",
    },
    linkedin: {
      icon: "linkedin",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/adam-jalocha/",
    },
    mail: {
      icon: "mail",
      label: "jalochadev@gmail.com",
      link: "mailto:jalochadev@gmail.com",
    },
    instagram: {
      icon: "instagram",
      label: "Instagram",
      link: "https://www.instagram.com/daysinek/",
    },
  },
};
export default presentation;
