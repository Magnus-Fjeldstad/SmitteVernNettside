// DOM-elementer        
var totaltS = document.getElementById('totaltS');
var nyeS = document.getElementById('nyeS');
var per100kS = document.getElementById('per100kS');
var trend = document.getElementById('trend');
var antallkom = document.getElementById('antallkom');
var innlagtIGår = document.getElementById('innlagtIGår');
var innlagtNå = document.getElementById('innlagtNå');
var totaltDode = document.getElementById('totaltDode');
var dodeIDag = document.getElementById('dodeIDag');
var fylke = document.getElementById('fylke');

var fylke1 = document.getElementById("TromsOgFinnmark");
var fylke2 = document.getElementById("Nordland");
var fylke3 = document.getElementById("Trondelag");
var fylke4 = document.getElementById("Innlandet");
var fylke5 = document.getElementById("Oslo");
var fylke6 = document.getElementById("Viken");
var fylke7 = document.getElementById("VestfoldOgTelemark");
var fylke8 = document.getElementById("MoreOgRomsdal");
var fylke9 = document.getElementById("Vestland");
var fylke10 = document.getElementById("Agder");
var fylke11 = document.getElementById("Rogaland");

var knapp = document.getElementById("knapp");
var mapdiv = document.getElementsByClassName("mapdiv");

// Navbar
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// Funksjon for å endre utseende på navbar når du scroller nedover siden 
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});


// Objekter med byinfo
var fylkesinfo = [
    //TromsOgFinnmark
    {TotaltS: "1 416", NyeS: "6", Per100kS: "49,1", Trend: "Synkende", Antallkom: "0", InnlagtIGår: "3", InnlagtNå: "3", TotaltDode: "6", DodeIDag: "0"},

    //Nordland
    {TotaltS: "1 281", NyeS: "2", Per100kS: "61,2", Trend: "Synkende", Antallkom: "1", InnlagtIGår: "8", InnlagtNå: "8", TotaltDode: "2", DodeIDag: "0"},

    //Trøndelag
    {TotaltS: "3 655", NyeS: "4", Per100kS: "16,8", Trend: "Flat", Antallkom: "0", InnlagtIGår: "5", InnlagtNå: "5", TotaltDode: "13", DodeIDag: "0"},

    //Innlandet
    {TotaltS: "3 629", NyeS: "7", Per100kS: "48", Trend: "Stigende", Antallkom: "2", InnlagtIGår: "56", InnlagtNå: "56", TotaltDode: "33", DodeIDag: "0"},

    //Oslo
    {TotaltS: "23 352", NyeS: "323", Per100kS: "476,9", Trend: "Stigende", Antallkom: "1", InnlagtIGår: "119", InnlagtNå: "119", TotaltDode: "157", DodeIDag: "0"},

    //Viken
    {TotaltS: "27 224", NyeS: "337", Per100kS: "289,2", Trend: "Stigende", Antallkom: "22", InnlagtIGår: "92", InnlagtNå: "92", TotaltDode: "282", DodeIDag: "0"},

    //VestfoldOgTelemark
    {TotaltS: "4 473", NyeS: "78", Per100kS: "215,7", Trend: "Stigende", Antallkom: "8", InnlagtIGår: "21", InnlagtNå: "21", TotaltDode: "33", DodeIDag: "0"},

    //MøreOgRomsdal
    {TotaltS: "1 328", NyeS: "2", Per100kS: "14,7", Trend: "Synkende", Antallkom: "0", InnlagtIGår: "0", InnlagtNå: "0", TotaltDode: "2", DodeIDag: "0"},

    //Vestland
    {TotaltS: "7 113", NyeS: "38", Per100kS: "45,4", Trend: "Stigende", Antallkom: "3", InnlagtIGår: "10", InnlagtNå: "10", TotaltDode: "75", DodeIDag: "0"},

    //Agder
    {TotaltS: "2 445", NyeS: "11", Per100kS: "103,6", Trend: "Synkende", Antallkom: "1", InnlagtIGår: "7", InnlagtNå: "7", TotaltDode: "15", DodeIDag: "0"},

    //Rogaland
    {TotaltS: "3 968", NyeS: "47", Per100kS: "79,4", Trend: "Stigende", Antallkom: "4", InnlagtIGår: "7", InnlagtNå: "7", TotaltDode: "18", DodeIDag: "0"},

    //Norge
    {TotaltS: "81 305", NyeS: "866", Per100kS: "177,7", Trend: "Stigende", Antallkom: "42", InnlagtIGår: "157 783", InnlagtNå: "170 912", TotaltDode: "640", DodeIDag: "0"}
];

