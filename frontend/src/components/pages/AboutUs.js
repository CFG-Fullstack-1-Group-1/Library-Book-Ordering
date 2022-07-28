import React from 'react';
import user1 from '../../../static/images/user1.jpeg';
import user2 from '../../../static/images/user2.jpeg';
import user3 from '../../../static/images/user3.jpeg';
import user4 from '../../../static/images/user4.png';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className='AboutUs'>
            <div className='container'>
                <h1>About Us</h1>

{/* Edit stuff here by making a card component and then importing it into the webpage*/}
                <div className='paragraph'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa. 
                        Turpis egestas maecenas pharetra convallis posuere morbi. Est sit amet facilisis magna. Vitae elementum curabitur vitae nunc. 
                        Duis ut diam quam nulla porttitor massa id neque aliquam. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. 
                        Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. 
                    </p>
                </div>
                    <div className='content'>
                        <div className="members-container">
                        <div className='card'>
                            <img src={user1} className='teampic' alt='user1'/>
                            <p>Paragraph 1</p>
                            <p><span>Name 1</span></p>
                            <p>Experience 1</p>
                        </div>
                        <div className='card'>
                            <img src={user2} className='teampic' alt='user2'/>
                            <p>Paragraph 2</p>
                            <p><span>Name 2</span></p>
                            <p>Experience 2</p>
                        </div> 
                        </div>
                    
                        <div className="members-container1">
                        <div className='card'>
                            <img src={user3} className='teampic' alt='user3'/>
                            <p>Paragraph 3</p>
                            <p><span>Name 3</span></p>
                            <p>Experience 3</p>
                        </div>
                        <div className='card'>
                            <img src={user4} className='teampic' alt='user4'/>
                            <p>Paragraph 4</p>
                            <p><span>Name 4</span></p>
                            <p>Experience 4</p>
                        </div>
                    </div>
                    </div>

{/* Edit stuff here */}
                <div className='paragraph'>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa. 
                    Turpis egestas maecenas pharetra convallis posuere morbi. Est sit amet facilisis magna. Vitae elementum curabitur vitae nunc. 
                    Duis ut diam quam nulla porttitor massa id neque aliquam. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. 
                    Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                </p>
                </div>

            </div>
        </div>
    );
}

export default AboutUs
