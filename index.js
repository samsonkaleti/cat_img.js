function switchOff() { 
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png" 
    document.getElementById("catImage").src =  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off"  
    document.getElementById("offSwitch").style.backgroundColor = "red" 
    document.getElementById("onSwitch").style.backgroundColor = " #cbd2d9"
   

    
} 

function switchOn() { 
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png" 
    document.getElementById("catImage").src =    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On" 
    document.getElementById("onSwitch").style.backgroundColor = "green" 
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9"
    
}