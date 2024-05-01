export default function Footer() {
    return (
        <footer
            className="flex flex-col-reverse items-center md:flex-row md:justify-between border-t border-gray-700 py-8 px-4 md:px-14 text-gray-400">
            <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Hemat Waziri</p>
            <div className="flex gap-8 text-lg">
                <a
                    className="hover:text-sky-400"
                    href="https://github.com/hematw"
                    target="_blank">
                    <i className="bi bi-github"></i>
                </a>

                <a
                    className="hover:text-sky-400"
                    href="https://www.linkedin.com/in/hematw/"
                    target="_blank">
                    <i className="bi bi-linkedin"></i>
                </a>

                <a
                    className="hover:text-sky-400"
                    href="https://twitter.com/_hematw"
                    target="_blank">
                    <i className="bi bi-twitter-x"></i>
                </a>
            </div>
        </footer>
    )
}
