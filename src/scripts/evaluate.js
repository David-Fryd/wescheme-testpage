
// Import the evaluator code from somewhere
import { testFxn } from 'wescheme-js/temp_evaluator_folder/evaluator.js';

export function CustomEvaluator(compiledCode){
    // var Runner = function(interactionsDiv) {
    //     var that = this;
    //     this.interactionsDiv = jQuery(interactionsDiv);
    //     this.evaluator = new Evaluator({ 
    //        write: function(thing) { that.addToInteractions(thing); },
    //     });
    //     this.evaluator.setImageProxy("/imageProxy");
    //     this.evaluator.setRootLibraryPath("/js/mzscheme-vm/collects");
    //     this.evaluator.setDynamicModuleLoader(
    //         plt.wescheme.makeDynamicModuleLoader("/js/mzscheme-vm/collects"));
    // };


    // Runner.prototype.runCompiledCode = function(compiledCode, permStringArray) {
    //     var that = this;
    //     var onSuccessRun = function() { };
    //     var onFailRun = function(exn) { that.renderErrorAsDomNode(exn); };
    //     this.evaluator.executeCompiledProgram((0,eval)('(' + compiledCode + ')'),
    //                                           onSuccessRun,
    //                                           onFailRun);
    // };

    // Runner.prototype.runSourceCode = function(title, sourceCode, permStringArray) {
    //     var that = this;
    //     var onSuccessRun = function() { };
    //     var onFailRun = function(exn) { that.renderErrorAsDomNode(exn); };
    //     this.evaluator.executeProgram(title,
    //                                   sourceCode,
    //                                   onSuccessRun,
    //                                   onFailRun);
    // };

    // Runner.runCompiledCode(compiledCode)

    // var evaluator = new Evaluator({ 
    //     write: function(thing) { that.addToInteractions(thing); },
    //  });

    // let local = wtf
    // console.log("wtf: ", local)

    testFxn()

      console.log("THIS IS THE EVALUATOR")
    //   console.log(evaluator);

}