import { CalculateButton, CalculatorBase, ContentWrapper, Kilogram, Length, Result, ResultWrapper, Title } from "./Calculator.style";
import { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import CalculatorPop from "..//CalculatorPop/CalculatorPop"
import TextField from '@mui/material/TextField';

const Calculator = () => {
    const [unit, setUnit] = useState({ length: 0, weight: 0 })
    const [result, setResult] = useState({ text: "", color: "", show: false });

    /* calculates the mass ratios */
    const calculateMass = () => {
        const mass = (unit.weight / (unit.length * unit.length)) * 10000;
        let text, color;

        switch (true) {
            case mass <= 26 && mass > 20:
                text = "Normal";
                color = "#113f67";
                break;
            case mass <= 20 && mass >= 15:
                text = "Underweight";
                color = "#ffc400";
                break;
            case mass >= 25 && mass <= 45:
                text = "Overweight";
                color = "#f95959";
                break;
            case mass >= 46 || mass < 15:
                text = "Improbable";
                color = "#7300ff";
                break;
            default:
                text = "Enter Input";
                color = "black";
                break;
        }

        setResult({ text, color });
    };


    /* renders page when weight and length is changed */
    useEffect(() => {
        calculateMass();
    }, [unit.weight, unit.length]);


    const showResult = () => {
        setResult({ ...result, show: true });
    };

    return (
        <CalculatorBase>
            <ContentWrapper>
                <Title>Body Mass Calculator</Title>
                <Length>
                    <TextField
                        id="standard-basic"
                        label="Size(cm)"
                        variant="standard"
                        onChange={(e) => setUnit({ ...unit, length: e.target.value })}
                    />
                </Length>
                <Kilogram>
                    <TextField
                        id="standard-basic"
                        label="Weight(kg)"
                        variant="standard"
                        onChange={(e) => setUnit({ ...unit, weight: e.target.value })}
                    />
                </Kilogram>
                <ResultWrapper>
                    <CalculateButton>
                        <Button onClick={calculateMass} variant="contained">
                            <span
                                onClick={showResult}
                                style={{ width: "100%", height: "100%" }}>
                                CALCULATE
                            </span>
                        </Button>
                        {result.show && result.text === "Overweight" && (
                            <CalculatorPop />
                        )}
                        {result.show && result.text === "Underweight" && (
                            <CalculatorPop />
                        )}
                    </CalculateButton>
                    {result.show && (
                        <Result color={result.color} >
                            {result.text}
                        </Result>)
                    }
                </ResultWrapper>
            </ContentWrapper>
        </CalculatorBase >
    );
}

export default Calculator;