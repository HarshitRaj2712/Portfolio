export default function Footer() {
  return (
    <footer className="bg-black px-6 py-20">
      {/* Rounded glass container */}
      <div
        className="
          max-w-6xl
          mx-auto
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          p-10
          md:p-14
          text-white
        "
      >
        <div className="grid md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Harshit&apos;s Portfolio
            </h3>

            <p className="text-gray-400">
              Product designer crafting <br />
              clean & modern designs
            </p>

            <p className="mt-4 text-purple-600 font-medium">
              <a href="mailto:panditjee2712@gmail.com">panditjee2712@gmail.com</a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Work</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#projects" className="hover:text-purple-600 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-600 transition">
                  Contact me
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Social</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://x.com/raj_hars8it" className="hover:text-purple-600 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/harshit-raj-10931b282/" className="hover:text-purple-600 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/HarshitRaj2712/" className="hover:text-purple-600 transition">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <p className="text-center text-gray-400 mt-12 text-sm">
          © {new Date().getFullYear()} Harshit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
