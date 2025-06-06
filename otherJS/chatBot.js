document.addEventListener('DOMContentLoaded', function() {
    var count = 0;
    const chatMessages = document.getElementById('chat-messages');
    
    // THE BUTTONS
    const startConvoBtn = document.querySelector('.start-convo-btn');
    const speakBtn = document.querySelector('.speak-btn');
    const stopConvoBtn = document.querySelector('.stop-convo-btn');
    
    const startConvoBtnCont = document.querySelector('.start-convo-btn-cont');
    const otherBtnCont = document.querySelector('.other-btn-cont');
    
    const userSpeech = document.querySelector('.user-speech');
    const listenText = document.querySelector('.listening-text');
    
    // Initialize speech recognition and synthesis
    var speech = new p5.Speech();
    var listenSpeech = new p5.SpeechRec('en-US');
    
    // Set up RiveScript bot
    var bot = new RiveScript();
    bot.loadFile("../RiveScripts/botBrain.rive").then(loading_done).catch(loading_error);
    
    function loading_done() {
        console.log("Bot has finished loading!");
        bot.sortReplies();
    }
    
    function loading_error() {
        console.log("Error loading bot brain!");
    }
    
    // Add a message to the chat interface
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'message user-message' : 'message bot-message';
        
        const messagePara = document.createElement('p');
        messagePara.textContent = text;
        
        messageDiv.appendChild(messagePara);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Welcome message function
    function welcome() {
        const welcomeMessage = "Hello my friend, I'm happy you're here!";
        speech.speak(welcomeMessage);
        addMessage(welcomeMessage);
    }
    
    // Start conversation button
    if (startConvoBtn) {
        startConvoBtn.addEventListener('click', () => {
            count++;
            startConvoBtnCont.style.display = "none";
            otherBtnCont.style.display = "flex";
            
            if (count === 1) {
                welcome();
            }
        });
    }
    
    // Stop conversation button
    if (stopConvoBtn) {
        stopConvoBtn.addEventListener('click', () => {
            startConvoBtnCont.style.display = "block";
            speakBtn.style.display = "none";
            stopConvoBtn.style.display = "none";
            userSpeech.innerHTML = "";
            
            addMessage("Conversation ended. Click 'Start Conversation' to begin again.");
            otherBtnCont.style.display = "none";
        });
    }
    
    // Speak button
    if (speakBtn) {
        speakBtn.addEventListener('click', listenUser);
    }
    
    // Listen to user speech
    function listenUser() {
        listenSpeech.start(false, true);
        listenSpeech.onResult = startListen;
        listenSpeech.onStart = start;
        listenSpeech.onEnd = end;
        
        function startListen() {
            userSpeech.innerHTML = listenSpeech.resultString;
        }
    }
    
    // Bot response function
    function botReply(message) {
        let username = "local-user";
        
        bot.reply(username, message).then(function(reply) {
            // Handle special navigation commands
            if (reply === "game section") {
                window.location.href = "../otherJS/carGame/games.html";
                return;
            } else if (reply === "exercise section") {
                window.location.href = "../otherHTML/exercise.html";
                return;
            } else if (reply === "food section") {
                window.location.href = "../otherHTML/food.html";
                return;
            } else if (reply === "statistics section") {
                window.location.href = "../otherHTML/statistics.html";
                return;
            }
            
            // Add bot's reply to chat and speak it
            addMessage(reply);
            speech.speak(reply);
        });
    }
    
    // Speech recognition start
    function start() {
        listenText.classList.add("show-text");
        userSpeech.innerHTML = "";
    }
    
    // Speech recognition end
    function end() {
        listenText.classList.remove("show-text");
        
        if (listenSpeech.resultValue) {
            let userInteraction = listenSpeech.resultString;
            addMessage(userInteraction, true);
            botReply(userInteraction);
        }
    }
    
    // Setup P5 speech
    function setup() {
        noCanvas();
    }
    
    // Make setup globally available for P5
    window.setup = setup;
});