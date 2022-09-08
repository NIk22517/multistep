import { type } from "@testing-library/user-event/dist/type";

export const questions = [
  {
    section: 1,
    items: [
      {
        heading: "Welcome! First things first...",
        subtitle: "You can change then later.",
      },
      {
        label: "Full Name",
        type: "text",
        value: 'fullname'
      },
      {
        label: "Name",
        type: "text",
        value: 'name'

      },
    ],
  },


  {
    section: 2,
    items: [
      {
        heading: "Let's set up a home for all your work",
        subtitle: "You can always create another workspace later.",
      },
      {
        label: "Workspace Name",
        type: "text",
        value: 'workspace'

      },
      {
        label: "Workspace URL (optional)",
        type: "url",
        value: 'url'

      },
    ],
  },


  {
    section: 3,
    items: [
      {
        heading: "How are you planning to use?",
        subtitle: "We'll streamline your setup experience accordingly",
      },
      {
        label: "For Myself",
        type: "checkbox",
        value: 'myself'

      },
      {
        label: "With my team",
        type: "checkbox",
        value: 'team'

      },
    ],
  },

  {
    section: 4,
    items: [
      {
        heading: "Congratulations",
        subtitle: "you have completed onboarding, you can start using our workspace",
      },
    ],
  },
];
