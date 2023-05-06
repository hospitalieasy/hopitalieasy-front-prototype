import { TestImage, TestResultBase } from './TestResult.style'

import React from 'react'

const TestResult = (props) => {
    const { filteredTest } = props;

    return (
        <TestResultBase>
            <TestImage src={filteredTest.imgUrl} />
        </TestResultBase>
    )
}

export default TestResult