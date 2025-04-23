import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-lg">
        I'm a full-stack developer with experience in building scalable web applications. I work with modern web technologies like React, Node.js, and Python.
      </p>
    </motion.section>
  );
}
