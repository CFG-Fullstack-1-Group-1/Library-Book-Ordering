import React from "react";
import styled from "styled-components";
import { AiFillEnvironment } from "react-icons/ai";

const ItemStyle = styled.div`
  padding: 2rem;
  display: flex;
  align-itmes: center;
  gap: 2rem;
  border: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--black);
  }
`;

export default function ContactUsInfo({
  icon = <AiFillEnvironment />,
  text = "123 Road, London, L1 CGF4",
}) {
  return (
    <ItemStyle>
      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </ItemStyle>
  );
}

// export default function ContactUsInfo1({
//   icon = <AiFillEnvironment />,
//   text = "12345678910",
// }) {
//   return (
//     <ItemStyle>
//       <div className="icon">{icon}</div>
//       <div className="info">
//         <p>{text}</p>
//       </div>
//     </ItemStyle>
//   );
// }
