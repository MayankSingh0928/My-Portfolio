import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      className="max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold">Projects</h2>
      {/* Replace with real project data */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p>A project description goes here...</p>
          <a href="" className="text-blue-600">View Project</a>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p>A project description goes here...</p>
          <a href="" className="text-blue-600">View Project</a>
        </div>
      </div>
    </motion.section>
  );
}
