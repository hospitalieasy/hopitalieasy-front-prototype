import { Button } from "@mui/material";
import styled from "styled-components";

export const RoleSelectorBase = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LeftSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid;
    -webkit-transition: background-color 0.5s ease-out;
    -moz-transition: background-color 0.5s ease-out;
    -o-transition: background-color 0.5s ease-out;
    transition: background-color 0.5s ease-out;
        &:hover{
            background-color: #83cee0;;
            cursor: pointer;
        }
`;

export const RightSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-transition: background-color 0.5s ease-out;
    -moz-transition: background-color 0.5s ease-out;
    -o-transition: background-color 0.5s ease-out;
    transition: background-color 0.5s ease-out;
        &:hover{
            background-color: #83cee0;;
            cursor: pointer;
        }
`;

export const CustomButton = styled(Button)`
    height: 200px;
    width: 300px;
`;


