export default function Footer() {
  return (
    <footer className="bg-black px-6 py-24">
      {/* Rounded container */}
      <div
        className="
        max-w-6xl
        mx-auto
        rounded-2xl
        bg-neutral-900
        border
        border-neutral-800
        p-10
        md:p-14
        text-white
        "
      >
        <div className="grid md:grid-cols-3 gap-10">

          {/* Branding */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Harshit&apos;s Portfolio
            </h3>

            <p className="text-neutral-400">
              Full-stack developer crafting <br />
              clean & modern digital experiences
            </p>

            <p className="mt-4 text-neutral-300 font-medium">
              <a
                href="mailto:panditjee2712@gmail.com"
                className="hover:text-white transition"
              >
                panditjee2712@gmail.com
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-neutral-300">Work</h4>

            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-neutral-300">Social</h4>

            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href="https://x.com/raj_hars8it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/harshit-raj-10931b282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/HarshitRaj2712/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <p className="text-center text-neutral-500 mt-12 text-sm">
          © {new Date().getFullYear()} Harshit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}