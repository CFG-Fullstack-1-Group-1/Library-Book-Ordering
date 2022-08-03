import React from "react";
import styled from "styled-components";
import { MdPlace } from "react-icons/md";

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
  icon = <MdPlace />,
  text = "this is info",
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
