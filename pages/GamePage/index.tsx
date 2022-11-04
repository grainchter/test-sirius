import {
  Background,
  Wrap,
  ImageBlock,
  TextBlock,
  ElementBlock,
  P,
  ModeBlock,
  ModeP,
  ModeImageBlock,
  ModeTextBlock,
  GameField,
  GameFieldElement,
} from "./GamePage.style";
import el from "../../public/data/uiElements.json";
import values from "../../public/data/range.json";
import ascending from "./../../public/img/uiElements/elements/ascending.png";
import descending from "./../../public/img/uiElements/elements/descending.png";
import { useEffect, useState } from "react";

import { TStore } from "../store/hooks";
import { useSelector } from "react-redux";
import { changeValue } from "../store/clickedStore";

let GamePage = () => {
  const { selectedSettings } = useSelector(
    (state: TStore) => state.clickedReducer
  );

  const [settingsDataState, setSettingsDataState] = useState<any | undefined>(
    selectedSettings
  );

  const [bgImage, setBgImage] = useState<string>("img/uiElements/4882066.png");
  const [fieldImage, setFieldImage] = useState<string>(
    "img/uiElements/4882066.png"
  );
  const [elemenstArray, setElementsArray] = useState<
    Array<string> | undefined
  >();
  const [numbersArray, setNumbersArray] = useState<Array<number> | undefined>();
  const [amountValue, setAmountValue] = useState<number>(
    settingsDataState.amount
  );
  const [modeValue, setModeValue] = useState<string>(settingsDataState.mode);

  let generateGameData = () => {
    let amount = settingsDataState.amount; // сложность
    let value = settingsDataState.value; // диапазон значений в зависимости от выбора пользователя
    let mode = settingsDataState.mode; // режим игры

    // setAmountValue(amount);

    // console.log(typeof value);
    console.log(values.values[value]); //получили мин и макс для значений

    let scene = getRandomScene(el.elements); //получили рандомную сцену
    // console.log(el.elements[scene]);
    setBgImage(el.elements[scene].bg);
    console.log(el.elements[scene].bg);

    setFieldImage(el.elements[scene].field);

    let elements: Array<string> = []; // url рандомных картинок элементов
    let valuesArray: Array<any> = []; // рандомные числа

    for (let i = 0; i < settingsDataState.amount; i++) {
      elements.push(getRandomElements(el.elements[scene].elements)); //рандомный элемент

      // let randomNumber = getRandomValues(values.values[value]);  рандомное значение из диапазона

      let randomNumber: any;

      if (valuesArray.indexOf(randomNumber) == -1) {
        randomNumber = getRandomValues(values.values[value]);
      }

      valuesArray.push(randomNumber);
    }

    setNumbersArray(valuesArray);
    setElementsArray(elements);
    console.log(elements);
    console.log(valuesArray);
  };

  let getRandomValues = (elements: any) => {
    let min = Math.ceil(elements.min);
    let max = Math.floor(elements.max);
    console.log(min);
    console.log(max);

    let rand = Math.floor(Math.random() * (max - min + 1)) + min;

    return rand;
  };

  let getRandomElements = (element: Array<string>) => {
    let rand = Math.floor(Math.random() * element.length);
    return element[rand];
  };

  let getRandomScene = (element: Array<object>) => {
    let rand = Math.floor(Math.random() * element.length);
    return rand;
  };

  useEffect(() => {
    generateGameData();
  }, []);

  const styling = {
    backgroundImage: `url('${bgImage}')`,
  };

  const grid = {
    display: `grid`,
    gridTemplateColumns: `repeat(${amountValue}, 1fr)`,
    placeItems: `center`,
  };

  const field = {
    backgroundImage: `url('${fieldImage}')`,
    backgroundSize: `100%`,
    display: `grid`,
    gridTemplateColumns: `repeat(${amountValue}, 1fr)`,
    placeItems: `center`,
  };

  return (
    <>
      <Background style={styling}>
        <Wrap>
          <ElementBlock >
            <ImageBlock style={grid} >
              {elemenstArray &&
                elemenstArray.map((item) => <img src={item} alt="" draggable={true}/>)}
            </ImageBlock>
            <TextBlock style={grid}>
              {numbersArray && numbersArray.map((item) => <P draggable={true}>{item}</P>)}
            </TextBlock>
            
          </ElementBlock>
          <ModeBlock>
            {modeValue == "increase" && (
              <>
                <ModeImageBlock>
                  <img src={ascending.src} alt="" />
                </ModeImageBlock>
                <ModeTextBlock>
                  <ModeP>По возрастанию</ModeP>
                </ModeTextBlock>
              </>
            )}
            {modeValue == "descending" && (
              <>
                <ModeImageBlock>
                  <img src={descending.src} alt="" />
                </ModeImageBlock>
                <ModeTextBlock>
                  <ModeP>По убыванию</ModeP>
                </ModeTextBlock>
              </>
            )}
            <P></P>
          </ModeBlock>
          <GameField style={field}>
            {[...Array(amountValue)].map((e, i) => (
              <GameFieldElement></GameFieldElement>
            ))}
          </GameField>
        </Wrap>
      </Background>
    </>
  );
};

export default GamePage;
