import { TestImage, TestResultBase } from './TestResult.style'

import React from 'react'

const TestResult = (props) => {
    const { filteredTest, showResult } = props;

    const selectedTest = filteredTest[showResult.index]
    return (
        <TestResultBase>
            <TestImage src={selectedTest.imgUrl} />
        </TestResultBase>
    )
}

export default TestResult