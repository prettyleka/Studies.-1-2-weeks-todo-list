const quiz = {
    code: function(){
    answers: {
        a : "answers"
        b: "this is not the answer"
        c: "this"
        d: "21"
        e: "both a and c"
        f: "both a and d"
    }
    console.log(this.answers.c + " is not the answer")
}}