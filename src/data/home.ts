import logo from "@/assets/logo/logo2.png";
import logo1 from "@/assets/hero/c3.jpg";

import p1 from "@/assets/hero/c1.jpg";
import p2 from "@/assets/hero/c2.jpg";
import p3 from "@/assets/hero/sl1.jpg";
import sl6 from "@/assets/hero/sl6.jpeg";
import sl7 from "@/assets/hero/sl7.jpeg";
import sl5 from "@/assets/hero/sl5.jpeg";
import con1 from "@/assets/hero/cons1.jpeg";
import con2 from "@/assets/hero/cons2.jpeg";
import intr from "@/assets/hero/intr1.jpg";

import cr1 from "@/assets/hero/hc1.jpeg";
import cr2 from "@/assets/hero/hc2.jpeg";
import cr3 from "@/assets/hero/cr3.jpg";
import cr4 from "@/assets/hero/hc3.jpeg";
import hp1 from "@/assets/hero/hp1.jpeg";
import hp2 from "@/assets/hero/hp2.jpeg";
import hp3 from "@/assets/hero/hp3.jpeg";
import hp4 from "@/assets/hero/hp4.jpeg";

import BoltIcon from "@mui/icons-material/Bolt";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ConstructionIcon from "@mui/icons-material/Construction";
import GroupsIcon from "@mui/icons-material/Groups";
import { label } from "framer-motion/client";

export const companyFeatures = [
  "2+ Years of Industry Leadership",
  "50+ Government Projects",
  "1200+ Renovations Completed",
  "4MW+ Solar Infrastructure",
];

export const clients = [
  { name: "Adani Infra", logo: logo1 },
  { name: "Tata Projects", logo: logo },
  { name: "L&T Construction", logo: logo },
  { name: "GMR Group", logo: logo },
  { name: "Loom Solar", logo: logo1 },
  { name: "Luminous", logo: logo },
];
export const serviceOptions = [
  { label: "Solar Energy" },
  { label: "Real Estate" },
  { label: "Construction" },
  { label: "Consulting" },
  { label: "Technology Services" },
];

export const expertiseData = [
  {
    title: "Solar Energy",
    desc: "Smart renewable energy solutions.",
    icon: BoltIcon,
  },
  {
    title: "Construction",
    desc: "Advanced infrastructure & modern architecture.",
    icon: ConstructionIcon,
  },
  {
    title: "Manpower Services",
    desc: "Skilled workforce and staffing solutions.",
    icon: GroupsIcon,
  },
  {
    title: "Web & App Development",
    desc: "Scalable high-performance platforms.",
    icon: LanguageIcon,
  },
];

export const projects = [
  { title: "Solar Plant Setup", category: "Solar Energy", image: sl7 },
  { title: "Solar Plant Setup", category: "Solar Energy", image: sl6 },
  { title: "Building Construction", category: "Construction", image: con2 },
  { title: "solar Pant Setup", category: "Solar Energy", image: sl5 },
  { title: "Interior Design", category: "Interior", image: intr },
  { title: "Renovation Work", category: "Construction", image: con1 },
];

export const categories = [
  "All",
  "Solar Energy",
  "Construction",
  "Interior",
];

export const customers = [
  { name: "Bablu kumar", location: "Dalsinghsarai, Samastipur, Bihar", phone: "+919304653309", image: hp4 },
  { name: "Ajit Sharma", location: "Runni Saidpur, Sitamarhi, Bihar", phone: "+919006403233", image: hp1 },
  { name: "Sushil kumar", location: "Rampur Dayal, Muzaffarpur, Bihar", phone: "+919934257811",  image: cr2 },
  { name: "Radhe kumar ", location: "Runni Saidpur, Sitamarhi, Bihar", phone: "+919905404996", image: cr4 },
  { name: "Ved Parkash Sharma", location: "Runni Saidpur, Sitamarhi, Bihar", phone: "+919934257811",  image: hp2 },
];
