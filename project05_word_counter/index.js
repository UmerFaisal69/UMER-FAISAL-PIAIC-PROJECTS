import inquirer from "inquirer";
function counter(para) {
    let freeWhiteSpace = para.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
async function startWordCount(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "write paragraph here ...",
            name: "paragraph",
        });
        console.log(counter(res.paragraph));
    } while (true);
}
startWordCount(counter);
