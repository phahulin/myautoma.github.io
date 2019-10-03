function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
	'img/actions/advanceMilitaryExplorationTechnology.png',
	'img/actions/conquer.png',
	'img/actions/conquerAndTapestryCard.png',
	'img/actions/conquerAnywhere.png',
	'img/actions/diceBenefits.png',
	'img/actions/diceNoBenefits.png',
	'img/actions/explore.png',
	'img/actions/exploreAnywhere.png',
	'img/actions/regressMilitaryTechnology.png',
	'img/actions/tapestryCard.png',
	'img/actions/techCard.png',
	'img/civs/exploration.jpg',
	'img/civs/explorationIncome.jpg',
	'img/civs/military.jpg',
	'img/civs/science.jpg',
	'img/civs/scienceIncome.jpg',
	'img/civs/technology.jpg',
	'img/civs/technologyIncome.jpg',
	'img/cubes/blue.png',
	'img/cubes/green.png',
	'img/cubes/grey.png',
	'img/cubes/red.png',
	'img/cubes/yellow.png',
	'img/dice/blank.png',
	'img/dice/exploration.png',
	'img/dice/military.png',
	'img/dice/science.png',
	'img/dice/technology.png',
	'img/difficulty/automaMatHardMobile.jpg',
	'img/difficulty/automaMatNormalMobile.jpg',
	'img/difficulty/level1.jpg',
	'img/difficulty/level2.jpg',
	'img/difficulty/level3.jpg',
	'img/difficulty/level4.jpg',
	'img/difficulty/level5.jpg',
	'img/difficulty/level6.jpg',
	'img/difficulty/level1ExtraInfo.jpg',
	'img/difficulty/level5ExtraInfo.jpg',
	'img/difficulty/level6ExtraInfo.jpg',
	'img/fullTracks/exploration.jpg',
	'img/fullTracks/military.jpg',
	'img/fullTracks/science.jpg',
	'img/fullTracks/technology.jpg',
	'img/help/addTwoExtraCards.png',
	'img/help/advanceMilitaryExplorationTechnology.png',
	'img/help/advanceOnFavoriteTracks.png',
	'img/help/advanceTrackTokens.png',
	'img/help/civBonus.png',
	'img/help/conquer.png',
	'img/help/conquerAnywhere.png',
	'img/help/diceBenefits.png',
	'img/help/diceNoBenefits.png',
	'img/help/explore.png',
	'img/help/exploreAnywhere.png',
	'img/help/mapExample.jpg',
	'img/help/regressMilitaryTechnology.png',
	'img/help/shuffleAutomaDeck.png',
	'img/help/tapestryCard.png',
	'img/help/tapestryCard.png',
	'img/help/tapestryCardToAutomaMat.png',
	'img/help/techCard.png',
	'img/help/technology.png',
	'img/help/topple.png',
	'img/help/vpPointsScoring.png',
	'img/income/addFourExtraCards.png',
	'img/income/addNoExtraCards.png',
	'img/income/addSixExtraCards.png',
	'img/income/addTwoExtraCards.png',
	'img/income/advanceOnAllTracks.png',
	'img/income/advanceOnFavoriteTracks.png',
	'img/income/advanceTrackTokens.png',
	'img/income/civBonus.png',
	'img/income/conqueredHexes.png',
	'img/income/dualCivBonus.png',
	'img/income/exploration.png',
	'img/income/favoriteTrackAssessment.png',
	'img/income/firstNeighbourhoodBonus.png',
	'img/income/humanAdvanceTracks.png',
	'img/income/landmark.png',
	'img/income/military.png',
	'img/income/science.png',
	'img/income/shuffleAutomaDeck.png',
	'img/income/tapestryCardToAutomaMat.png',
	'img/income/tapestryCardToAutomaSupply.png',
	'img/income/technology.png',
	'img/income/vpPointsScoring.png',
	'img/mapTiebreaker/1.png',
	'img/mapTiebreaker/2.png',
	'img/mapTiebreaker/3.png',
	'img/mapTiebreaker/4.png',
	'img/mapTiebreaker/5.png',
	'img/mapTiebreaker/6.png',
	'img/mapTiebreaker/7.png',
	'img/mapTiebreaker/8.png',
	'img/mapTiebreaker/9.png',
	'img/mapTiebreaker/10.png',
	'img/outposts/blue.png',
	'img/outposts/green.png',
	'img/outposts/grey.png',
	'img/outposts/red.png',
	'img/outposts/yellow.png',
	'img/sculpts/exploration-1.png',
	'img/sculpts/exploration-1-inactive.png',
	'img/sculpts/exploration-1-inactive-automa.png',
	'img/sculpts/exploration-1-inactive-human.png',
	'img/sculpts/exploration-2.png',
	'img/sculpts/exploration-2-inactive.png',
	'img/sculpts/exploration-2-inactive-automa.png',
	'img/sculpts/exploration-2-inactive-human.png',
	'img/sculpts/exploration-3.png',
	'img/sculpts/exploration-3-inactive.png',
	'img/sculpts/exploration-3-inactive-automa.png',
	'img/sculpts/exploration-3-inactive-human.png',
	'img/sculpts/military-1.png',
	'img/sculpts/military-1-inactive.png',
	'img/sculpts/military-1-inactive-automa.png',
	'img/sculpts/military-1-inactive-human.png',
	'img/sculpts/military-2.png',
	'img/sculpts/military-2-inactive.png',
	'img/sculpts/military-2-inactive-automa.png',
	'img/sculpts/military-2-inactive-human.png',
	'img/sculpts/military-3.png',
	'img/sculpts/military-3-inactive.png',
	'img/sculpts/military-3-inactive-automa.png',
	'img/sculpts/military-3-inactive-human.png',
	'img/sculpts/science-1.png',
	'img/sculpts/science-1-inactive.png',
	'img/sculpts/science-1-inactive-automa.png',
	'img/sculpts/science-1-inactive-human.png',
	'img/sculpts/science-2.png',
	'img/sculpts/science-2-inactive.png',
	'img/sculpts/science-2-inactive-automa.png',
	'img/sculpts/science-2-inactive-human.png',
	'img/sculpts/science-3.png',
	'img/sculpts/science-3-inactive.png',
	'img/sculpts/science-3-inactive-automa.png',
	'img/sculpts/science-3-inactive-human.png',
	'img/sculpts/technology-1.png',
	'img/sculpts/technology-1-inactive.png',
	'img/sculpts/technology-1-inactive-automa.png',
	'img/sculpts/technology-1-inactive-human.png',
	'img/sculpts/technology-2.png',
	'img/sculpts/technology-2-inactive.png',
	'img/sculpts/technology-2-inactive-automa.png',
	'img/sculpts/technology-2-inactive-human.png',
	'img/sculpts/technology-3.png',
	'img/sculpts/technology-3-inactive.png',
	'img/sculpts/technology-3-inactive-automa.png',
	'img/sculpts/technology-3-inactive-human.png',
	'img/tapestry/age-of-discovery.jpg',
	'img/trackPriority/automaEndLandmark.png',
	'img/trackPriority/shadowEmpireEndLandmark.png',
	'img/tracks/exploration.png',
	'img/tracks/explorationIcon.png',
	'img/tracks/explorationIcon-inactive.png',
	'img/tracks/favorite.png',
	'img/tracks/military.png',
	'img/tracks/militaryIcon.png',
	'img/tracks/militaryIcon-inactive.png',
	'img/tracks/science.png',
	'img/tracks/scienceIcon.png',
	'img/tracks/scienceIcon-inactive.png',
	'img/tracks/technology.png',
	'img/tracks/technologyIcon.png',
	'img/tracks/technologyIcon-inactive.png',
	'../../img/closeHelp.png',
	'../../img/menuClose.png',
	'../../img/menuIcon.png',
	'../../img/question.png',
]);