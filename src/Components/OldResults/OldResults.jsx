import { ContentWrapper, Date, Divider, OldResultsBase, TestResultImage, Text, Title } from './OldResults.style'

import Loading from '../Loading/Loading';
import React from 'react'
import { useState } from 'react';

const OldResults = (props) => {
    const { showOldResults, filteredTests } = props;

    const [loading, setLoading] = useState(true)
    const selectedPatient = filteredTests[showOldResults.index];

    const handleLoading = () => {
        setLoading(false)
    }

    return (
        <OldResultsBase>
            {selectedPatient.imageUrl.map((imageUrl, index) => (
                <><ContentWrapper key={index}>
                    {!loading && (<Date>Appointment Date: {selectedPatient.date[index]}</Date>)}
                    <TestResultImage onLoad={handleLoading} src={imageUrl} />
                    <Title>My Feedback:</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat rem quos quae, nemo sint ab sunt quidem quisquam nesciunt.
                    </Text>
                </ContentWrapper><Divider /></>
            ))}
            {loading && (<Loading loading={loading} />)}
        </OldResultsBase>
    );
};

export default OldResults;
