import Link from 'next/link'

const AppSideBar = ({ mobile = false, onClose }) => {
    return (
        <div className="flex flex-col p-6 text-center justify-center items-center dark:bg-black bg-white/95 font-bold  h-full ">
            <div className="flex flex-col gap-7">
                <Link
                    href="/#about"
                    onClick={onClose}
                    className="px-5 py-1 text-lg bg-white/20 rounded-full transition-colors"
                >
                    About
                </Link>

                <Link
                    href="/#skills"
                    onClick={onClose}
                    className="px-5 py-1 text-lg bg-white/20 rounded-full transition-colors"
                >
                    Skills
                </Link>

                <Link
                    href="/projects"
                    onClick={onClose}
                    className="px-5 py-1 text-lg bg-white/20 rounded-full transition-colors"
                >
                    Projects
                </Link>

                <Link
                    href="/contact"
                    onClick={onClose}
                    className="px-5 py-1 text-lg bg-white/20 rounded-full transition-colors"
                >
                    Connect
                </Link>
            </div>
        </div>
    )
}

export default AppSideBar
