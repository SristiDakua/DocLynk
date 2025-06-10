import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Set Up Your Profile",
    description:
      "Sign up in minutes and complete your health profile. Get personalized recommendations tailored to your needs.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Schedule with Ease",
    description:
      "Find the right doctor and book at your convenience. No calls, no waiting — just a few taps to confirm.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Virtual Consultations",
    description:
      "Talk to verified doctors through secure video calls. Receive expert care from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Flexible Credit Plans",
    description:
      "Buy consultation credits that match your usage. Pay once and use them whenever care is needed.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Trusted Professionals",
    description:
      "Our doctors are vetted for experience and credibility. You’re always in safe, expert hands with Doclynk.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Organized Medical Records",
    description:
      "Access visit history, doctor notes, and prescriptions. Everything is securely stored and always within reach.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "AR",
    name: "Aisha R.",
    role: "Patient",
    quote:
      "Doclynk made getting care feel effortless. I had a follow-up video call during my lunch break — no waiting rooms, no stress.",
  },
  {
    initials: "DNK",
    name: "Dr. Naveen K.",
    role: "Dermatologist",
    quote:
      "With Doclynk, I’ve been able to offer more flexible hours and reach patients beyond my city. It's modern medicine at its best.",
  },
  {
    initials: "LG",
    name: "Luis G.",
    role: "Patient",
    quote:
      "Booking a consultation took less than a minute. I even got a prescription sent to my nearest pharmacy. It’s healthcare made smart.", 
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Just <strong class='text-emerald-400'>2 Credits </strong>per Visit<br /> Every doctor consultation costs only 2 credits.",
  "Credits That <strong class='text-emerald-400'>Never Expire</strong><br />Use your credits when it suits you. They stay in your account until you need them.",
  "Monthly Plans, <strong class='text-emerald-400'>Monthly Credits</strong><br />Subscribe and receive new credits each month, flexible and hassle-free.",
  "<strong class='text-emerald-400'>No Lock-Ins</strong>, No Stress<br />Pause, cancel, or switch your plan anytime. You're always in control.",
];
