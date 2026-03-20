export type ServiceEntry = {
  title: string;
  description: string;
  priority: "Primary" | "Support";
};

export const services: ServiceEntry[] = [
  {
    title: "Website Design and Development",
    description:
      "Professional websites built to help businesses look credible, explain what they do clearly, and turn visitors into enquiries.",
    priority: "Primary"
  },
  {
    title: "Custom Software Development",
    description:
      "Bespoke software built around your business, from internal tools and portals to systems that save time and reduce manual work.",
    priority: "Primary"
  },
  {
    title: "Business Automation",
    description:
      "Automation for repetitive tasks, follow-ups, lead handling, reminders, reporting, and other day-to-day business processes.",
    priority: "Primary"
  },
  {
    title: "AI Assistants and Chatbots",
    description:
      "Practical AI tools that help businesses respond faster, capture enquiries, support customers, and improve internal workflows.",
    priority: "Primary"
  },
  {
    title: "Booking and Appointment Systems",
    description:
      "Booking systems that make it easier for customers to schedule appointments and easier for businesses to manage availability.",
    priority: "Primary"
  },
  {
    title: "CRM and Customer Management Systems",
    description:
      "Systems for managing leads, customers, appointments, communication, and ongoing business relationships in one place.",
    priority: "Primary"
  },
  {
    title: "Branding and Graphic Design",
    description:
      "Clean, professional design for websites, branding, digital assets, and marketing materials.",
    priority: "Support"
  },
  {
    title: "Social Media Support",
    description:
      "Practical support for content, design, and systems that help businesses stay active and presentable online.",
    priority: "Support"
  },
  {
    title: "SEO and Digital Marketing",
    description:
      "Straightforward digital marketing support to help businesses improve visibility, attract better enquiries, and get more from their website.",
    priority: "Support"
  }
];
