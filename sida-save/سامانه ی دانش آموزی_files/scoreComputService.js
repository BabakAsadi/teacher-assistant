define(['angularAMD'], function (app) {
    app.service('scoreComputService', ['blockUI', '$state', '$http', '$q', 'messageService', '$rootScope', function (blockUI, $state, $http, $q, messageService, $rootScope) {

        return {
            processCousreScore: function (gt, pt, year, schooltype, scoreType) {
                if (gt == 7 && (pt == 4 || pt == 5 || pt == 6) && year >= 1397 &&
                    (schooltype == 22 || schooltype == 23)) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 1, newScoreType: 3 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 1 && pt == 1) {
                    return { mostamar1: 0.1, nimeh1: 0.2, mostamar2: 0.1, nimeh2: 0.6, newScoreType: 1 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 7 && pt == 1 && year >= 1395) {
                    return { mostamar1: 0.125, nimeh1: 0.25, mostamar2: 0.125, nimeh2: 0.5, newScoreType: 7 }
                }
                if (gt == 5 && pt == 2 && year >= 1390) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 1, newScoreType:3 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 1
                    && (pt == 2 || pt == 4 || pt == 5 || pt == 6)) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0.2, nimeh2: 0.8, newScoreType: 2 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 7
                    && (pt == 2 || pt == 4 || pt == 5 || pt == 6) && year >= 1395) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0.25, nimeh2: 0.75, newScoreType: 2 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 4
                    && (pt == 1 || pt == 2 || pt == 4 || pt == 5 || pt == 6)) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0.2, nimeh2: 0.8, newScoreType: 4 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 5
                    && (pt == 4 || pt == 5 || pt == 6)) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0.5, nimeh2: 0.5, newScoreType: 5 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 2 && pt == 1) {
                    return { mostamar1: 0, nimeh1: 0.5, mostamar2: 0, nimeh2: 0.5, newScoreType: 2 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 2
                    && (pt == 2 || pt == 6)) {
                   
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 1, newScoreType: 3 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 1
                    && (pt == 4 || pt == 5 || pt == 6)) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 1, newScoreType: 3 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                     && pt == 3) {
                    
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 1, newScoreType: 3 }
                }
                //AlirezaNaeimiAdded
                if ((gt == 1 || gt == 7 || gt == 5) && (pt == 1) && year >= 1401 && scoreType == 3) {
                    return { mostamar1: 0, nimeh1: 1, mostamar2: 0, nimeh2: 1, newScoreType: 3 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType == 3) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 1, newScoreType: 3 }
                }
                if (gt == 2 || gt == 9 || gt == 4) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 1, newScoreType: 3 }
                }
                if (gt == 8) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 0, newScoreType: 0 }
                }
                if (gt == 6 && year < 1390) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 0, newScoreType: 0 }
                }
                if (gt == 6 && year >= 1390) {
                   
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 1, newScoreType: 3 }
                }
                if ((gt == 1 || gt == 7 || gt == 5)
                    && scoreType != 1
                    && (pt == 4 || pt == 5 || pt == 6)) {

                    return { mostamar1: 0, nimeh1: 0, mostamar2:0, nimeh2: 1, newScoreType: 3 }
                }
                if ((gt == 1 || gt == 7)
                    && scoreType == 8 && pt == 1) {
                    return { mostamar1: 0.166, nimeh1: 0.166, mostamar2: 0.332, nimeh2: 0.332, newScoreType: 8 }
                }
                if ((gt == 1 || gt == 7)
                    && scoreType == 8 && pt == 2) {
                    return { mostamar1: 0, nimeh1: 0, mostamar2: 0.333, nimeh2: 0.666, newScoreType: 2 }
                }
                return { mostamar1: 0, nimeh1: 0, mostamar2: 0, nimeh2: 0, newScoreType: 0 }
            },
            
        }
    }])
});

