var _0x4a90=['</ul></span></div>','customHelpInfo','undefined','<div\x20class=\x22tooltip\x22><img\x20class=\x22helpImage\x20cardIcon\x22\x20src=\x22../../img/question.png\x22\x20/><span\x20class=\x22tooltiptext\x22>','</span></div>','<div\x20class=\x22slideCardContent\x22>','substring','<div\x20class=\x22cardID\x20greenID\x22>','<div\x20class=\x22cardID\x20whiteID\x22>','<div\x20class=\x22cardID\x20pinkID\x22>','supportActions','<div\x20class=\x22supportBox\x20supportBox','\x22></div>','factionAutoma','automaBlack','automaWhite','\x20blackFaction\x22><img\x20class=\x22automaImg\x20','\x22\x20src=\x22img/','.png\x22\x20/></div>','true','\x20whiteFaction\x22><img\x20class=\x22automaImg\x20','\x22><img\x20class=\x22automaImg\x20','</div><div\x20class=\x22actionColumn\x20cardColumn\x22>','commodityArea','<div\x20class=\x22actionBox\x20actionBox','class','WhiteAutoma.png\x22\x20/></div>','</div></div>','append','remove','addClass','supportToExit','removeClass','mainToSupport','.startToMain','.newCard','startToMain','<li\x20class=\x22helpLink\x20helpLink-placeWorker\x22>Place\x20a\x20Worker</li><li\x20class=\x22helpLink\x20helpLink-tiebreakers\x22>Tiebreakers</li><li\x20class=\x22helpLink\x20helpLink-retrieveWorkers\x22>Retrieve\x20Workers</li>','shuffle','.slide-card-container','slide-card','cardPic','resize','.actionCard','each','height','false','<div\x20class=\x22slide-card-container\x22>','</div>','join','appendTo','game','savedGame','savedGameSecond','moves','length','includes','shuffled','deckSize','roundInfo','value','usedCards','card','log','slideCard\x20=','actions','push','<li\x20class=\x22helpLink\x20helpLink-','desc','</li>','filter','.slide-card','css','display','block','<div\x20class=\x22tooltip\x22><img\x20class=\x22helpImage\x20cardIcon\x22\x20src=\x22../../img/question.png\x22\x20/><span\x20class=\x22tooltiptext\x22><ul>'];(function(_0x5e3a97,_0x4cee39){var _0x2abf91=function(_0x49baba){while(--_0x49baba){_0x5e3a97['push'](_0x5e3a97['shift']());}};_0x2abf91(++_0x4cee39);}(_0x4a90,0x7a));var _0x4553=function(_0x36ffce,_0xc922c3){_0x36ffce=_0x36ffce-0x0;var _0x1d56d1=_0x4a90[_0x36ffce];return _0x1d56d1;};var supportCard;var mainCard;var slideCard;var currentBlackFaction=_0x4553('0x0');var currentWhiteFaction=_0x4553('0x0');var prevBlackFaction=_0x4553('0x0');var prevWhiteFaction='false';$(document)['ready'](function(){var _0x4facc2=[_0x4553('0x1'),_0x4553('0x2')][_0x4553('0x3')]('');$(_0x4facc2)[_0x4553('0x4')]('#cardArea');});function slide(_0x12c4ef){if(_0x12c4ef==_0x4553('0x5')||_0x12c4ef==_0x4553('0x6')||_0x12c4ef==_0x4553('0x7')){if(_0x12c4ef==_0x4553('0x6')){if(_0x12c4ef=='savedGame'&&game['moves'][game[_0x4553('0x8')][_0x4553('0x9')]-0x1][_0x4553('0xa')](_0x4553('0xb'))){game[_0x4553('0xc')]=parseInt(deck[_0x4553('0x9')]);game[_0x4553('0xd')][0x0][_0x4553('0xe')][0x0]=parseInt(deck[_0x4553('0x9')]);roundInfoSetup();return;}if(game[_0x4553('0xf')][_0x4553('0x9')]!=0x0){for(let _0x4a89d2=0x0;_0x4a89d2<deck[_0x4553('0x9')];_0x4a89d2++){if(deck[_0x4a89d2][_0x4553('0x10')]==game['usedCards'][0x1]){supportCard=deck[_0x4a89d2][_0x4553('0x10')];}if(deck[_0x4a89d2]['card']==game[_0x4553('0xf')][0x0]){mainCard=deck[_0x4a89d2][_0x4553('0x10')];}}}slideCard=supportCard;}else if(_0x12c4ef==_0x4553('0x7')){slideCard=mainCard;}else if(_0x12c4ef==_0x4553('0x5')){slideCard=game[_0x4553('0xf')][0x0];}console[_0x4553('0x11')](_0x4553('0x12')+slideCard);var _0x1be488=[];var _0x1ecda7=[];_0x1ecda7['push']('<div\x20class=\x22slide-card\x20newCard\x22>');for(let _0x5e35ad=0x0;_0x5e35ad<deck[_0x4553('0x9')];_0x5e35ad++){if(deck[_0x5e35ad][_0x4553('0x10')]==slideCard){for(let _0x1a6bef=0x0;_0x1a6bef<deck[_0x5e35ad][_0x4553('0x13')][_0x4553('0x9')];_0x1a6bef++){_0x1be488[_0x4553('0x14')](_0x4553('0x15')+deck[_0x5e35ad][_0x4553('0x13')][_0x1a6bef]['class']+'\x22>'+deck[_0x5e35ad][_0x4553('0x13')][_0x1a6bef][_0x4553('0x16')]+_0x4553('0x17'));}}}_0x1be488=_0x1be488[_0x4553('0x18')](onlyUnique);$(_0x4553('0x19'))[_0x4553('0x1a')](_0x4553('0x1b'),_0x4553('0x1c'));if(typeof helpContent!=='undefined'&&_0x1be488[_0x4553('0x9')]>0x0){_0x1ecda7['push'](_0x4553('0x1d'));for(let _0x4d8c4d=0x0;_0x4d8c4d<_0x1be488['length'];_0x4d8c4d++){_0x1ecda7['push'](_0x1be488[_0x4d8c4d]);}_0x1ecda7[_0x4553('0x14')](_0x4553('0x1e'));}else if(typeof game[_0x4553('0x1f')]!==_0x4553('0x20')){_0x1ecda7[_0x4553('0x14')](_0x4553('0x21'));_0x1ecda7[_0x4553('0x14')](game[_0x4553('0x1f')]);_0x1ecda7[_0x4553('0x14')](_0x4553('0x22'));}_0x1ecda7[_0x4553('0x14')](_0x4553('0x23'));for(let _0x44a5d3=0x0;_0x44a5d3<deck[_0x4553('0x9')];_0x44a5d3++){if(deck[_0x44a5d3]['card']==slideCard){if(deck[_0x44a5d3][_0x4553('0x10')][_0x4553('0x24')](0x0,0x1)=='S'){_0x1ecda7['push'](_0x4553('0x25')+deck[_0x44a5d3][_0x4553('0x10')]+_0x4553('0x2'));}else if(deck[_0x44a5d3][_0x4553('0x10')]['substring'](0x0,0x1)=='W'){_0x1ecda7[_0x4553('0x14')](_0x4553('0x26')+deck[_0x44a5d3][_0x4553('0x10')]+_0x4553('0x2'));}else if(deck[_0x44a5d3]['card'][_0x4553('0x24')](0x0,0x1)=='B'){_0x1ecda7[_0x4553('0x14')]('<div\x20class=\x22cardID\x20blackID\x22>'+deck[_0x44a5d3][_0x4553('0x10')]+_0x4553('0x2'));}else if(deck[_0x44a5d3][_0x4553('0x10')][_0x4553('0x24')](0x0,0x1)=='D'){_0x1ecda7[_0x4553('0x14')](_0x4553('0x27')+deck[_0x44a5d3][_0x4553('0x10')]+_0x4553('0x2'));}_0x1ecda7['push']('<div\x20class=\x22supportColumn\x20cardColumn\x22>');var _0x24cf2b=0x0;for(let _0x1c66b8=0x0;_0x1c66b8<deck[_0x44a5d3][_0x4553('0x28')][_0x4553('0x9')];_0x1c66b8++){if(_0x1c66b8==0x0&&deck[_0x44a5d3][_0x4553('0x28')][_0x4553('0x9')]==0x2){_0x1ecda7[_0x4553('0x14')](_0x4553('0x29')+_0x24cf2b+_0x4553('0x2a'));_0x24cf2b++;}if(deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]==_0x4553('0x2b')||_0x24cf2b==0x1&&deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]==game[_0x4553('0x2c')]||_0x24cf2b==0x2&&deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]==game[_0x4553('0x2d')]){if(_0x24cf2b==0x1&&deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]=='factionAutoma'||_0x24cf2b==0x1&&deck[_0x44a5d3]['supportActions'][_0x1c66b8]==game[_0x4553('0x2c')]){_0x1ecda7[_0x4553('0x14')](_0x4553('0x29')+_0x24cf2b+_0x4553('0x2e')+deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]+_0x4553('0x2f')+game[_0x4553('0x2c')]+_0x4553('0x30'));currentBlackFaction=_0x4553('0x31');}else if(_0x24cf2b==0x2&&deck[_0x44a5d3]['supportActions'][_0x1c66b8]==_0x4553('0x2b')||_0x24cf2b==0x2&&deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]==game[_0x4553('0x2d')]){_0x1ecda7[_0x4553('0x14')](_0x4553('0x29')+_0x24cf2b+_0x4553('0x32')+deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]+_0x4553('0x2f')+game[_0x4553('0x2d')]+_0x4553('0x30'));currentWhiteFaction=_0x4553('0x31');}}else{_0x1ecda7[_0x4553('0x14')]('<div\x20class=\x22supportBox\x20supportBox'+_0x24cf2b+_0x4553('0x33')+deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]+_0x4553('0x2f')+deck[_0x44a5d3][_0x4553('0x28')][_0x1c66b8]+_0x4553('0x30'));}_0x24cf2b++;}_0x1ecda7[_0x4553('0x14')](_0x4553('0x34'));_0x24cf2b=0x0;for(let _0x2b0d50=0x0;_0x2b0d50<deck[_0x44a5d3][_0x4553('0x13')][_0x4553('0x9')];_0x2b0d50++){if(_0x2b0d50==0x0&&deck[_0x44a5d3]['actions'][_0x4553('0x9')]==0x2){_0x1ecda7[_0x4553('0x14')]('<div\x20class=\x22actionBox\x20actionBox'+_0x24cf2b+_0x4553('0x2a'));_0x24cf2b++;}if(deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50]['class']==_0x4553('0x35')){if(prevBlackFaction==_0x4553('0x31')&&_0x24cf2b==0x1){_0x1ecda7[_0x4553('0x14')](_0x4553('0x36')+_0x24cf2b+_0x4553('0x33')+deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50]['class']+'\x22\x20src=\x22img/'+deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50][_0x4553('0x37')]+'BlackAutoma.png\x22\x20/></div>');}else if(prevWhiteFaction==_0x4553('0x31')&&_0x24cf2b==0x2){_0x1ecda7[_0x4553('0x14')](_0x4553('0x36')+_0x24cf2b+'\x22><img\x20class=\x22automaImg\x20'+deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50]['class']+_0x4553('0x2f')+deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50]['class']+_0x4553('0x38'));}else{_0x1ecda7[_0x4553('0x14')](_0x4553('0x36')+_0x24cf2b+'\x22><img\x20class=\x22automaImg\x20'+deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50][_0x4553('0x37')]+'\x22\x20src=\x22img/'+deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50][_0x4553('0x37')]+_0x4553('0x30'));}}else{_0x1ecda7['push'](_0x4553('0x36')+_0x24cf2b+'\x22><img\x20class=\x22automaImg\x20'+deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50][_0x4553('0x37')]+_0x4553('0x2f')+deck[_0x44a5d3][_0x4553('0x13')][_0x2b0d50]['class']+'.png\x22\x20/></div>');}_0x24cf2b++;}_0x1ecda7[_0x4553('0x14')](_0x4553('0x39'));prevBlackFaction=currentBlackFaction;prevWhiteFaction=currentWhiteFaction;currentBlackFaction=_0x4553('0x0');currentWhiteFaction=_0x4553('0x0');}}$('.slide-card-container')[_0x4553('0x3a')](_0x1ecda7[_0x4553('0x3')](''));$('.supportToExit')[_0x4553('0x3b')]();$('.mainToSupport')[_0x4553('0x3c')](_0x4553('0x3d'))[_0x4553('0x3e')](_0x4553('0x3f'));$(_0x4553('0x40'))[_0x4553('0x3c')](_0x4553('0x3f'))[_0x4553('0x3e')]('startToMain\x20newCard');$(_0x4553('0x41'))[_0x4553('0x3c')](_0x4553('0x42'));$('.tooltiptext\x20ul')['append'](_0x4553('0x43'));if(_0x12c4ef==_0x4553('0x5')){setTimeout(function(){if(!$('.mainToSupport')[_0x4553('0x9')]){drawCard();}},0x3e8);}else if(_0x12c4ef=='savedGame'){slide(_0x4553('0x7'));}}else if(_0x12c4ef==_0x4553('0x44')){$(_0x4553('0x45'))['html']('');}cardHeight(_0x4553('0x46'));cardHeight(_0x4553('0x47'));}$(window)[_0x4553('0x48')](function(){cardHeight('slide-card');cardHeight(_0x4553('0x47'));})[_0x4553('0x48')]();function cardHeight(_0x303c00){setTimeout(function(){$(_0x4553('0x49'))[_0x4553('0x4a')](function(){if($(this)[_0x4553('0x1a')]('height')!=0x0){var _0xdf1aec=parseInt($(this)[_0x4553('0x1a')](_0x4553('0x4b')));$('.'+_0x303c00)[_0x4553('0x1a')](_0x4553('0x4b'),_0xdf1aec);}});},0x32);}
