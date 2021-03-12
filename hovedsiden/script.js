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
    {TotaltS: "1 398", NyeS: "4", Per100kS: "66,2", Trend: "Stigende", Antallkom: "2", InnlagtIGår: "1", InnlagtNå: "2", TotaltDode: "6", DodeIDag: "0"},

    //Nordland
    {TotaltS: "1 254", NyeS: "12", Per100kS: "71.7", Trend: "Stigende", Antallkom: "2", InnlagtIGår: "4", InnlagtNå: "6", TotaltDode: "2", DodeIDag: "0"},

    //Trondelag
    {TotaltS: "3 642", NyeS: "3", Per100kS: "16,6", Trend: "Flat", Antallkom: "0", InnlagtIGår: "5", InnlagtNå: "40", TotaltDode: "13", DodeIDag: "0"},

    //Innlandet
    {TotaltS: "3 588", NyeS: "12", Per100kS: "42", Trend: "Stigende", Antallkom: "4", InnlagtIGår: "41", InnlagtNå: "40", TotaltDode: "33", DodeIDag: "0"},

    //Oslo
    {TotaltS: "22 408", NyeS: "355", Per100kS: "410,2", Trend: "Stigende", Antallkom: "1", InnlagtIGår: "84", InnlagtNå: "87", TotaltDode: "157", DodeIDag: "0"},

    //Viken
    {TotaltS: "26 119", NyeS: "318", Per100kS: "231,1", Trend: "Stigende", Antallkom: "23", InnlagtIGår: "68", InnlagtNå: "69", TotaltDode: "282", DodeIDag: "0"},

    //VestfoldOgTelemark
    {TotaltS: "4 216", NyeS: "77", Per100kS: "165,5", Trend: "Stigende", Antallkom: "7", InnlagtIGår: "18", InnlagtNå: "19", TotaltDode: "33", DodeIDag: "0"},

    //MoreOgRomsdal
    {TotaltS: "1 319", NyeS: "2", Per100kS: "17,7", Trend: "Stigende", Antallkom: "0", InnlagtIGår: "0", InnlagtNå: "0", TotaltDode: "2", DodeIDag: "0"},

    //Vestland
    {TotaltS: "7 037", NyeS: "16", Per100kS: "30,4", Trend: "Stigende", Antallkom: "2", InnlagtIGår: "7", InnlagtNå: "3", TotaltDode: "75", DodeIDag: "0"},

    //Agder
    {TotaltS: "2 402", NyeS: "27", Per100kS: "115,9", Trend: "Synkende", Antallkom: "5", InnlagtIGår: "4", InnlagtNå: "4", TotaltDode: "15", DodeIDag: "0"},

    //Rogaland
    {TotaltS: "3 810", NyeS: "32", Per100kS: "49,2", Trend: "Stigende", Antallkom: "6", InnlagtIGår: "5", InnlagtNå: "2", TotaltDode: "18", DodeIDag: "0"},
];


// Gir tilbake info utifra byen du har trykket på

fylke1.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[0].Trend=="Flat"){
        fylke1.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[0].Trend=="Synkende"){
        fylke1.style.fill= "#A1DE93";
    }        
}
fylke2.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[1].Trend=="Flat"){
        fylke2.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[1].Trend=="Synkende"){
        fylke2.style.fill= "#A1DE93";
    }           
}
fylke3.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[2].Trend=="Flat"){
        fylke3.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[2].Trend=="Synkende"){
        fylke3.style.fill= "#A1DE93";
    }         
}
fylke4.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[3].Trend=="Flat"){
        fylke4.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[3].Trend=="Synkende"){
        fylke4.style.fill= "#A1DE93";
    }         
}
fylke5.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[4].Trend=="Flat"){
        fylke5.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[4].Trend=="Synkende"){
        fylke5.style.fill= "#A1DE93";
    }         
}
fylke6.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[5].Trend=="Flat"){
        fylke6.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[5].Trend=="Synkende"){
        fylke6.style.fill= "#A1DE93";
    }         
}
fylke7.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[6].Trend=="Flat"){
        fylke7.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[6].Trend=="Synkende"){
        fylke7.style.fill= "#A1DE93";
    }         
}
fylke8.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[7].Trend=="Flat"){
        fylke8.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[7].Trend=="Synkende"){
        fylke8.style.fill= "#A1DE93";
    }         
}
fylke9.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[8].Trend=="Flat"){
        fylke9.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[8].Trend=="Synkende"){
        fylke9.style.fill= "#A1DE93";
    }         
}
fylke10.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[9].Trend=="Flat"){
        fylke10.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[9].Trend=="Synkende"){
        fylke10.style.fill= "#A1DE93";
    }         
}
fylke11.onclick = function(evt){
    event.preventDefault();
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
    }
    else if (fylkesinfo[10].Trend=="Flat"){
        fylke11.style.fill= "#F7F48B";
    }
    else if (fylkesinfo[10].Trend=="Synkende"){
        fylke11.style.fill= "#A1DE93";
    }         
}