import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const Styledloader = styled.div`
    width: 24px;
    height: 24px;
    border: 2px solid #ccc;
    border-top-color: #333;
    border-radius: 50%;
    animation: ${spin} 0.6s linear infinite;
    margin: 10px auto;
`;
export default function Loader() {
  return(
    <Styledloader/>
  )
}