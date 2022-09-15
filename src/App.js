import React from "react";
import {fullCompileProcess, RRCompile} from './scripts/compile'
import {CustomEvaluator} from './scripts/evaluate'

const App = () =>  {

    let code = "";
    code = '(triangle 200 "solid" "turquoise")'
    code = '(printf "hello world")'
    
    let program = "program name"
    let debug = true

    let output = ""

    let onDone = (p) => {console.log("done!", p); output = (p)}
    let onDoneError = (p) => {console.log("ERROR ( but done )", p)}

    let response = RRCompile(program, code, onDone, onDoneError)

    console.log("response: ", response)

    CustomEvaluator()

    return (
        <>
            <h1>Working App</h1> 
            <h3>Code:</h3>
            <p>{code}</p>
            <h3>Response Bytecode:</h3>
            <p>{output}</p>
        </>
    )
}

export default App