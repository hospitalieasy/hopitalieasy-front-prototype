import { CalculateButton, CalculatorBase, ContentWrapper, Kilogram, Length, Result, ResultWrapper, Title } from "./Calculator.style";
import { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import CalculatorPop from "..//CalculatorPop/CalculatorPop"
import TextField from '@mui/material/TextField';

const Calculator = () => {

    // TODO: change states with reducers

    /* sets the values */
    const [shower, setShower] = useState(false)
    const [length, setLength] = useState(0);
    const [weight, setWeight] = useState(0);
    const [resultInfo, setResultInfo] = useState({ text: "", color: "" });

    /* calculates the mass ratios */
    const calculateMass = () => {
        const mass = (weight / (length * length)) * 10000;

        if (mass <= 26 && mass > 20) {
            setResultInfo({ text: "Normal", color: "#113f67" });
        } else if (mass <= 20 && mass >= 15) {
            setResultInfo({ text: "Underweight", color: "#ffc400" });
        } else if (mass >= 25 && mass <= 45) {
            setResultInfo({ text: "Overweight", color: "#f95959" });
        } else if (mass >= 46 || mass < 15) {
            setResultInfo({ text: "Improbable", color: "#7300ff" });
        } else {
            setResultInfo({ text: "Enter Input", color: "black" });
        }
    };


    /* renders page when weight and length is changed */
    useEffect(() => {
        calculateMass();
    }, [weight, length]);

    /* shows the result */
    const showResult = () => {
        setShower(true);
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
                        <Button onClick={calculateMass} variant="contained">
                            <span
                                onClick={showResult}
                                style={{ width: "100%", height: "100%" }}>
                                CALCULATE
                            </span>
                        </Button>
                        {shower && resultInfo.text == "Overweight" && (
                            <CalculatorPop />
                        )}
                        {shower && resultInfo.text == "Underweight" && (
                            <CalculatorPop />
                        )}
                    </CalculateButton>
                    {shower && (
                        <Result color={resultInfo.color} >
                            {resultInfo.text}
                        </Result>)
                    }
                </ResultWrapper>
            </ContentWrapper>
        </CalculatorBase >
    );
}

export default Calculator;