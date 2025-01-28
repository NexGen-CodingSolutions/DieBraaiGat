import "./Footer.css"
export default function Footer(params) {
    return (
        <div className="footer  flex text-center justify-center relative">
            <img src="/HomePage/Images/GridLines.png" alt="" className="absolute w-full h-full z-0 opacity-[0.1] " />
            <div className="content z-10 flex-col m-10">
                <img src="/HomePage/Images/logo.png" className="h-44 m-auto" alt="Company Logo"/>
                <div className="social-links flex gap-10 mt-10 mb-10">
                    <div className="facebook w-[111] h-[98]  bg-brown">
                        <i className="fa-brands fa-facebook-f text-5xl text-white"></i>
                    </div>
                    <div className="tiktok w-[111] h-[98]  bg-brown">
                        <i className="fa-brands fa-tiktok text-5xl text-white"></i>
                    </div>
                    <div className="whatsapp w-[111] h-[98]  bg-brown">
                        <i className="fa-brands fa-whatsapp text-6xl text-white"></i>
                    </div>
                    <div className="phone w-[111] h-[98]  bg-brown">
                        <i className="fa-solid fa-phone text-5xl text-white"></i>
                    </div>
                </div>
                    <p className="font-[Oswald] text-lg mb-5"><a href="/">About</a> | <a href="/Contact">Contact</a>| <a href="/">Location</a></p>
                    <p className="font-[Oswald] text-lg">© 2025 Die braai Gat. All rights reserved</p>
                </div>
        </div>
    )
}