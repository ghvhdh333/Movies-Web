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
                <Link href="/top-rated">
                    <span className={router.pathname === "/top-rated" ? "active" : ""}>Top Rated</span>
                </Link>
                <Link href="/popular">
                    <span className={router.pathname === "/popular" ? "active" : ""}>Popular</span>
                </Link>
                <Link href="/now-playing">
                    <span className={router.pathname === "/now-playing" ? "active" : ""}>Now Playing</span>
                </Link>
                <Link href="/upcoming">
                    <span className={router.pathname === "/upcoming" ? "active" : ""}>Upcoming</span>
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
                    gap: 30px;
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