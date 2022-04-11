import { Navbar } from "../components/navbar";
import { motion } from "framer-motion";
export default function OmOs() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h1 className="text-6xl">Hello Kontakt</h1>
    </motion.div>
  );
}
