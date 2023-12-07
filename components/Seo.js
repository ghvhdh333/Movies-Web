import Head from "next/head";
import { useRouter }from "next/router";

// Title 변경하는 컴포넌트
// router.pathname을 사용하여 현재 유저가 위치하고 있는 page를 구할 수 있다.
export default function Seo() {
    const router = useRouter();
    let title = [...router.pathname.slice(1)]
        .map((el, index) => {
            return index === 0 ? el.toUpperCase() : el
        }).join('');
    
    if(title === "") {
        title = "Home";
    } 

    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}