// Funkssjon som gir info for hele Norge 
function Norge(){
    fylke.innerHTML = "Norge"
    totaltS.innerHTML = fylkesinfo[11].TotaltS;
    nyeS.innerHTML = fylkesinfo[11].NyeS;
    per100kS.innerHTML = fylkesinfo[11].Per100kS;
    trend.innerHTML = fylkesinfo[11].Trend;
    antallkom.innerHTML = fylkesinfo[11].Antallkom;
    innlagtIGår.innerHTML = fylkesinfo[11].InnlagtIGår;
    innlagtNå.innerHTML = fylkesinfo[11].InnlagtNå;
    totaltDode.innerHTML = fylkesinfo[11].TotaltDode;
    dodeIDag.innerHTML = fylkesinfo[11].DodeIDag;
    if(fylkesinfo[11].Trend=="Stigende"){
        trend.src = "bilder/" + "pos_trend.png";
    }
    else if (fylkesinfo[11].Trend=="Flat"){
        trend.src = "bilder/" + "flat_trend.png";
    }
    else if (fylkesinfo[11].Trend=="Synkende"){
        trend.src = "bilder/" + "neg_trend.png";
    }
}
Norge();

// Gir tilbake info utifra byen du har trykket på

var a = 1;
fylke1.onclick = function(evt){
    event.preventDefault();
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;
    g = 1;
    h = 1;
    i = 1;
    j = 1;
    k = 1;

    if (a%2 == 0){
        Norge();
        fylke1.style.fill= "grey";
        a++;
    }
    else{
        fylke.innerHTML = "Troms og Finnmark"
        totaltS.innerHTML = fylkesinfo[0].TotaltS;
        nyeS.innerHTML = fylkesinfo[0].NyeS;
        per100kS.innerHTML = fylkesinfo[0].Per100kS;
        trend.innerHTML = fylkesinfo[0].Trend;
        antallkom.innerHTML = fylkesinfo[0].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[0].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[0].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[0].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[0].DodeIDag;

        if(fylkesinfo[0].Trend=="Stigende"){
            fylke1.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[0].Trend=="Flat"){
            fylke1.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[0].Trend=="Synkende"){
            fylke1.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }
        a++
    }        
}

