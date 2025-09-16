import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Fareed Ali Anwar</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Junior AI Engineer passionate about building intelligent systems that solve real-world problems. Always
            excited to collaborate on innovative AI projects.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/fareed-ali-a2457a287"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/FareedAnwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:anwrfryd8@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Fareed Ali Anwar. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
