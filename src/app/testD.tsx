'use client'
import React from "react"
import { useEffect } from "react"
import { hydrateRoot } from 'react-dom/client';

export const Test = ({ content }: { content: string}) => {
    useEffect(() => {
        console.info(content, 'content')
    })
    return (
        <div className="testDWrap" onClick={() => alert('hello testD')}>{content}</div>
    )
}