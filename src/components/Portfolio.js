import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Sun, Moon, Github as GithubIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [cmsData, setCmsData] = useState({ about: "", projects: [] });

  useEffect(() => {
    fetch("https://api.github.com/users/MayankSingh0928/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error("GitHub API did not return an array:", data);
        }
      })
      .catch((err) => console.error("GitHub API error:", err));

    fetch("https://your-cms-backend.com/api/portfolio")
      .then((res) => res.json())
      .then(setCmsData)
      .catch((err) => console.error("CMS API error:", err));
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const containerClass = darkMode
    ? "dark bg-gray-900 text-white"
    : "bg-gray-50 text-gray-800";

  return (
    <div className={`min-h-screen px-6 py-10 space-y-16 transition-colors duration-500 ${containerClass}`}>
      {/* Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button onClick={toggleDarkMode} variant="outline">
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </div>

      {/* About Me */}
      <motion.section className="max-w-4xl mx-auto space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg">
          {cmsData.about || "I'm a full-stack developer with experience in building scalable web applications using Node.js, React, and Angular. Passionate about fintech and solving real-world problems."}
        </p>
      </motion.section>

      {/* Skills & Tech Stack */}
      <motion.section className="max-w-4xl mx-auto space-y-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold">Skills & Tech Stack</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
          <li>React & Tailwind CSS</li>
          <li>Angular & Bootstrap</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>REST APIs</li>
          <li>Git & GitHub</li>
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section className="max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold">Projects</h2>
        {cmsData.projects.length > 0 ? cmsData.projects.map((project, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </CardContent>
          </Card>
        )) : (
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">IPO Web Application</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A fintech platform for managing IPO investments, built with Node.js, React, and Angular.
              </p>
            </CardContent>
          </Card>
        )}
      </motion.section>

      {/* GitHub Repos */}
      <motion.section className="max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold">GitHub Repositories</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Array.isArray(repos) && repos.slice(0, 4).map((repo) => (
            <Card key={repo.id}>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{repo.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{repo.description}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block"
                >
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Resume */}
      {/* <motion.section className="max-w-4xl mx-auto space-y-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold">Resume</h2>
        <Button>
          <a href="/" download>
            Download Resume
          </a>
        </Button>
      </motion.section> */}

      {/* Contact */}
      <motion.section className="max-w-4xl mx-auto space-y-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="flex gap-4 items-center">
          <Mail className="text-gray-600 dark:text-gray-300" />
          <span>mayanksi0928@gmail.com </span>
        </div>
        <div className="flex gap-4 items-center">
          <GithubIcon className="text-gray-600 dark:text-gray-300" />
          <a
            href="https://github.com/MayankSingh0928"
            className="text-blue-600 dark:text-blue-400"
          >
            github.com/MayankSingh0928
          </a>
        </div>
      </motion.section>
    </div>
  );
}
