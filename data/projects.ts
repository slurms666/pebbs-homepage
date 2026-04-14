export type ProjectEntry = {
  title: string;
  description: string;
  status: "Delivered" | "In Development" | "Planning";
  sector: string;
  outcome: string;
  link?: string;
  linkLabel?: string;
  downloadHref?: string;
  downloadLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
};

export const projects: ProjectEntry[] = [
  {
    title: "WFH",
    description:
      "A free browser-based utility for people who work from home or need to keep a locked-down work machine awake and active without installing software.",
    status: "Delivered",
    sector: "Free utility",
    outcome:
      "Small, natural pointer movement while active to help prevent sleep during presentations, screen sharing, monitoring, long downloads, long-form reading, or remote sessions.",
    link: "https://wfh.pebbs.app",
    linkLabel: "Open app",
    featured: true
  },
  {
    title: "TXT World",
    description:
      "A procedurally generated alien world in ASCII art that uses a seed to create new terrain and lets the user move through the world with familiar first-person controls.",
    status: "Delivered",
    sector: "Experimental app",
    outcome:
      "Seed-based terrain generation with WASD movement and mouse-look navigation in a lightweight browser experience.",
    link: "https://txtworld.pebbs.app",
    linkLabel: "Explore project",
    imageSrc: "/projects/txt-world.png",
    imageAlt: "Preview image for the TXT World ASCII terrain project",
    featured: true
  },
  {
    title: "3310",
    description:
      "A browser-based emulator of classic Nokia 3310 games, rebuilt as a lightweight web project with the same simple, familiar arcade feel.",
    status: "Delivered",
    sector: "Experimental app",
    outcome:
      "Classic mobile gameplay recreated in the browser without requiring any install or setup.",
    link: "https://3310.pebbs.app/",
    linkLabel: "Open emulator",
    imageSrc: "/projects/3310.png",
    imageAlt: "Preview image for the 3310 emulator project"
  },
  {
    title: "Flappy Sausage",
    description:
      "A simple HTML clone of Flappy Bird, playable on smartphones and computers with a deliberately lightweight, sausage-themed arcade feel.",
    status: "Delivered",
    sector: "Browser game",
    outcome:
      "Fast, lightweight gameplay that works across desktop and mobile as a playful web-first project.",
    link: "https://sausage.pebbs.app",
    linkLabel: "Play game",
    imageSrc: "/projects/flappy-sausage.png",
    imageAlt: "Preview image for the Flappy Sausage browser game"
  },
  {
    title: "Flappy Postman",
    description:
      "A simple HTML game for smartphones and computers, built as a lightweight Flappy-style project with a postman theme.",
    status: "Delivered",
    sector: "Browser game",
    outcome:
      "Quick, accessible gameplay that runs cleanly across desktop and mobile browsers without any install.",
    link: "https://postie.pebbs.app",
    linkLabel: "Play game",
    imageSrc: "/projects/flappy-postman.jpg",
    imageAlt: "Preview image for the Flappy Postman browser game"
  },
  {
    title: "Drink Roulette",
    description:
      "A browser-based cocktail roulette wheel that also includes a shot roulette mode, built as a simple interactive web project for desktop and mobile.",
    status: "Delivered",
    sector: "Browser app",
    outcome:
      "A lightweight pick-and-play experience that gives users quick drink ideas in a clean format across phones and computers.",
    link: "https://drink.pebbs.app",
    linkLabel: "Open project"
  },
  {
    title: "Snek",
    description:
      "We coded 'Snek', inspired by the classic old Nokia phone game Snake, entirely from scratch as a brand-new Super Nintendo homebrew title. Built to run on SNES emulation software, it is a fully playable original .sfc game that recreates the addictive arcade simplicity of the original while bringing it to the Super Nintendo format.",
    status: "Delivered",
    sector: "Homebrew game",
    outcome:
      "A complete original SNES ROM built from scratch, ready to run in Super Nintendo emulation software as a fully playable homebrew release.",
    downloadHref: "/projects/snake.sfc",
    downloadLabel: "Download ROM",
    imageSrc: "/projects/snes-snek.png",
    imageAlt: "Screenshot artwork for the Snek Super Nintendo homebrew project"
  },
  {
    title: "Tsunami Simulator",
    description:
      "Tsunami Simulator is an interactive browser-based 3D coastal city simulation built with procedural world generation and real-time wave impact modeling. Users can explore a dynamically generated shoreline city with dense urban cores, suburbs, farmland, roads, piers, traffic, and pedestrians, then trigger tsunamis ranging from moderate events to extreme mega-tsunamis.",
    status: "Delivered",
    sector: "Simulation",
    outcome:
      "A visually engaging prototype for exploring tsunami behavior and urban vulnerability in a web environment, with warning systems, customizable wave timing and intensity, crowd panic behavior, inland flooding, recession, and building damage that responds to wave force, speed, exposure, and distance from the coast.",
    link: "https://tsunami.pebbs.app/",
    linkLabel: "Open simulator",
    imageSrc: "/projects/tsunami-simulator.png",
    imageAlt: "Preview image for the Tsunami Simulator coastal city project"
  },
  {
    title: "Spin",
    description:
      "An in-development roulette data logger designed to track results in a clear browser-based interface and support structured analysis over time.",
    status: "In Development",
    sector: "In-development tool",
    outcome:
      "Live project work focused on reliable logging, clean session tracking, and a straightforward workflow for reviewing roulette data.",
    link: "https://spin.pebbs.app/",
    linkLabel: "View project"
  },
  {
    title: "Pitchfluence",
    description:
      "An in-development influencer marketing website for Pitchfluence, currently being built and refined as a public-facing product that visitors can already preview. Dashboard access is available with the passcode 'pebbles'.",
    status: "In Development",
    sector: "Influencer marketing",
    outcome:
      "Active delivery work on structure, presentation, and the core experience while the influencer marketing site remains under development.",
    link: "https://pitch.pebbs.app",
    linkLabel: "View website"
  },
  {
    title: "Aspect",
    description:
      "A version-one app in development that gives a forecast of how sunlight will strike a property throughout the day, helping homebuyers understand light, shade, and orientation before they buy.",
    status: "In Development",
    sector: "Property technology",
    outcome:
      "A public development build that lets people preview the product and its core sunlight forecasting concept while work continues.",
    link: "https://aspect.pebbs.app",
    linkLabel: "View project"
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
