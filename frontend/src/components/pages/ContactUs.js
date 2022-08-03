import React from "react";
import styled from "styled-components";
import "./ContactUs.css";

// https://www.youtube.com/watch?v=BtdM2_likL8
// More complex version https://www.youtube.com/watch?v=KGFG-yQD7Dw

const ContactUsStyle = styled.div`padding: 10 rem 0`;

function ContactUs() {
  console.log("Here2");
  return (
    <ContactUsStyle>
      <div className="container">
        <ContactUs heading="Contact Us" subheading="Get in touch!"></ContactUs>
      </div>
    </ContactUsStyle>
  );
}



// function ContactUs() {
//   return (
//     <section>
//       <div className="contactUs">
//         <div className="contactUs-container">
//           <sectionContactUs heading="Contact Us" subheading="Get in touch"></sectionContactUs>
//           <h1>Contact Us</h1>

//           <div className="contactUs-paragraph">
//             <p>insert info here</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default ContactUs;
