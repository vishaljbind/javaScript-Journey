// forEach loop

const programming = ["js", "kotlin", "java", "cpp"]

programming.forEach(element => {
    console.log(element);
});

//
function printme(item) {
    console.log(item);
}

programming.forEach(printme)

programming.forEach((item, index, arr) => {
    console.log(item,index,arr);
})

const coding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "kotlin",
        langFileName: "kt"
    }
]

coding.forEach((item) => {
    console.log(item);
    console.log(item.langFileName);
})