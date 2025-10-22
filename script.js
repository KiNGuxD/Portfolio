function Visible(elementId) {
    var elem = document.getElementById(elementId);
    if (!elem) return;

    elem.addEventListener('mouseover', function() {
        elem.style.opacity = "1";
    });

    elem.addEventListener('mouseout', function() {
        elem.style.opacity = "0.30";
    });

    // Optionally, set initial opacity
    elem.style.opacity = "0.3";
    console.log("Visible function initialized for", elementId);
}

function Show(elementId) {
    var elem = document.getElementById(elementId);
    if (!elem) return;
    const fixedContent = document.querySelector('.FixedContent');
    const contentArea = document.getElementById('ContentArea');
    if (contentArea) {
        if(elementId === "gamercode1"){
            Content = `<h1 style="font-size: 40px;
            font-weight: bold;
            color: white;
            font-family: 'Press Start 2P',arial;
            color:yellow;
            margin:0;
            padding:20px;
            margin-bottom:-10px;">GamerCode - A game Download Engine</h1><h2 style="padding:20px;
            font-family: 'Alata',arial;
        text-align: justify;
        font-size:20px;">This project is a modern and responsive front-end web application designed as a game download platform, inspired by services like Epic Games and Steam. The goal of the website is to provide users with an engaging and intuitive experience where they can browse, explore, and download games with ease.</h2>
        <div style="padding: 20px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
    <img src="gamecode1.png" 
         alt="BotVerse Dashboard Screenshot" 
         style="width:400px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">

    <img src="gamecode2.gif" 
         alt="BotVerse Discord Integration Demo" 
         style="width:400px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">
        `;
        
        }
        else if(elementId === "gamercode3"){
            Content = `<h1 style="font-size: 40px;
            font-weight: bold;
            color: yellow;
            font-family: 'Press Start 2P', arial;
            margin: 0;
            padding: 20px;
            margin-bottom: -10px;">
    Discord Self-Bot (Educational Project)
</h1>

<h2 style="padding: 20px;
            font-family: 'Alata', arial;
            text-align: justify;
            font-size: 20px;">
    This project is an educational front-end interface built to demonstrate how a Discord self-bot operates 
    from a technical and learning perspective. It aims to help developers understand how user automation 
    interacts with Discord’s API, focusing on safe and ethical experimentation in a controlled environment. 
    The project is purely for **research and educational** purposes, respecting Discord’s Terms of Service 
    and avoiding any real-world automation on live servers.
    
</h2>

<div style="padding: 20px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
    <img src="discordselfbot1.png" 
         alt="BotVerse EDU Dashboard Screenshot" 
         style="width:400px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">

    <img src="discordselfbot2.png" 
         alt="BotVerse EDU Discord Simulation Demo" 
         style="width:200px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">
</div>
`;
        }
        else if(elementId === "gamercode2"){
            Content = `<h1 style="font-size: 40px;
            font-weight: bold;
            color: yellow;
            font-family: 'Press Start 2P', arial;
            margin: 0;
            padding: 20px;
            margin-bottom: -10px;">
    Discord Bot Deployment
</h1>

<h2 style="padding: 20px;
            font-family: 'Alata', arial;
            text-align: justify;
            font-size: 20px;">
    This project is a custom-built Discord bot created to make server management smarter and more interactive.
It’s designed to handle tasks like moderating chats, responding to commands, sharing updates, and connecting users through automated features.
Inspired by modern Discord tools, the bot focuses on speed, reliability, and ease of use, offering a smooth experience while keeping the setup simple and efficient.
</h2>

<div style="padding: 20px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
    <img src="discordbot1.png" 
         alt="BotVerse Dashboard Screenshot" 
         style="width:400px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">

    <img src="discordbot2.png" 
         alt="BotVerse Discord Integration Demo" 
         style="width:200px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">
</div>
`;
        }
        contentArea.innerHTML = Content;
        fixedContent.style.visibility = "visible";
        console.log("Content : ", elementId);
    }
}

function HideAll() {
    var fixedContent = document.querySelector('.FixedContent');
    if (fixedContent) {
        fixedContent.style.visibility = "hidden";
        console.log("Hid FixedContent");
    }
}
