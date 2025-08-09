export default function Footer() {
  return (
    <footer className=" border-t border-gray-700 py-8 px-4 md:px-14 text-gray-400 ">
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between max-w-7xl mx-auto">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} Hemat Waziri
        </p>
        <div className="flex gap-8 text-lg  max-w-7xl ">
          <a
            className="hover:text-sky-400"
            href="https://github.com/hematw"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            className="hover:text-sky-400"
            href="https://www.linkedin.com/in/hematw/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="hover:text-sky-400"
            href="https://twitter.com/_hematw"
            target="_blank"
          >
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
