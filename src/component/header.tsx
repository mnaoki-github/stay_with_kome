import HeaderNav from "./header_nav";

export default function Header (){

    return (
        <header>
            <div>
                <img src="/hero_image.jpg" alt="トップ画像" />
                <HeaderNav/>
            </div>
        </header>
    );

};