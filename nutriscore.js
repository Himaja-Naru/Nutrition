var mode = "general";
function bouton_general(){
    if (mode != "general") {
        switch (mode){
            case "fat" : 
                cacher_fat();
                break;
            case "cheese" :   
                document.getElementById("button_cheese").classList.remove("mode_actif");
                break;
            case "beverage" :
                document.getElementById("button_beverage").classList.remove("mode_actif");
                break;
            case "water" : 
                document.getElementById("button_water").classList.remove("mode_actif");
                break;
        }
        document.getElementById("button_general").classList.add("mode_actif");
        mode = "general";
        calcul_energy();
        calcul_acides_gras_satures();
        calcul_sugar();
        calcul_fruits();
        canvas_colors();
    }
}
function button_fat(){
    if (mode != "fat") {
        switch (mode){
            case "general" :    
                document.getElementById("button_general").classList.remove("mode_actif");
                break;
            case "cheese" :   
                document.getElementById("button_cheese").classList.remove("mode_actif");
                break;
            case "beverage" :   
                document.getElementById("button_beverage").classList.remove("mode_actif");
                break;
            case "water" : 
                document.getElementById("button_water").classList.remove("mode_actif");
                break;
        }
        document.getElementById("button_fat").classList.add("mode_actif");
        document.getElementById("group_fat").classList.remove("hidden");
        document.getElementById("group_ratio_fat_acids_saturated").classList.remove("hidden");
        document.getElementById("fat_acids_saturated_points").classList.add("hidden");
        mode = "fat";
        calcul_energy();
        calcul_fat_acids_saturated();
        calcul_fruits();
        canvas_colors();
    }
}
function button_cheese(){
    if (mode != "cheese"){
        switch (mode){
            case "general" :
                document.getElementById("button_general").classList.remove("mode_actif");
                break;
            case "fat" :
                cacher_fat();
                break;
            case "beverage" :
                document.getElementById("button_beverage").classList.remove("mode_actif");
                break;
            case "water" :
                document.getElementById("button_water").classList.remove("mode_actif");
                break;
        }
        document.getElementById("button_cheese").classList.add("mode_actif");
        mode = "cheese";
        calcul_energy();
        calcul_sugar();
        calcul_proteins();
        calcul_fruits();
        canvas_colors();
    }
}
function bouton_beverage(){
    if (mode != "beverage"){
        switch(mode){
            case "general" :
                document.getElementById("button_general").classList.remove("mode_actif");
                break;
            case "fat" : 
                cacher_fat();
                break;
            case "cheese" :
                document.getElementById("button_cheese").classList.remove("mode_actif");
                break;
            case "water" :
                document.getElementById("button_water").classList.remove("mode_actif");
                break;
        }
        document.getElementById("bouton_beverage").classList.add("mode_actif");
        mode = "beverage";
        calcul_energy();
        calcul_fat_acids_saturated();
        calcul_sugar();
        calcul_fruits();
        canvas_colors();
    }
}
function button_water(){
    if (mode != "water"){
        switch(mode){
            case "general":
                document.getElementById("button_general").classList.remove("mode_actif");
                break;
            case "fat":
                document.getElementById("button_fat").classList.remove("mode_actif");
                break;
            case "cheese":
                document.getElementById("button_cheese").classList.remove("mode_actif");
                break;
            case "beverage":
                document.getElementById("button_beverage").classList.remove("mode_actif");
                break;
        }
        document.getElementById("button_water").classList.add("mode_actif");
        mode = "water";
        calcul_water();
    }
}
function cacher_fat(){
    document.getElementById("button_fat").classList.remove("mode_actif");
    document.getElementById("group_fat").classList.add("hidden");
    document.getElementById("group_fat_acids_saturated").classList.add("hidden");
    document.getElementById("fat_acids_saturated_points").classList.remove("hidden");
    document.getElementById("fat").value="";
    document.getElementById("ratio_fat_acids_saturated").value="";
    calcul_fat_acids_saturated();
}
function calcul_energy(){
    var energy=document.getElementById("energy").value;
    var pts=0;
    
    if (energy < 0){
        energy = 0
        document.getElementById("energy").value=energy;
    }
    
    if (mode == "beverage"){
        if (energy <= 0) {pts=0}
        else if (energy <= 30) {pts=1}
        else if (energy <= 60) {pts=2}
        else if (energy <= 90) {pts=3}
        else if (energy <= 120) {pts=4}
        else if (energy <= 150) {pts=5}
        else if (energy <= 180) {pts=6}
        else if (energy <= 210) {pts=7}
        else if (energy <= 240) {pts=8}
        else if (energy <= 270) {pts=9}
        else if (energy > 270) {pts=10}
    }
    else{   
        if (energy <= 335) {pts=0}
        else if (energy <= 670) {pts=1}
        else if (energy <= 1005) {pts=2}
        else if (energy <= 1340) {pts=3}
        else if (energy <= 1675) {pts=4}
        else if (energy <= 2010) {pts=5}
        else if (energy <= 2345) {pts=6}
        else if (energy <= 2680) {pts=7}
        else if (energy <= 3015) {pts=8}
        else if (energy <= 3350) {pts=9}
        else if (energy > 3350) {pts=10}
    }    
    document.getElementById("energy_points").value=pts;
    calcul_points_negative();
}
function calcul_fat_acids_saturated(){
    var fat = document.getElementById("fat").value;
    var fat_acids_saturated = document.getElementById("fat_acids_saturated").value;
    var pts=0;
    if (fat > 100){
        fat = 100;
        document.getElementById("fat").value = fat;
    }
    else if (fat < 0){
        fat = 0;
        document.getElementById("fat").value = fat;
    }
    if (fat_acids_saturated > 100){
        fat_acids_saturated = 100;
        document.getElementById("fat_acids_saturated").value = fat_acids_saturated;
    }
    else if (fat_acids_saturated < 0){
        fat_acids_saturated = 0;
        document.getElementById("fat_acids_saturated").value = fat_acids_saturated;
    }
    if (mode == "fat"){
        var ratio = 0;
        if (parseInt(fat) != 0 && fat != ""){
            ratio = Math.round(fat_acids_saturated/fat*10000)/100; 
        }
        document.getElementById("ratio_fat_acids_saturated").value=ratio;
        if (ratio < 10){pts=0;}
        else if (ratio < 16){pts=1;}
        else if (ratio < 22){pts=2;}
        else if (ratio < 28){pts=3;}
        else if (ratio < 34){pts=4;}
        else if (ratio < 40){pts=5;}
        else if (ratio < 46){pts=6;}
        else if (ratio < 52){pts=7;}
        else if (ratio < 58){pts=8;}
        else if (ratio < 64){pts=9;}
        else if (ratio >= 64){pts=10;}
        document.getElementById("ratio_fat_acids_saturated_points").value=pts;
    }
    else{ 
        if (fat_acids_saturated <= 1) {pts=0}
        else if (fat_acids_saturated <= 2) {pts=1}
        else if (fat_acids_saturated <= 3) {pts=2}
        else if (fat_acids_saturated <= 4) {pts=3}
        else if (fat_acids_saturated <= 5) {pts=4}
        else if (fat_acids_saturated <= 6) {pts=5}
        else if (fat_acids_saturated  <= 7) {pts=6}
        else if (fat_acids_saturated  <= 8) {pts=7}
        else if (fat_acids_saturated  <= 9) {pts=8}
        else if (fat_acids_saturated  <= 10) {pts=9}
        else if (fat_acids_saturated  > 10) {pts=10}
        
        document.getElementById("fat_acids_saturated _points").value=pts;
    }
    
    calcul_points_negative();
}
function calcul_sugar(){
    var sugar=document.getElementById("sugar").value;
    var pts=0;
    if (sugar > 100){
        sugar = 100;
        document.getElementById("sugar").value = sugar;        
    }
    else if (sugar < 0){
        sugar = 0;
        document.getElementById("sugar").value = sugar;        
    }
     if (mode == "beverage"){
        if (sugar <= 0) {pts=0}
        else if (sugar <= 1.5) {pts=1}
        else if (sugar <= 3) {pts=2}
        else if (sugar <= 4.5) {pts=3}
        else if (sugar <= 6) {pts=4}
        else if (sugar <= 7.5) {pts=5}
        else if (sugar <= 9) {pts=6}
        else if (sugar <= 10.5) {pts=7}
        else if (sugar <= 12) {pts=8}
        else if (sugar <= 13.5) {pts=9}
        else if (sugar > 13.5) {pts=10}
        
    }
    else {
        if (sugar <= 4.5) {pts=0}
        else if (sugar <= 9) {pts=1}
        else if (sugar <= 13.5) {pts=2}
        else if (sugar <= 18) {pts=3}
        else if (sugar <= 22.5) {pts=4}
        else if (sugar <= 27) {pts=5}
        else if (sugar <= 31) {pts=6}
        else if (sugar <= 36) {pts=7}
        else if (sugar <= 40) {pts=8}
        else if (sugar <= 45) {pts=9}
        else if (sugar > 45) {pts=10}
    }
    document.getElementById("sugar_points").value=pts;
    calcul_points_negative();
}
function calcul_fibres(){
    var fibres=document.getElementById("fibres").value;
    var pts=0;
    if (fibres > 100){
        fibres = 100;
        document.getElementById("fibres").value = fibres;        
    }
    else if (fibres < 0){
        fibres = 0;
        document.getElementById("fibres").value = fibres;        
    }
    if (fibres <= 0.9) {pts=0;}
    else if (fibres <= 1.9) {pts=1;}
    else if (fibres <= 2.8) {pts=2;}
    else if (fibres <= 3.7) {pts=3;}
    else if (fibres <= 4.7) {pts=4;}
    else if (fibres > 4.7) {pts=5;}
    document.getElementById("fibres_points").value=pts;
    calcul_points_positive();
}
function calcul_proteins(){
    var proteins=document.getElementById("proteins").value;
    var pts=0;
    if (proteins > 100){
        proteins = 100;
        document.getElementById("proteins").value = proteins;        
    }
    else if (proteins < 0){
        proteins = 0;
        document.getElementById("proteins").value = proteins;        
    }
    if (proteins <= 1.6) {pts=0;}
    else if (proteins <= 3.2) {pts=1;}
    else if (proteins <= 4.8) {pts=2;}
    else if (proteins <= 6.4) {pts=3;}
    else if (proteins <= 8) {pts=4;}
    else if (proteins > 8) {pts=5;}
    document.getElementById("proteins_points").value=pts;
    calcul_points_positive();
}
function calc_salt(){
    var salt = document.getElementById("salt").value;
    if (salt > 100){
        salt = 100;
        document.getElementById("salt").value=sel;
    }
    else if (salt < 0){
        salt = 0;
        document.getElementById("salt").value=salt;
    }
    document.getElementById("sodium").value=salt*400;
    calcul_sodium()
}
function calc_sodium(){
    var sodium = document.getElementById("sodium").value;
    var salt = sodium/400;
    if (salt > 100){
        sodium = 40000;
        document.getElementById("sodium").value=sodium;
    }
    else if (salt < 0){
        sodium = 0;
        document.getElementById("sodium").value=sodium;
    }
    
    document.getElementById("salt").value=document.getElementById("sodium").value/400;
    calcul_sodium()
}
function calcul_sodium(){
    var sodium=document.getElementById("sodium").value;
    var pts=0;
    if (sodium <= 90) {pts=0;}
    else if (sodium <= 180) {pts=1;}
    else if (sodium <= 270) {pts=2;}
    else if (sodium <= 360) {pts=3;}
    else if (sodium <= 450) {pts=4;}
    else if (sodium <= 540) {pts=5;}
    else if (sodium <= 630) {pts=6;}
    else if (sodium <= 720) {pts=7;}
    else if (sodium <= 810) {pts=8;}
    else if (sodium <= 900) {pts=9;}
    else if (sodium > 900) {pts=10;}
    document.getElementById("sodium_points").value=pts;
    calcul_points_negative();
}
function calcul_fruits(){
    var fruits=document.getElementById("fruits").value;
    var pts=0;
    if (fruits > 100){
        fruits = 100;
        document.getElementById("fruits").value = fruits;
    }
    else if (fruits < 0){
        fruits = 0;
        document.getElementById("fruits").value = fruits;
    }
    if (mode == "beverage"){
        if (fruits <= 40) {pts=0;}
        else if (fruits <= 60) {pts=2;}
        else if (fruits <= 80) {pts=4;}
        else if (fruits > 80) {pts=10;}
    }
    else { 
        if (fruits <= 40) {pts=0;}
        else if (fruits <= 60) {pts=1;}
        else if (fruits <= 80) {pts=2;}
        else if (fruits > 80) {pts=5;}
    }    
    document.getElementById("fruits_points").value=pts;
    calcul_points_positive();
}
function calcul_points_negative(){
    var energy_pts = parseInt(document.getElementById("energy_points").value);
    var fat_acids_saturated_pts=0;
    if (mode == "fat"){
        fat_acids_saturated_pts = parseInt(document.getElementById("ratio_fat_acids_saturated_points").value);
    }
    else {
        fat_acids_saturated_pts = parseInt(document.getElementById("fat_acids_saturated_points").value);
    }
    var sugar_pts = parseInt(document.getElementById("sugar_points").value);
    var sodium_pts = parseInt(document.getElementById("sodium_points").value);
    var pts;
    
    if (mode != "water"){
        pts = energy_pts + fat_acids_saturated_pts + sugar_pts + sodium_pts;
    }
    else { 
        pts = "-";
    }
        
    document.getElementById("points_negative").value = pts;
    calcul_score_nutritional();
}
function calcul_points_positive(){
    var fibres = parseInt(document.getElementById("fibres_points").value);
    var proteins = parseInt(document.getElementById("proteins_points").value);
    var fruits = parseInt(document.getElementById("fruits_points").value);
    var pts;
    if (mode != "water"){
        pts = fibres + proteins + fruits;
    }
    else { 
        pts = "-";
    }
    document.getElementById("points_positive").value = pts;     
    calcul_score_nutritional();
}
function calcul_score_nutritional(){        
    var positive = parseInt(document.getElementById("points_positive").value);
    var negative = parseInt(document.getElementById("points_negative").value);
    var score = 0;
    
    var fibres = parseInt(document.getElementById("fibres_points").value);
    var proteins = parseInt(document.getElementById("proteins_points").value);
    var fruits = parseInt(document.getElementById("fruits_points").value);

    if (mode != "water"){
        if (negative >= 11 && mode != "cheese" && fruits < 5){
            score = negative - fibres - fruits;
        }
        else {  
            score = negative - positive;
        }
    }
    else { 
        score = "-";
    }
    document.getElementById("score_nutritional").value = score;
    calcul_nutriscore()
    aiguille(score)
}
function calcul_nutriscore(){
    var score = parseInt(document.getElementById("score_nutritional").value);
    var nutriscore = "-"
    if (mode == "beverage"){
        if (score <= 1){nutriscore="B";}
        else if (score <= 5){nutriscore="C";}
        else if (score <= 9){nutriscore="D";}
        else {nutriscore="E";}
    }
    else if (mode == "water"){
        nutriscore = "A";
    }
    else { 
        if (score <= -1){nutriscore="A";}
        else if (score <= 2){nutriscore="B";}
        else if (score <= 10){nutriscore="C";}
        else if (score <= 18){nutriscore="D";}
        else {nutriscore="E";}
    }    
    document.getElementById("nutri-score").value = nutriscore;
}
function calcul_water(){
    document.getElementById("points_positive").value = "-";
    document.getElementById("points_negative").value = "-";
    document.getElementById("score_nutritional").value = "-";
    document.getElementById("nutri-score").value = "A";

    aiguille(0);
    
}
function canvas_colors(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var x = 200, y = 190, r = 170;
    if (mode == "beverage"){
        ctx.lineWidth = 35;
        ctx.beginPath();
        ctx.arc(x,y,r,Math.PI,Math.PI*1.358,false);
        ctx.strokeStyle = "#7c2";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,y,r,Math.PI*1.358,Math.PI*1.425,false);
        ctx.strokeStyle = "#fd0";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,y,r,Math.PI*1.425,Math.PI*1.492,false);
        ctx.strokeStyle = "#f80";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,y,r,Math.PI*1.492,Math.PI*2,false);
        ctx.strokeStyle = "#f30";
        ctx.stroke();
        ctx.font = "bold 12pt Arial";
        ctx.fillStyle = "white";
         var text="B";
        ctx.fillText(text,55,100);
        var text="C";
        ctx.fillText(text,137,38);
        var text="D";
        ctx.fillText(text,172,28);
        var text="E";
        ctx.fillText(text,302,65);
    }
    else {  
        ctx.beginPath();
        ctx.lineWidth = 35;
        ctx.arc(x,y,r,Math.PI,Math.PI*1.264,false);
        ctx.strokeStyle = "#090";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,y,r,Math.PI*1.264,Math.PI*1.318,false);
        ctx.strokeStyle = "#7c2";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,y,r,Math.PI*1.318,Math.PI*1.464,false);
        ctx.strokeStyle = "#fd0";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,y,r,Math.PI*1.464,Math.PI*1.609,false);
        ctx.strokeStyle = "#f80";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,y,r,Math.PI*1.609,Math.PI*2,false);
        ctx.strokeStyle = "#f30";
        ctx.stroke();
        ctx.font = "bold 12pt Arial";
        ctx.fillStyle = "white";
        var text="A";
        ctx.fillText(text,40,120);
        var text="B";
        ctx.fillText(text,90,60);
        var text="C";
        ctx.fillText(text,135,35);
        var text="D";
        ctx.fillText(text,215,25);
        var text="E";
        ctx.fillText(text,330,90);
    }
    
}
function aiguille(score){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);  
    ctx.fillStyle="black";
    ctx.translate(200, 188);  
    if (mode =="beverage"){
        var angle = (score+20)/60;
    }
    else if (mode == "water"){
        var angle = 0;
    }
    else {
        var angle = (score+15)/55;
    }
    angle2 = angle*Math.PI-(Math.PI/2);
    document.getElementById("aiguille").style.transform="rotate("+angle2+"rad) scale(.6)";
}
window.onload = function(){
    canvas_colors();   
    setTimeout(function(){
        aiguille(0);
    }, 500);
    aiguille(40);
}
function reset(){
    document.getElementById("energy").value="";
    document.getElementById("energy_points").value="0";
    document.getElementById("fat").value="";
    document.getElementById("fat_acids_saturated").value="";
    document.getElementById("fat_acids_saturated_points").value="0";
    document.getElementById("ratio_fat_acids_saturated").value="";
    document.getElementById("ratio_fat_acids_saturated_points").value="0";
    document.getElementById("sugar").value="";
    document.getElementById("sugar_points").value="0";
    document.getElementById("fibres").value="";
    document.getElementById("fibres_points").value="0";
    document.getElementById("proteins").value="";
    document.getElementById("proteins_points").value="0";
    document.getElementById("salt").value="";
    document.getElementById("sodium").value="";
    document.getElementById("sodium_points").value="0";
    document.getElementById("fruits").value="";
    document.getElementById("fruits_points").value="0";
    calcul_points_negative();
    calcul_points_positive();
}
function deplier(e){
    var q = e.target;
    var r = q.nextElementSibling;
    
    if (r.classList.contains("reponse-cachee")){
        r.classList.remove("reponse-cachee");
        r.classList.add("reponse-visible");
    }
    else {
        r.classList.add("reponse-cachee");
        r.classList.remove("reponse-visible");
    }
}
function load_faq(){
    var hash=window.location.hash;   
    if (hash){
        hash=hash.substring(1,hash.length);
        r = document.getElementById(hash).nextElementSibling;
        r.classList.remove("reponse-cachee");
        r.classList.add("reponse-visible");
    }
    
}