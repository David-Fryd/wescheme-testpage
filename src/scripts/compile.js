import {lex} from 'wescheme-js/src/lex'
import {parse} from 'wescheme-js/src/parser'
import {desugar, analyze} from 'wescheme-js/src/analyzer'
import {compile} from 'wescheme-js/src/compiler'


export function RRCompile(programName, code, onDone, onDoneError) {
    // strip out nonbreaking whitespace chars from the code
    code = code.replace(/[\uFEFF\u2060\u200B]/,'');

    // get an array of charCodes for all non-ascii chars in a string
    function getHigherThanAsciiChars(str){
       var nonASCII = str.split("").filter(function(c) { return (c.charCodeAt(0) > 127); });
       return nonASCII.map(function(c) { return c.charCodeAt(0);});
    }

   // compile it!
   try{
       var start = new Date().getTime();
       var lexemes     = lex(code, programName);
       var AST         = parse(lexemes);
       var desugared   = desugar(AST)[0];  // includes [AST, pinfo]
       var pinfo       = analyze(desugared);
       var local_bytecode  = compile(desugared, pinfo);
       onDone(JSON.stringify(local_bytecode));
   } catch (e) {
       var local_error = getError(e).toString();
       // if it's a fatal error, log the error and move on
       if(/FATAL ERROR/.test(local_error.toString())){
         logResults(code, JSON.stringify(local_error), "FATAL ERROR");
         onCompilationFail(onDoneError);
       // otherwise, render the error as usual
       } else{
         onDoneError(local_error);
       }
   }
   var end         = new Date().getTime(), localTime   = Math.floor(end-start);
   console.log("Compiled in: " + Math.floor(end-start) +"ms");
 };



// export function fullCompileProcess(code, debug){
//     let sexp = lex(code, "program", debug)
//     let AST = parse(sexp, debug)
//     let ASTandPinfo = desugar(AST, undefined, debug)
//     let program = ASTandPinfo[0]
//     let pinfo = analyze(program, debug)
//     let response = compile(program, pinfo, debug)
//     console.log(response)
//     return response
// }