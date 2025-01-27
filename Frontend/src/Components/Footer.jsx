const Footer = () => {
  return (
    <footer className="bg-[#0A1828] text-white py-8 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#178582] hover:text-[#BFA181] transition-colors"
          >
            GitHub
          </a>
          <span className="mx-4">|</span>
          <a
            href="/about"
            className="text-[#178582] hover:text-[#BFA181] transition-colors"
          >
            About Us
          </a>
          <span className="mx-4">|</span>
          <a
            href="/contact"
            className="text-[#178582] hover:text-[#BFA181] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
