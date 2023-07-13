function talk(){
    var know = {
        "Hello": "Hi! How can i help you.",
        "Who are you": "Chatbot here",
        "How are you": "Good:)",
        "ok": "Thankyou so much!",
        "Bye": "Okay! will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}