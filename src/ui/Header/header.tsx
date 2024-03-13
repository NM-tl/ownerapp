import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="mx-auto w-full shadow-md py-4">
            <div className="m-auto max-w-7xl w-full flex justify-between">
            <Link href={"/"}>
                <Image 
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={64}
                    height={64}
                    priority
                />
            </Link>
            <button className="btn rounded-full">user</button>
        </div>
        </div>
    );
}

export default Header