var b = 1;
fylke2.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;
    g = 1;
    h = 1;
    i = 1;
    j = 1;
    k = 1;

    if (b%2 == 0){
        Norge();
        fylke2.style.fill= "grey";
        b++;
    }
    else{
        fylke.innerHTML = "Nordland"
        totaltS.innerHTML = fylkesinfo[1].TotaltS;
        nyeS.innerHTML = fylkesinfo[1].NyeS;
        per100kS.innerHTML = fylkesinfo[1].Per100kS;
        trend.innerHTML = fylkesinfo[1].Trend;
        antallkom.innerHTML = fylkesinfo[1].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[1].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[1].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[1].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[1].DodeIDag;

        if(fylkesinfo[1].Trend=="Stigende"){
            fylke2.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[1].Trend=="Flat"){
            fylke2.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[1].Trend=="Synkende"){
            fylke2.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }
        b++;  
    }        
}
var c = 1;
fylke3.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    b = 1;
    d = 1;
    e = 1;
    f = 1;
    g = 1;
    h = 1;
    i = 1;
    j = 1;
    k = 1;

    if (c%2 == 0){
        Norge();
        fylke3.style.fill= "grey";
        c++;
    }
    else {
        fylke.innerHTML = "Trøndelag"
        totaltS.innerHTML = fylkesinfo[2].TotaltS;
        nyeS.innerHTML = fylkesinfo[2].NyeS;
        per100kS.innerHTML = fylkesinfo[2].Per100kS;
        trend.innerHTML = fylkesinfo[2].Trend;
        antallkom.innerHTML = fylkesinfo[2].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[2].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[2].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[2].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[2].DodeIDag;

        if(fylkesinfo[2].Trend=="Stigende"){
            fylke3.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";

        }
        else if (fylkesinfo[2].Trend=="Flat"){
            fylke3.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";

        }
        else if (fylkesinfo[2].Trend=="Synkende"){
            fylke3.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        } 
        c++;  
    }   
}
var d = 1;
fylke4.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    b = 1;
    c = 1;
    e = 1;
    f = 1;
    g = 1;
    h = 1;
    i = 1;
    j = 1;
    k = 1;

    if (d%2 == 0){
        Norge();
        fylke4.style.fill= "grey";
        d++;
    }
    else {
        fylke.innerHTML = "Innlandet"
        totaltS.innerHTML = fylkesinfo[3].TotaltS;
        nyeS.innerHTML = fylkesinfo[3].NyeS;
        per100kS.innerHTML = fylkesinfo[3].Per100kS;
        trend.innerHTML = fylkesinfo[3].Trend;
        antallkom.innerHTML = fylkesinfo[3].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[3].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[3].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[3].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[3].DodeIDag;

        if(fylkesinfo[3].Trend=="Stigende"){
            fylke4.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";

        }
        else if (fylkesinfo[3].Trend=="Flat"){
            fylke4.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";

        }
        else if (fylkesinfo[3].Trend=="Synkende"){
            fylke4.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }
        d++; 
    }       
}
var e =1;
fylke5.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    b = 1;
    c = 1;
    d = 1;
    f = 1;
    g = 1;
    h = 1;
    i = 1;
    j = 1;
    k = 1;

    if (e%2 == 0){
        Norge();
        fylke5.style.fill= "grey";
        e++;
    }
    else {
        fylke.innerHTML = "Oslo"
        totaltS.innerHTML = fylkesinfo[4].TotaltS;
        nyeS.innerHTML = fylkesinfo[4].NyeS;
        per100kS.innerHTML = fylkesinfo[4].Per100kS;
        trend.innerHTML = fylkesinfo[4].Trend;
        antallkom.innerHTML = fylkesinfo[4].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[4].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[4].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[4].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[4].DodeIDag;

        if(fylkesinfo[4].Trend=="Stigende"){
            fylke5.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[4].Trend=="Flat"){
            fylke5.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[4].Trend=="Synkende"){
            fylke5.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }
        e++;  
    }   
}
var f = 1;
fylke6.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    g = 1;
    h = 1;
    i = 1;
    j = 1;
    k = 1;

    if (f%2 == 0){
        Norge();
        fylke6.style.fill= "grey";
        f++;
    }
    else {
        fylke.innerHTML = "Viken"
        totaltS.innerHTML = fylkesinfo[5].TotaltS;
        nyeS.innerHTML = fylkesinfo[5].NyeS;
        per100kS.innerHTML = fylkesinfo[5].Per100kS;
        trend.innerHTML = fylkesinfo[5].Trend;
        antallkom.innerHTML = fylkesinfo[5].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[5].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[5].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[5].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[5].DodeIDag;

        if(fylkesinfo[5].Trend=="Stigende"){
            fylke6.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[5].Trend=="Flat"){
            fylke6.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[5].Trend=="Synkende"){
            fylke6.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }    
        f++;
    }    
}
var g = 1;
fylke7.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;
    h = 1;
    i = 1;
    j = 1;
    k = 1;

    if (g%2 == 0){
        Norge();
        fylke7.style.fill= "grey";
        g++;
    }
    else {
        fylke.innerHTML = "Vestfold og Telemark"
        totaltS.innerHTML = fylkesinfo[6].TotaltS;
        nyeS.innerHTML = fylkesinfo[6].NyeS;
        per100kS.innerHTML = fylkesinfo[6].Per100kS;
        trend.innerHTML = fylkesinfo[6].Trend;
        antallkom.innerHTML = fylkesinfo[6].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[6].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[6].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[6].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[6].DodeIDag;

        if(fylkesinfo[6].Trend=="Stigende"){
            fylke7.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[6].Trend=="Flat"){
            fylke7.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[6].Trend=="Synkende"){
            fylke7.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }
        g++;   
    } 
}
var h = 1;
fylke8.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;
    g = 1;
    i = 1;
    j = 1;
    k = 1;

    if (h%2 == 0){
        Norge();
        fylke8.style.fill= "grey";
        h++;
    }
    else {
        fylke.innerHTML = "Møre og Romsdal"
        totaltS.innerHTML = fylkesinfo[7].TotaltS;
        nyeS.innerHTML = fylkesinfo[7].NyeS;
        per100kS.innerHTML = fylkesinfo[7].Per100kS;
        trend.innerHTML = fylkesinfo[7].Trend;
        antallkom.innerHTML = fylkesinfo[7].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[7].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[7].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[7].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[7].DodeIDag;

        if(fylkesinfo[7].Trend=="Stigende"){
            fylke8.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[7].Trend=="Flat"){
            fylke8.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[7].Trend=="Synkende"){
            fylke8.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }
        h++;     
    }    
}
var i = 1;
fylke9.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke10.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;
    g = 1;
    h = 1;
    j = 1;
    k = 1;

    if (i%2 == 0){
        Norge();
        fylke9.style.fill= "grey";
        i++;
    }
    else {
        fylke.innerHTML = "Vestland"
        totaltS.innerHTML = fylkesinfo[8].TotaltS;
        nyeS.innerHTML = fylkesinfo[8].NyeS;
        per100kS.innerHTML = fylkesinfo[8].Per100kS;
        trend.innerHTML = fylkesinfo[8].Trend;
        antallkom.innerHTML = fylkesinfo[8].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[8].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[8].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[8].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[8].DodeIDag;

        if(fylkesinfo[8].Trend=="Stigende"){
            fylke9.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[8].Trend=="Flat"){
            fylke9.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[8].Trend=="Synkende"){
            fylke9.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }
        i++;     
    }
}
var j = 1;
fylke10.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke11.style.fill = "grey";

    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;
    g = 1;
    h = 1;
    i = 1;
    k = 1;

    if (j%2 == 0){
        Norge();
        fylke10.style.fill= "grey";
        j++;
    }
    else {
        fylke.innerHTML = "Agder"
        totaltS.innerHTML = fylkesinfo[9].TotaltS;
        nyeS.innerHTML = fylkesinfo[9].NyeS;
        per100kS.innerHTML = fylkesinfo[9].Per100kS;
        trend.innerHTML = fylkesinfo[9].Trend;
        antallkom.innerHTML = fylkesinfo[9].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[9].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[9].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[9].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[9].DodeIDag;

        if(fylkesinfo[9].Trend=="Stigende"){
            fylke10.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[9].Trend=="Flat"){
            fylke10.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[9].Trend=="Synkende"){
            fylke10.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }  
        j++;
    }
}
var k = 1;
fylke11.onclick = function(evt){
    event.preventDefault();
    fylke1.style.fill = "grey";
    fylke2.style.fill = "grey";
    fylke3.style.fill = "grey";
    fylke4.style.fill = "grey";
    fylke5.style.fill = "grey";
    fylke6.style.fill = "grey";
    fylke7.style.fill = "grey";
    fylke8.style.fill = "grey";
    fylke9.style.fill = "grey";
    fylke10.style.fill = "grey";

    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;
    g = 1;
    h = 1;
    i = 1;
    j = 1;

    if (k%2 == 0){
        Norge();
        fylke11.style.fill= "grey";
        k++;
    }
    else {
        fylke.innerHTML = "Rogaland"
        totaltS.innerHTML = fylkesinfo[10].TotaltS;
        nyeS.innerHTML = fylkesinfo[10].NyeS;
        per100kS.innerHTML = fylkesinfo[10].Per100kS;
        trend.innerHTML = fylkesinfo[10].Trend;
        antallkom.innerHTML = fylkesinfo[10].Antallkom;
        innlagtIGår.innerHTML = fylkesinfo[10].InnlagtIGår;
        innlagtNå.innerHTML = fylkesinfo[10].InnlagtNå;
        totaltDode.innerHTML = fylkesinfo[10].TotaltDode;
        dodeIDag.innerHTML = fylkesinfo[10].DodeIDag;
        
        if(fylkesinfo[10].Trend=="Stigende"){
            fylke11.style.fill= "#F47C7C";
            trend.src = "bilder/" + "pos_trend.png";
        }
        else if (fylkesinfo[10].Trend=="Flat"){
            fylke11.style.fill= "#F7F48B";
            trend.src = "bilder/" + "flat_trend.png";
        }
        else if (fylkesinfo[10].Trend=="Synkende"){
            fylke11.style.fill= "#A1DE93";
            trend.src = "bilder/" + "neg_trend.png";
        }
        k++;         
    }
}
