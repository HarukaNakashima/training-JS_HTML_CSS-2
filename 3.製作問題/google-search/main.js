const getInput = () => {
    const inputString = document.getElementById("inputstring").value;
    console.log(`You are googling "${inputString}".`);
}

const jumpToList = () => {
    const inputString = document.getElementById("inputstring").value;
    document.querySelector(`#output1`).innerHTML = inputString;
}