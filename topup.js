let result = "";

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}

function clearResult() {function processTopUp() {
    const carrier = document.getElementById("carrier").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const amount = document.getElementById("amount").value;

    // In a real-world scenario, you'd need to send this information to a backend to process the top-up.
    // Here, we're just displaying a simple message.
    const resultMessage = `Top-up for ${carrier} phone number ${phoneNumber} with $${amount} was successful.`;

    document.getElementById("result").innerText = resultMessage;
}

    result = "";
    document.getElementById("result").value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
