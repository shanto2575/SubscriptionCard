import { Play } from 'lucide-react'
import banner from "../../assets/banner.png" 

const HeroSection = () => {
    return (
        <div className='flex mt-24  container mx-auto justify-between'>
            <div className='space-y-5 flex flex-col justify-center'>
                <div className="badge bg-purple-100 text-purple-500 rounded-full p-3 ">
                    New: AI-Powered Tools Available
                </div>
                <h2 className='text-8xl font-bold'>Supercharge Your <br></br>Digital Workflow</h2>
                <p className='text-2xl text-gray-400'>Access premium AI tools, design assets, templates, and productivity<br></br>
                    software—all in one place. Start creating faster today.<br></br>
                    Explore Products
                </p>
                <div className='flex gap-6'>
                    <button className='btn bg-purple-600 rounded-full text-white'>Explore Products</button>
                    <button className='flex gap-2 btn btn-outline rounded-full text-purple-800'><Play></Play> Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}

export default HeroSection
