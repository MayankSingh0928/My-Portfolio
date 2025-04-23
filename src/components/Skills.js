import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      className="max-w-4xl mx-auto space-y-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold">Skills & Tech Stack</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
        <li>React & Tailwind CSS</li>
        <li>Angular & Bootstrap</li>
        <li>Node.js</li>
        <li>Python & Django</li>
        <li>REST APIs</li>
        <li>Git & GitHub</li>
      </ul>
    </motion.section>
  );
}
