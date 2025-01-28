import "./Footer.css"
export default function Footer(params) {
    return (
        <div className="footer flex items-center justify-center relative mt-2">
            <img src="/HomePage/Images/GridLines.png" alt="" className="absolute w-full h-full z-0 opacity-25 " />
            <div className="content z-10">
            <img src="/HomePage/Images/logo.png" className="h-28" alt="Company Logo"/>
            <div className="social-links">
                <div className="facebook w-[111] h-[98]  bg-brown">
                <i className="fa-brands fa-facebook-f text-5xl text-white"></i>
                </div>
            </div>
            </div>

        </div>
    )
}