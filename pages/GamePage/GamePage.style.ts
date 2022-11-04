import styled from "@emotion/styled";

export const Background = styled.div`
  position: absolute;
  width: 980px;
  height: 810px;
  left: 0px;
  top: 0px;
`;

export const Wrap = styled.div`
  height: 480px;
  width: 980px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const ElementBlock = styled.div`

`;

export const ImageBlock = styled.div`
  height: 480px;
  width: 980px;
  position: fixed;
`;

export const TextBlock = styled.div`
  height: 480px;
  width: 980px;
  position: fixed;
`;

export const P = styled.p`
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 68px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;

  color: #ffffff;
  -webkit-text-stroke: 3px #242546;
`;

export const ModeBlock = styled.div`
  margin-top: 480px;
  width: 357.5px;
  height: 68.84px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
`;

export const ModeP = styled.p`
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;

  display: flex;
  align-items: center;

  color: #ffffff;

  -webkit-text-stroke: 1.5px #242546;
`;

export const ModeImageBlock = styled.div`
  position: fixed;
`;

export const ModeTextBlock = styled.div`
  position: fixed;
`;

export const GameField = styled.div`
  position: absolute;
  width: 887px;
  height: 222.77px;
  left: 46px;
  margin-top: 555px;
`;

export const GameFieldElement = styled.div`
  width: 131px;
  height: 131px;
  left: 221.03px;
  top: 600px;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
`;
