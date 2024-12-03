sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'travellistapp/test/integration/FirstJourney',
		'travellistapp/test/integration/pages/TravelList',
		'travellistapp/test/integration/pages/TravelObjectPage',
		'travellistapp/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('travellistapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);