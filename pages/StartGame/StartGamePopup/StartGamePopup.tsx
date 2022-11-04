import {
  Wrap,
  SettingsContainer,
  AmountContainer,
  ValueContainer,
  TextBlock,
  Range,
  Datalist,
  Option,
  ButtonsBlock,
  Button,
  StartButton,
} from "./StartGamePopup.style";
import Link from "next/link";
import { useState } from "react";

import { changeValue } from "./../../store/clickedStore";
import { useDispatch } from "react-redux";

let StartGamePopup = () => {
  const [descending, setDescending] = useState<boolean>(false);
  const [increase, setIncrease] = useState<boolean>(true);

  const [amount, setAmount] = useState<number | undefined>(2);
  const [value, setValue] = useState<number | undefined>(1);

  const dispatch = useDispatch();

  let getValues = () => {
    let mode;

    if (increase == true) {
      mode = "increase";
    } else if (descending == true) {
      mode = "descending";
    }

    dispatch(
      changeValue({
        selectedSettings: {
          amount: amount,
          value: value,
          mode: mode,
        },
      })
    );
  };

  return (
    <>
      <Wrap>
        <SettingsContainer>
          <AmountContainer>
            <TextBlock>Кол-во предметов</TextBlock>

            <Datalist>
              <Option value="2" label="2"></Option>
              <Option value="3" label="3"></Option>
              <Option value="4" label="4"></Option>
              <Option value="5" label="5"></Option>
            </Datalist>

            <Range
              type="range"
              min="2"
              max="5"
              defaultValue="2"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
                setAmount(parseInt(ev.target.value, 10));
              }}
            />
          </AmountContainer>
          <ValueContainer>
            <TextBlock>Значения</TextBlock>

            <Datalist>
              <Option value="1" label="A"></Option>
              <Option value="2" label="9"></Option>
              <Option value="3" label="19"></Option>
              <Option value="4" label="50"></Option>
              <Option value="5" label="99"></Option>
              <Option value="6" label="999"></Option>
            </Datalist>

            <Range
              type="range"
              min="1"
              max="6"
              defaultValue="1"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
                setValue(parseInt(ev.target.value, 10));
              }}
            />
          </ValueContainer>
          <ButtonsBlock>
            <Button
              selected={increase}
              type="button"
              onClick={() => {
                setIncrease(true);
                setDescending(false);
              }}
            >
              По возрастанию
            </Button>
            <Button
              selected={descending}
              type="button"
              onClick={() => {
                setIncrease(false);
                setDescending(true);
              }}
            >
              По убыванию
            </Button>
          </ButtonsBlock>
          <StartButton onClick={getValues}>
            <Link href="/GamePage">Играть</Link>
          </StartButton>
        </SettingsContainer>
      </Wrap>
    </>
  );
};

export default StartGamePopup;
