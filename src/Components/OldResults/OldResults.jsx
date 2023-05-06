import { ContentWrapper, Date, OldResultsBase, TestResultImage } from './OldResults.style'

import React from 'react'

const OldResults = (props) => {
    const { showOldResults, filteredTests } = props;

    const selectedPatient = filteredTests[showOldResults.index]
    return (
        <OldResultsBase>
            {selectedPatient.imgUrl.map((result, index) => (
                <ContentWrapper key={index}>
                    <Date>{result.date}</Date>
                    <TestResultImage src={result.imgUrl} />
                </ContentWrapper>
            ))}
        </OldResultsBase>
    )
}

export default OldResults