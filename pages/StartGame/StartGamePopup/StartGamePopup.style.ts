import styled from "@emotion/styled";

interface IBtn {
  selected: boolean;
}

export const Wrap = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 699px;
  height: 660px;
  left: 139px;
  top: 91px;

  border: double 20px transparent;
  border-radius: 40px;
  background-image: linear-gradient(white, white),
    linear-gradient(198.7deg, #7f75f0 -40.02%, #101f32 96.22%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const AmountContainer = styled.div`
  width: 366px;
  height: 112px;
  display: grid;
  justify-content: center;
`;

export const ValueContainer = styled.div`
  width: 531px;
  height: 114px;
`;

export const TextBlock = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: #423f45;
  text-align: center;
`;

export const Range = styled.input`
  width: 100%;
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
  height: 23px;
  background: #ffd748;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.5s;
  transition: opacity 0.2s;
  border-radius: 10px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    background: #104987;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    border-radius: 50%;
    width: 23px;
    height: 23px;
    background: #104987;
    cursor: pointer;
  }
`;

export const Datalist = styled.datalist`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  writing-mode: horizontal-tb;
  width: 100%;
`;

export const Option = styled.option`
  padding: 0;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #4f4b61;
`;

export const ButtonsBlock = styled.div`
  width: 541px;
  height: 44.44px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  margin-top: 72px;
`;

export const Button = styled.button<IBtn>`
  width: ${(props) => (props.selected ? "271px" : "240px")};
  height: 44.44px;
  border: none;
  background: ${(props) =>
    props.selected ? "#ffd748" : "rgba(255, 215, 72, 0.56)"};
  border-radius: 20px;

  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  color: ${(props) => (props.selected ? "#423f45" : "rgba(66, 63, 69, 0.56)")};
`;

export const StartButton = styled.button`
  width: 291px;
  height: 67px;
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: none;

  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  color: #ffffff;
`;
