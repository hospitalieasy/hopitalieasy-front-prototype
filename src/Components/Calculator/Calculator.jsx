import { CalculateButton, CalculatorBase, ContentWrapper, Kilogram, Length, Result, ResultWrapper, Title } from "./Calculator.style";
import { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import CalculatorPop from "..//CalculatorPop/CalculatorPop"
import TextField from '@mui/material/TextField';

const Calculator = () => {

    /* sets the values */
    const [shower, setShower] = useState(false)
    const [length, setLength] = useState(0);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState("");
    const [resultColor, setResultColor] = useState("")

    /* calculates the mass ratios */
    const massCalculator = () => {
        const mass = ((weight / (length * length)) * 10000)

        if (mass <= 26 && mass > 20) {
            setResult("Normal")
            setResultColor("#113f67")
        } else if (mass <= 20 && mass >= 15) {
            setResult("Underweight")
            setResultColor("#ffc400")
        } else if (mass >= 25 && mass <= 45) {
            setResult("Overweight")
            setResultColor("#f95959")
        } else if (mass >= 46) {
            setResult("Improbable")
            setResultColor("#7300ff")
        } else if (mass < 15) {
            setResult("Improbable")
            setResultColor("#7300ff")
        }
        else {
            setResult("Enter Input")
            setResultColor("black")
        }
    }

    /* renders page when weight and length is changed */
    useEffect(() => {

    }, [weight, length])

    /* shows the result */
    const resultShower = () => {
        setShower(true)
    }

    return (
        <CalculatorBase>
            <ContentWrapper>
                <Title>Body Mass Calculator</Title>
                <Length>
                    <TextField
                        id="standard-basic"
                        label="Size(cm)"
                        variant="standard"
                        onChange={(e) => setLength(e.target.value)}
                    />
                </Length>
                <Kilogram>
                    <TextField
                        id="standard-basic"
                        label="Weight(kg)"
                        variant="standard"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </Kilogram>
                <ResultWrapper>
                    <CalculateButton>
                        <Button onClick={massCalculator} variant="contained">
                            <span
                                onClick={resultShower}
                                style={{ width: "100%", height: "100%" }}>
                                CALCULATE
                            </span>
                        </Button>
                        {shower && result == "Overweight" && (
                            <CalculatorPop />
                        )}
                        {shower && result == "Underweight" && (
                            <CalculatorPop />
                        )}
                    </CalculateButton>
                    {shower && (
                        <Result color={resultColor} >
                            {result}
                        </Result>)
                    }
                </ResultWrapper>
            </ContentWrapper>
        </CalculatorBase >
    );
}

export default Calculator;