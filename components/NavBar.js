import Link from "next/link";
import { useRouter } from "next/router";

// CSS를 style jsx 방법으로 작성하였다.
export default function NavBar(){
    const router = useRouter();
    return (
        <nav>
            <Link href='/'>
                <h1 className="title">Movies</h1>
            </Link>
            <div>
                <Link href="/">
                    <span className={router.pathname === "/" ? "active" : ""}>Home</span>
                </Link>
                <Link href="/about">
                    <span className={router.pathname === "/about" ? "active" : ""}>About</span>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 30px 20px 30px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }

                .title  {
                    display: inline;
                    margin: 0;   
                }

                nav div {
                    display: flex;
                    gap: 20px;
                }

                nav span {
                        font-weight: 600;
                        font-size: 18px;
                }

                .active {
                        color: tomato;
                }
            `}</style>
        </nav>
    )
}