import React from "react";
import ReactDOM from "react-dom/server";
import { Suspense } from "react";
import dynamic from 'next/dynamic'

// import { Test } from "./test";
import { TestB } from "./testB";
const Test = React.lazy(() => import('./testDWrap'))
export default async function Home() {
  console.info('99999')
  // console.info(ReactDOM.renderToString(<div>jaja</div>))
  return (
    <div className="wrapper">
      <div className='testAWrap'>TestA</div>
      <div className='testBCDWrap'>
        <TestB />
        <div className="testCDWrap">
          <div className="testCWrap">TestC</div>
          <Suspense fallback={<div className="testDWrap">loading</div>}>
            <Test />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
