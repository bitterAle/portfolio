import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        < div className=' min-h-screen'>
        <div className=' w-full md:w-3/4 '>  
        <div className=' w-full max-h-screen p-10  overflow-hidden flex flex-col gap-6'>
            <h1 className=' text-3xl md:text-5xl  font-semibold md:font-extrabold'> Web Developer,Telecomm Engineer,<br></br><span> and Aviation Enthusiast</span></h1>
            <p className=' text-gray-700 text-0.5xl'>I’m Mitch, a web developer and entrepreneur based in Nairobi City. I’m the founder of Lazyboi Studios, where we develop web technologies that empower regular businesses to take advantage of the internet and expand their markets.</p>
       
            <div className=' flex gap-3'>
                <span><Image
                src='/git.svg'
                width={20}
                height={20}></Image></span>
                <span><Image
                src='/insta.svg'
                width={20}
                height={20}></Image></span>
                <span><Image
                src='/link.svg'
                width={20}
                height={20}></Image></span>
                <span><Image
                src='/twit.svg'
                width={20}
                height={20}></Image></span>
            </div>
        </div>

        
        </div>
        <div className=' mt-10 w-screen overflow-hidden z-10 flex gap-8   '>
            
            <img src='https://i.pinimg.com/236x/cc/44/7e/cc447e450b7ca52d4a5576aeb1332197.jpg'
            className=' w-56 h-72 rounded-md rotate-2 '></img>
            <img src='https://i.pinimg.com/236x/46/22/e8/4622e81a310f3051cb2477e72ed21ab3.jpg'
            className=' w-56 h-72 rounded-md '></img>
            <img src='https://i.pinimg.com/236x/26/11/e2/2611e226de0c47b947e35435c33e3466.jpg'
            className=' w-56 h-72 rounded-md  -rotate-2'></img>
            <img src='https://i.pinimg.com/474x/1e/66/bf/1e66bfe24d694b951aa085a68d42e4e9.jpg'
            className=' w-56 h-72 rounded-md  '></img>
            <img src='https://i.pinimg.com/236x/61/4f/dd/614fdd925049db3e1348840ecb7a27d1.jpg'
            className=' w-56 h-72 rounded-md rotate-2 '></img>
            <img src='https://i.pinimg.com/236x/20/84/90/208490b358669caffbf6edf8e2aeac68.jpg'
            className=' w-56 h-72 rounded-md '></img>
            <img src='https://i.pinimg.com/236x/78/e0/a5/78e0a5e0481304aca96f5d2fc02061b0.jpg'
            className=' w-56 h-72 rounded-md  -rotate-2'></img>
        </div>
        </div>
    );
}

export default Hero;
