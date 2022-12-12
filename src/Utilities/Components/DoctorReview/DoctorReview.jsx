import { DoctorReviewBase, ReviewWrapper, Title } from "./DoctorReview.style";

import BasicRating from "..//..//..//Components/Rating/Rating"
import { Button } from "@mui/material";

const DoctorReview = () => {
    return (
        <DoctorReviewBase>
            <h3 style={{ marginBottom: "25px" }} >Quick Appointments (Future Content)</h3>
            <ReviewWrapper>
                <BasicRating />
                <Title>Dr. Gustavo Fring</Title>
                <Button variant="contained">Get Appointment</Button>
            </ReviewWrapper>

            <ReviewWrapper>
                <BasicRating />
                <Title>Dr. Saul Goodman</Title>
                <Button variant="contained">Get Appointment</Button>
            </ReviewWrapper>

            <ReviewWrapper>
                <BasicRating />
                <Title>Dr. Walter White</Title>
                <Button variant="contained">Get Appointment</Button>
            </ReviewWrapper>
        </DoctorReviewBase>
    );
}

export default DoctorReview;