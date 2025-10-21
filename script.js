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
    <img src="https://media.discordapp.net/attachments/1152956408711626822/1430132394685501460/gamecode1.png?ex=68f8aa15&is=68f75895&hm=1a91a293cfebf2b066749fc5372722fae2fdecd1e5f28034b2b96f5281790b52&=&format=webp&quality=lossless&width=1555&height=802" 
         alt="BotVerse Dashboard Screenshot" 
         style="width:400px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">

    <img src="https://media.discordapp.net/attachments/1152956408711626822/1430132393930657802/gamecode2.gif?ex=68f8aa15&is=68f75895&hm=c39c081339e282084214aa5bec360284b21f184c6593d8c7156dafa7b49fed40&=" 
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
    <img src="https://media.discordapp.net/attachments/1152956410938802216/1430143303684194335/image.png?ex=68f8b43e&is=68f762be&hm=1a897b2ec1f431c93acaf6364e6b582b983f63bff1ad4b414df49700031fc85f&=&format=webp&quality=lossless" 
         alt="BotVerse EDU Dashboard Screenshot" 
         style="width:400px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">

    <img src="https://media.discordapp.net/attachments/1152956410938802216/1430144693085409342/image.png?ex=68f8b589&is=68f76409&hm=fc63744fedef4ee4a7679ad0e2b486e50726af9cfcdd6aa392f012f8e49674a9&=&format=webp&quality=lossless" 
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
    This project showcases a modern front-end interface designed to integrate and deploy a custom Discord bot. 
    The website serves as a dashboard for managing bot features, viewing real-time server data, and connecting with Discord’s API. 
    Inspired by modern Discord tools and dashboards, it focuses on clean visuals, responsive design, and an intuitive layout that allows users to easily monitor bot status, issue commands, and customize settings directly from the interface.
</h2>

<div style="padding: 20px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
    <img src="https://media.discordapp.net/attachments/1152956410938802216/1430145780991131810/image.png?ex=68f8b68d&is=68f7650d&hm=5c4b585a17f49e953c56048def91bd9c0051e9feda81bb60f002d917c64c32f6&=&format=webp&quality=lossless" 
         alt="BotVerse Dashboard Screenshot" 
         style="width:400px; display:block; margin:20px; border:5px solid white; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">

    <img src="https://media.discordapp.net/attachments/1152956410938802216/1430145861102338068/image.png?ex=68f8b6a0&is=68f76520&hm=02e00c908a2cc96faed4d57c98841011d0d4c10b8fbd93740f521e5ae35b2121&=&format=webp&quality=lossless" 
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
