import { TestImage, TestResultBase, Text, Title } from './TestResult.style'

import Loading from '../Loading/Loading';
import React from 'react'
import { useState } from 'react';

const TestResult = (props) => {
    const { filteredTest, showResult } = props;

    const [loading, setLoading] = useState(true);
    const selectedTest = filteredTest[showResult.index]

    const handleImageLoad = () => {
        setLoading(false)
    }

    return (
        <TestResultBase>
            <TestImage src={selectedTest.imageUrl} onLoad={handleImageLoad} />
            {loading && <Loading loading={loading} />}
        </TestResultBase>
    )
}

export default TestResult