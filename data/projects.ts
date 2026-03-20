export type ProjectEntry = {
  title: string;
  description: string;
  status: "Delivered" | "In Delivery" | "Planning";
  sector: string;
  outcome: string;
  link?: string;
  linkLabel?: string;
  featured?: boolean;
};

export const projects: ProjectEntry[] = [
  {
    title: "Service Business Website Rebuild",
    description:
      "A clearer, faster website structure for a local business that needed to explain its services properly, look more established, and generate better quality enquiries on mobile and desktop.",
    status: "Delivered",
    sector: "Local services",
    outcome: "Sharper positioning, better enquiry flow, and a more credible first impression.",
    featured: true
  },
  {
    title: "Quote and Follow-up Automation",
    description:
      "An internal workflow to reduce repetitive admin around incoming enquiries, quotations, reminders, and customer follow-up for a time-constrained small business.",
    status: "In Delivery",
    sector: "Trades and field services",
    outcome: "Less manual chasing, quicker response times, and more consistent communication.",
    featured: true
  },
  {
    title: "Booking and Customer Management Setup",
    description:
      "A joined-up booking and customer management workflow for an appointment-led business that needed fewer gaps between bookings, reminders, customer records, and day-to-day admin.",
    status: "Planning",
    sector: "Appointment-led businesses",
    outcome: "Simpler booking management and a cleaner operational setup as the business grows.",
    featured: true
  },
  {
    title: "Operations Dashboard and Reporting",
    description:
      "A lightweight internal dashboard to pull together business activity, reporting, and operational updates into one place for quicker decisions and less fragmented admin.",
    status: "Planning",
    sector: "Growing SMEs",
    outcome: "Clearer visibility across operations without introducing a heavy software stack."
  }
];
