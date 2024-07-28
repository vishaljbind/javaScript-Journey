// why use iife?
// global variable access can pollute the db invokation

(function dbfun(){
    // named iife
    console.log('DB connected');
})(); ///add ; is important for termination

(
    (name) => {
        //unamed iife
        console.log(`DB CONNECTED ${name}`);
    }
) ('anand')

