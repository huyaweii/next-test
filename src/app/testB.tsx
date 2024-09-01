'use client'
import React, { useEffect } from 'react';

export const TestB = () => {
    useEffect(() => {
        console.info('useEffect')
    })
    return (
        <div className="testBWrap" onClick={() => alert('hello testB')}>TestB</div>
    )
}

export default TestB;
