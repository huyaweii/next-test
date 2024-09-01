import { Test } from "./testD";

export const TestDWrap = async () => {
    const content = await new Promise(resolve => {
        setTimeout(() => {
            resolve('TestD')
        }, 5000)
    }) as string;
    return (
        <Test content={content}/>
    )
}
export default TestDWrap;