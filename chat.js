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


// Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
                apiKey: "AIzaSyDWmZAPXxoyMhI5a_-o5soMbVlXWpcamQw",
                authDomain: "solsol-8fa64.firebaseapp.com",
                projectId: "solsol-8fa64",
                storageBucket: "solsol-8fa64.appspot.com",
                messagingSenderId: "82425228259",
                appId: "1:82425228259:web:e582964966993de15c0ed6",
                measurementId: "G-HK4ZPVF77V"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();

//Script Meldinger

            let database = firebase.database();
			let meldinger = database.ref("meldinger");
			let skjema = document.getElementById("skjema");
			let inpAvsender = document.getElementById("inpAvsender");
			let inpMening = document.getElementById("inpMening");
			let txtMeldinger = document.getElementById("txtMeldinger");

			function visMelding(snapshot){
				let melding= snapshot.val();
				let meldingTekst= `<p>
					<b> ${melding.avsender}: </b>
					<i> ${melding.tekst}</i>
					</p>`;
				txtMeldinger.innerHTML= txtMeldinger.innerHTML+ meldingTekst;
			}

			function regNyMelding(evt){
				evt.preventDefault();
				var nyMelding={
					avsender: inpAvsender.value,
					tekst: inpMening.value
				};
				meldinger.push(nyMelding);
				inpMening.value="";
			}

			meldinger.on("child_added",visMelding);
			skjema.onsubmit= regNyMelding;