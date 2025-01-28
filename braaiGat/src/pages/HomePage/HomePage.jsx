import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import  './HomePage.css'

export default function HomePage(params) {
    return (
        <>
        <Navbar/>
        <div className=" bg-blueack w-full min-h-screen flex pl-6 pt-7 pr-6 pb-7">
            <div className="bg-[url('./HomePage/Images/heroSection.jpg')] bg-cover w-full flex justify-center items-center opacity-85">
                <p className="font-rubik text-white font-boldt text-3xl w-3xl">🔥 Savor the Flavor: Your Ultimate BBQ Experience Starts Here! </p>
            </div>
        </div>
        <div className='item-section'>
            <div className='items'>
                <div className="items-section">
                <div className="item  flex-col justify-start items-end ">
                <img src="./HomePage/Images/BraaiStand.png" alt=""  />
                <div className="item-description  bg-red font-[Oswald] text-2xl text-white p-2" ><p>Portable Adjustable Braai Stand</p></div>
                </div>
                <div className="item flex-col justify-start items-end ">
                <img src="./HomePage/Images/KettleBraai.png" alt="" />
                <div className="item-description  bg-red font-[Oswald] text-2xl text-white p-2" ><p>Big5 Enamel Kettle Braai </p></div>
                </div>
                </div>
                <div className=" w-6xl flex-col  justify-center items-end ">
                <img src="./HomePage/Images/Jetmaster.png" className="w-full" alt=""  />
                <div className=" bg-red font-[Oswald] text-2xl text-white p-2  rounded-br-lg rounded-bl-lg" ><p>Jetmaster Potjie Cooker </p></div>
                
                </div>
            </div>
            <div className="">
                <h1 className="font-rubik text-5xl mb-3">Our Catalogue</h1>
                <p className="font-[Oswald] text-3xl leading-12  ">Explore our top-notch BBQ equipment and discover the tools for grilling perfection! From reliable smokers to versatile grills, every piece is designed to elevate your BBQ game. Gear up and master the art of outdoor cooking</p>
                <button type="button" className="text-white font-rubik bg-red rounded-lg text-base px-4 py-4 mt-5 text-center ">View Equipment</button>
            </div>
        </div>

        <div className="spice-add w-full bg-semi-black relative p-10 mt-10 ">
            <div className="spice-add-caption bg-brown absolute w-2xl h-96 flex-col items-center p-20 justify-center rounded-lg left-30 top-20 ">
                <h1 className="font-rubik text-3xl text-white">Grill Gear & Sauce</h1>
                <p className="font-[Oswald] text-lg text-white leading-10">Equip your grill station with The Braai Gat’s premium BBQ essentials!<br/> Explore our collection of signature sauces, rubs, and top-notch grilling equipment</p>
                <button type="button" className="text-white font-rubik bg-red rounded-lg text-base px-4 py-4 mt-5 text-center ">Shop Now</button>
            </div>
            <img src="./HomePage/Images/MerchSauce.jpg" alt="" className="w-4xl h-[438px] ml-auto"  />
        </div>
        <Footer/>
        </>
        
    )
}