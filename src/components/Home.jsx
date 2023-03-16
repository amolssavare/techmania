import React from 'react'
import vg from "../assets/istockphoto-537331500-170667a.jpg";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
const Home = () => {
    return (
        <> 
            <div className='home' id="home">
                <main>
                    <h1>Techmania</h1>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>The Top 7 Trending IT Blogs to Follow in 2023::
To help you keep up with the latest developments in the world of IT, we’ve compiled a list of the top 15 technology blogs that every business leader and decision-maker should follow.

1. Electric
Obviously we’re biased, but Electric strives to cover everything IT-related for both technical and non-technical readers. 
2. CIO Review
The CIO Review blog provides readers with comprehensive technology news and insights across a wide spectrum of topics. 
3. IT Brew
IT Brew shares the latest news and analysis of trends shaping the IT industry, particularly within the areas of cybersecurity, big data, software development, remote work, cloud computing, and data privacy. 
4. Sentinel Labs
In the rapidly evolving world of InfoSec, Sentinel Labs is where you’ll find highly-informed deep dives into the latest cybersecurity dangers and developments.
5. Wired
Wired is a popular tech blog that observes how technology affects human lives across culture, politics, and security. 
</p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>About</h1>
                    <p>IT is the undercurrent of the business world. It’s how companies onboard employees, support collaboration, protect security and serve customers. Businesses run better when company devices, networks, and applications work like a dream.</p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div 
                        style={{
                            animationDelay:"0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div 
                        style={{
                            animationDelay:"0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div 
                        style={{
                            animationDelay:"0.8s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                    </article>
                </div>

            </div>
        </>
    );
};

export default Home
