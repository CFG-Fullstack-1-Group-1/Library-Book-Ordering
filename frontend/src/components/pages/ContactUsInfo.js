// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/icons/Link";

// const useStyles = makeStyles(() => ({
//   wrapIcon: {
//     alignItems: "center",
//     display: "flex"
//   }
// }));

// export default function App() {
//   const classes = useStyles();

//   return (
//     <div>
//       <Typography variant="subtitle1" className={classes.wrapIcon}>
//         <Link /> revolve
//       </Typography>
//     </div>
//   );
// }

// import React from "react";
// import styled from "styled-components";

// import Card from "../ContactUs/Card";

// const ItemStyle = styled.div`
//   padding: 2rem;
//   display: flex;
//   align-itmes: center;
//   gap: 2rem;
//   border: 8px;
//   margin-bottom: 2rem;
//   .icon {
//     color: var(--black);
//   }
// `;

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
