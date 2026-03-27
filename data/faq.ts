export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSection = {
  title: string;
  eyebrow: string;
  description: string;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    title: "General Questions",
    eyebrow: "General",
    description:
      "Broad answers for businesses looking for websites, software, automation, and digital systems support.",
    items: [
      {
        question: "What does Pebbs.app do?",
        answer:
          "Pebbs.app helps businesses improve how they look, work, and grow with website design and development, custom software development, business automation, booking systems, CRM systems, AI assistants, and practical digital support."
      },
      {
        question: "What kind of businesses do you work with?",
        answer:
          "We work with small and medium-sized businesses, sole traders, service businesses, trades, local companies, growing teams, and owner-led businesses that want better websites, clearer systems, and less manual admin."
      },
      {
        question: "Do you offer website design and development for small businesses?",
        answer:
          "Yes. We build professional websites that help businesses look credible, explain what they do clearly, and turn visitors into enquiries, calls, or bookings."
      },
      {
        question: "Can you build custom software for my business?",
        answer:
          "Yes. We build bespoke software around the way a business actually works, including internal tools, portals, dashboards, quoting tools, customer workflows, and other systems that save time and reduce manual work."
      },
      {
        question: "What is business automation?",
        answer:
          "Business automation means setting up routine work so it happens automatically. That can include reminders, follow-ups, lead handling, appointment confirmations, reporting, customer updates, and other day-to-day processes."
      },
      {
        question: "How can automation help a small business?",
        answer:
          "Automation can reduce admin, improve response times, cut down on missed steps, and help a business run more smoothly without needing extra staff for repetitive work."
      },
      {
        question: "Do you build booking and appointment systems?",
        answer:
          "Yes. We can build or improve booking systems that make it easier for customers to book and easier for the business to manage availability, appointments, reminders, and changes."
      },
      {
        question: "Can you help with CRM and customer management systems?",
        answer:
          "Yes. We build systems for managing leads, customers, appointments, communication, and ongoing relationships in a more organised way, instead of spreading everything across messages, notes, and different apps."
      },
      {
        question: "Do you offer AI assistants and chatbots for businesses?",
        answer:
          "Yes, where they are useful. We focus on practical AI tools that help businesses respond faster, capture enquiries, answer common questions, and support internal workflows."
      },
      {
        question: "Can you improve an existing website or system instead of building from scratch?",
        answer:
          "Yes. In many cases, improving what already exists is the best option. That might mean refining a website, fixing a workflow, modernising an old system, or joining up tools that are currently disconnected."
      },
      {
        question: "Do you work with sole traders, tradespeople, and service businesses?",
        answer:
          "Yes. Our services are well suited to trades, appointment-led businesses, local service providers, and owner-led businesses that want more enquiries, less admin, and better systems."
      },
      {
        question: "Do you only work with businesses in Liverpool?",
        answer:
          "No. Pebbs.app is based in Liverpool, but we work with businesses across the UK and can also work remotely with clients further afield."
      },
      {
        question: "Can you work remotely with businesses outside the UK?",
        answer:
          "Yes. Many websites, software projects, automation systems, and digital support services can be delivered remotely."
      },
      {
        question: "Do you offer branding, graphic design, SEO, and digital marketing support?",
        answer:
          "Yes. These are support services around the core work of websites, software, and systems. We can help with branding, graphic design, social media support, SEO, and digital marketing where they improve the overall result."
      },
      {
        question: "How do I know what service I need?",
        answer:
          "Usually the starting point is the biggest business problem. That might be a weak website, too much admin, poor booking flow, slow responses, missed enquiries, or customer information spread across too many places."
      },
      {
        question: "How do we get started?",
        answer:
          "The best place to start is a conversation about what the business does, where the friction is, and what needs improving first. From there, the right scope becomes clearer."
      }
    ]
  },
  {
    title: "Liverpool and Merseyside",
    eyebrow: "Local",
    description:
      "Answers for businesses that want to work with a Liverpool-based digital business more closely.",
    items: [
      {
        question: "Do you work with businesses in Liverpool and Merseyside?",
        answer:
          "Yes. Pebbs.app is Liverpool-based and works with businesses in Liverpool, Merseyside, and the surrounding area, as well as clients further afield."
      },
      {
        question: "Can you help a local Liverpool business get a better website?",
        answer:
          "Yes. We help local businesses improve how they present themselves online with clearer, more professional websites that are easier for customers to understand and act on."
      },
      {
        question: "Do you work with local trades and service businesses in Merseyside?",
        answer:
          "Yes. Trades, service businesses, and appointment-led businesses are a strong fit for website improvements, booking systems, customer management tools, and automation."
      },
      {
        question: "Can you help a Liverpool business reduce admin and save time?",
        answer:
          "Yes. That is one of the main reasons businesses come to us. Better systems and automation can reduce repetitive admin, improve communication, and make daily work easier to manage."
      },
      {
        question: "Why work with a Liverpool-based digital business?",
        answer:
          "For many businesses, it helps to work with someone nearby who understands the local market, can communicate clearly, and can support the business in a practical, commercially grounded way."
      },
      {
        question: "Do local businesses have to choose between local support and modern digital systems?",
        answer:
          "No. You can have both. Pebbs.app combines practical business support with modern websites, software, automation, and digital systems."
      }
    ]
  }
];
