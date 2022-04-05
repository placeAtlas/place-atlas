/*
	========================================================================
	The /r/place Atlas
	
	An Atlas of Reddit's /r/place, with information to each
	artwork	of the canvas provided by the community.
	
	Copyright (C) 2017 Roland Rytz <roland@draemm.li>
	Licensed under the GNU Affero General Public License Version 3
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation, either version 3 of the
	License, or (at your option) any later version.
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
	For more information, see:
	http://place-atlas.stefanocoding.me/license.txt
	
	========================================================================
*/

window.addEventListener("error", function (e) {
	console.log(e);
	var errorMessage = "<p class=\"error\">An error has occurred:</p>";
	errorMessage += "<p class=\"errorBody\">" + e.message + "</p>";
	errorMessage += "<p class=\"errorBody\">on line " + e.lineno + "</p>";
	errorMessage += "<p class=\"error\">If this keeps happening, feel free to send me a <a href=\"mailto:roland.rytz@gmail.com\">mail</a>.</p>";
	document.getElementById("loadingContent").innerHTML = errorMessage;
});

function pointIsInPolygon (point, polygon) {
	// ray-casting algorithm based on
	// http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
	
	var x = point[0], y = point[1];
	
	var inside = false;
	for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		var xi = polygon[i][0], yi = polygon[i][1];
		var xj = polygon[j][0], yj = polygon[j][1];
		
		var intersect = ((yi > y) != (yj > y))
			&& (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
		if (intersect) inside = !inside;
	}
	return inside;
};

var atlas = [
{"id":0,"name":"Pinewood Logo/Rubix cube (Destroyed)","description":"Originally the logo for the Roblox group Pinewood Builders, the logo transformed into a game of tic tac toe, and then a Rubix cube. It was destroyed after being invaded by Iran","website":"https://pinewoodbuilders.reddit.com/","subreddit":"r/PinewoodBuilders","center":[39.5,279.5],"path":[[22.5,295.5],[23.5,274.5],[35.5,262.5],[55.5,262.5],[55.5,283.5],[43.5,295.5]]},
{"id":1,"name":"CCKUFI Robin","description":"The icon of CcKuFi, the subreddit of users who made it to the highest tier in Reddit's 2016 April Fools Event, Robin.","subreddit":"ccKufiPrFaShleWoli0","center":[783.5,669.5],"path":[[771.5,661.5],[771.5,680.5],[789.5,680.5],[789.5,664.5],[806.5,664.5],[806.5,660.5],[771.5,660.5]]},
{"id":2,"name":"Narrator Nexus","description":"The icon of Narrator Nexus, the group of users who coordinated the storyline in Reddit's 2019 April Fools Event, Sequence.","website":"","subreddit":"/r/NarraNexus/","center":[763.5,673.5],"path":[[755.5,667.5],[755.5,680.5],[771.5,680.5],[771.5,674.5],[772.5,673.5],[772.5,670.5],[767.5,664.5],[762.5,664.5],[759.5,669.5],[755.5,667.5]]},
{"id":3,"name":"April Knights","description":"The Logo of the April Knights, a subreddit formed for Reddit's 2015 April Fools event 'The Button'.","website":"","subreddit":"/r/AprilKnights/","center":[788.5,677.5],"path":[[789.5,664.5],[789.5,679.5],[789.5,680.5],[755.5,680.5],[755.5,684.5],[803.5,684.5],[801.5,679.5],[803.5,676.5],[803.5,664.5],[789.5,664.5]]},
{"id":4,"name":"Triforce","description":"The iconic symbol of the Legend of Zelda franchise.","website":"","subreddit":"/r/Zelda","center":[788.5,640.5],"path":[[788.5,598.5],[756.5,661.5],[819.5,661.5],[819.5,660.5],[788.5,598.5]]},
{"id":5,"name":"The Sword of Protection","description":"A magic sword from the 2018 Netflix series She-Ra and the Princesses of Power. The text underneath the sword spells out \"She-Ra\".","website":"https://www.netflix.com/title/80179762","subreddit":"/r/PrincessesOfPower","center":[1544.5,420.5],"path":[[1532.5,414.5],[1532.5,426.5],[1555.5,426.5],[1555.5,414.5]]},
{"id":6,"name":"2b2t logo","description":"The logo of 2b2t.org, the oldest anarchy server in Minecraft. (r/2b2t)","website":"","subreddit":"r/2b2tplace","center":[936.5,451.5],"path":[[912.5,421.5],[912.5,481.5],[960.5,481.5],[960.5,421.5]]},
{"id":7,"name":"Fancade","description":"The fancade logo, a mobile game with a built in game engine.","website":"www.fancade.com","subreddit":"r/fancade","center":[90.5,696.5],"path":[[72.5,690.5],[108.5,690.5],[108.5,701.5],[79.5,702.5],[75.5,702.5],[72.5,703.5],[73.5,690.5]]},
{"id":8,"name":"NotITG","description":"Stepmania fork for modcharts","website":"https://noti.tg/","subreddit":"","center":[1198.5,58.5],"path":[[1179.5,60.5],[1183.5,56.5],[1180.5,53.5],[1183.5,50.5],[1184.5,49.5],[1213.5,49.5],[1213.5,63.5],[1215.5,63.5],[1215.5,68.5],[1212.5,68.5],[1212.5,67.5],[1195.5,67.5],[1195.5,64.5],[1183.5,64.5]]},
{"id":9,"name":"Firey","description":"A pixel version of the bfdi character, Firey","website":"https://bfdi.tv","subreddit":"r/battlefordreamisland","center":[620.5,876.5],"path":[[631.5,866.5],[609.5,866.5],[609.5,885.5],[630.5,886.5]]},
{"id":10,"name":"r/DeepRockGalactic","description":"Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.","website":"https://www.deeprockgalactic.com/","subreddit":"r/DeepRockGalactic","center":[208.5,285.5],"path":[[175.5,262.5],[241.5,262.5],[241.5,308.5],[175.5,308.5],[175.5,262.5]]},
{"id":11,"name":"FIRST Robotics competition logo","description":"Highschool robotics competition. ","website":"","subreddit":"r/FRC","center":[1750.5,259.5],"path":[[1727.5,249.5],[1754.5,249.5],[1754.5,253.5],[1768.5,253.5],[1768.5,249.5],[1772.5,249.5],[1772.5,269.5],[1738.5,269.5],[1738.5,262.5],[1727.5,262.5],[1727.5,249.5]]},
{"id":12,"name":"Starwars","description":"Poster art for 'Star Wars Episode IV: A New Hope', done by the redditors at starwars_place. Heavy battles fought against among us, and only once briefly disappearing to XQC, before being reinstated.","website":"","subreddit":"/r/starwars_place/","center":[621.5,771.5],"path":[[571.5,698.5],[671.5,698.5],[671.5,844.5],[570.5,843.5]]},
{"id":13,"name":"Cang","description":"It's quite literally just cang.","website":"","subreddit":"","center":[1960.5,328.5],"path":[[1954.5,322.5],[1954.5,333.5],[1966.5,333.5],[1966.5,322.5],[1954.5,322.5]]},
{"id":14,"name":"Avicii Tribute","description":"The logo of the Swedish DJ and EDM artist Avicii, who was born on 8 September 1989 and died on 20 April 2018. The creation was part of a collaboration with r/Avicii and r/Place_Nordicunion.","website":"https://discord.gg/9zTbdMSUea","subreddit":"r/Avicii","center":[757.5,81.5],"path":[[740.5,91.5],[773.5,91.5],[773.5,71.5],[740.5,71.5],[740.5,91.5]]},
{"id":15,"name":"Burdurland Logo","description":"Logo of subreddit r/burdurland","website":"","subreddit":"r/burdurland","center":[965.5,44.5],"path":[[999.5,0.5],[999.5,87.5],[930.5,87.5],[930.5,0.5]]},
{"id":16,"name":"Trackmania","description":"Original/previous logo of the arcade racing game series Trackmania.","website":"https://www.trackmania.com","subreddit":"r/trackmania","center":[411.5,749.5],"path":[[373.5,740.5],[448.5,740.5],[448.5,757.5],[373.5,757.5],[373.5,740.5]]},
{"id":17,"name":"Czech flag with pixelarts","description":"Czech flag made by the community of r/czech.\nWith pixelarts from Czech culture.","website":"","subreddit":"/r/czech","center":[1266.5,205.5],"path":[[1206.5,161.5],[1206.5,248.5],[1324.5,249.5],[1326.5,161.5]]},
{"id":18,"name":"Duck Game duck wearing a Jetpack","description":"A lovely character from a multiplayer action-platformer game made by Landon Podbielski.","website":"http://store.steampowered.com/app/312530","subreddit":"r/duckgame","center":[1723.5,139.5],"path":[[1730.5,128.5],[1730.5,150.5],[1716.5,150.5],[1716.5,128.5]]},
{"id":19,"name":"Pou (Mobile Game)","description":"Pou was a Top 1 downloaded game on Google Play for several years straight soon post-release. In it, player would take care of a vitual pet, feeding it, buying medicine and playing minigames.","website":"https://play.google.com/store/apps/details?id=me.pou.app&gl=us","subreddit":"","center":[1545.5,495.5],"path":[[1500.5,447.5],[1590.5,447.5],[1590.5,542.5],[1500.5,545.5],[1500.5,447.5]]},
{"id":20,"name":"Statue of Saint Wenceslas","description":"A Statue of Saint Wenceslas, patron of the Czech state, located at Wenceslas Square in Prague, Czech Republic.","website":"","subreddit":"r/czech","center":[1231.5,226.5],"path":[[1208.5,248.5],[1251.5,249.5],[1246.5,244.5],[1250.5,236.5],[1244.5,232.5],[1247.5,227.5],[1250.5,228.5],[1257.5,223.5],[1256.5,217.5],[1247.5,211.5],[1240.5,214.5],[1238.5,217.5],[1233.5,210.5],[1237.5,181.5],[1233.5,181.5],[1232.5,187.5],[1223.5,189.5],[1228.5,196.5],[1231.5,196.5],[1231.5,201.5],[1225.5,201.5],[1226.5,219.5],[1217.5,220.5],[1209.5,222.5],[1208.5,231.5],[1213.5,231.5],[1211.5,240.5]]},
{"id":21,"name":"Jerma985","description":"Jerma is long time streamer and a retired YouTuber. Most of the time he's streaming games from various eras, but he's most famous for these special, semi-scripted streams, like playing archeologist on real excavation site, holiday streams or creating Jerma Dollhouse.","website":"https://jerma-lore.fandom.com/wiki/Jerma985","subreddit":"","center":[114.5,977.5],"path":[[92.5,955.5],[135.5,955.5],[135.5,999.5],[92.5,999.5]]},
{"id":22,"name":"United Kingdom","description":"The Union Jack, featuring pixel art of (right to left) the Palace of Westminster and Big Ben (often defaced with a phallus), a teapot and mug, Saint Piran's Flag (Cornwall), The Cross of Saint Patrick (Ireland), the Welsh Flag, the Scottish Saltire, and the logo of the National Health Service","website":"","subreddit":"r/ukplace","center":[635.5,516.5],"path":[[569.5,476.5],[571.5,557.5],[701.5,557.5],[701.5,476.5],[701.5,476.5],[701.5,476.5],[701.5,476.5],[700.5,476.5]]},
{"id":23,"name":"BFDI Bubble and Leafy","description":"Leafy and Bubble from \"Battle For Dream Island\" standing on Yoyleland.","website":"https://www.youtube.com/watch?v=YQa2-DY7Y_Q&list=PL24C8378F296DB656&ab_channel=jacknjellify","subreddit":"r/BattleForDreamIsland","center":[1575.5,54.5],"path":[[1561.5,42.5],[1562.5,67.5],[1588.5,67.5],[1588.5,42.5]]},
{"id":24,"name":"OSU","description":"Place tiles for the rhythm game Osu! ","website":"https://www.reddit.com/r/osuplace/","subreddit":"r/osuplace","center":[727.5,726.5],"path":[[695.5,691.5],[710.5,682.5],[730.5,679.5],[751.5,685.5],[765.5,696.5],[773.5,716.5],[775.5,733.5],[768.5,752.5],[758.5,764.5],[746.5,769.5],[728.5,774.5],[707.5,769.5],[693.5,760.5],[683.5,746.5],[678.5,732.5],[681.5,711.5],[692.5,694.5]]},
{"id":25,"name":"Northeastern University","description":"Northeastern University Husky and Initials. Coordinated using discord : https://www.reddit.com/r/NEU/comments/tt7dhj/rplace_northeastern_discord/","website":"https://www.reddit.com/r/NEU/","subreddit":"r/NEU","center":[221.5,707.5],"path":[[185.5,699.5],[258.5,699.5],[258.5,714.5],[183.5,714.5],[184.5,698.5]]},
{"id":26,"name":"GNU/Linux","description":"Icon for various nix distributions and a large Tux Penguin ","website":"https://www.reddit.com/r/placetux/","subreddit":"r/placetux","center":[46.5,722.5],"path":[[20.5,679.5],[71.5,679.5],[71.5,764.5],[20.5,765.5],[21.5,680.5]]},
{"id":27,"name":"Club Penguin","description":"A blue penguin from the MMO videogame Club Penguin, which officially closed in March 2017.","website":"","subreddit":"/r/clubpenguin","center":[1884.5,159.5],"path":[[1887.5,141.5],[1881.5,141.5],[1880.5,142.5],[1879.5,142.5],[1879.5,144.5],[1878.5,145.5],[1877.5,145.5],[1877.5,151.5],[1876.5,151.5],[1876.5,152.5],[1876.5,152.5],[1875.5,153.5],[1875.5,154.5],[1874.5,155.5],[1874.5,156.5],[1873.5,157.5],[1872.5,158.5],[1872.5,159.5],[1871.5,160.5],[1871.5,161.5],[1871.5,162.5],[1871.5,165.5],[1871.5,166.5],[1872.5,167.5],[1873.5,166.5],[1874.5,165.5],[1875.5,164.5],[1875.5,165.5],[1875.5,167.5],[1876.5,168.5],[1877.5,169.5],[1875.5,169.5],[1875.5,170.5],[1875.5,171.5],[1874.5,171.5],[1874.5,174.5],[1879.5,174.5],[1880.5,173.5],[1881.5,172.5],[1882.5,173.5],[1883.5,174.5],[1884.5,173.5],[1885.5,172.5],[1886.5,172.5],[1886.5,173.5],[1887.5,173.5],[1887.5,174.5],[1893.5,174.5],[1893.5,173.5],[1892.5,172.5],[1892.5,171.5],[1891.5,170.5],[1891.5,169.5],[1890.5,169.5],[1891.5,168.5],[1892.5,168.5],[1892.5,164.5],[1893.5,165.5],[1893.5,166.5],[1894.5,166.5],[1894.5,167.5],[1896.5,167.5],[1896.5,160.5],[1895.5,159.5],[1895.5,156.5],[1894.5,155.5],[1893.5,154.5],[1893.5,153.5],[1892.5,152.5],[1891.5,151.5],[1891.5,149.5],[1890.5,148.5],[1890.5,145.5],[1889.5,144.5],[1889.5,143.5],[1888.5,142.5]]},
{"id":28,"name":"Among Us crewmate","description":"Among Us is a game released in 2018 that gained wide recognition during 2020. \"Large\" crewmates on the canvas often are edited with obscene details, while the small variants transparently populate other drawings.","website":"https://store.steampowered.com/app/945360/Among_Us/","subreddit":"","center":[1366.5,409.5],"path":[[1339.5,383.5],[1339.5,368.5],[1341.5,364.5],[1348.5,358.5],[1355.5,353.5],[1362.5,351.5],[1375.5,350.5],[1384.5,351.5],[1392.5,355.5],[1397.5,362.5],[1400.5,367.5],[1402.5,373.5],[1400.5,456.5],[1389.5,467.5],[1385.5,468.5],[1379.5,460.5],[1366.5,460.5],[1359.5,470.5],[1355.5,471.5],[1352.5,471.5],[1348.5,470.5],[1340.5,459.5],[1339.5,439.5],[1338.5,427.5],[1330.5,427.5],[1322.5,420.5],[1322.5,395.5],[1322.5,389.5],[1329.5,384.5]]},
{"id":29,"name":"American Flag","description":"The american flag","website":"","subreddit":"","center":[390.5,488.5],"path":[[299.5,448.5],[481.5,449.5],[481.5,527.5],[299.5,528.5],[299.5,487.5]]},
{"id":30,"name":"Flag of East Turkestan","description":"The historical flag of the Turkic Islamic Republic of East Turkestan, currently used by Uyghur activists","website":"","subreddit":"","center":[978.5,454.5],"path":[[965.5,442.5],[991.5,442.5],[991.5,464.5],[991.5,465.5],[965.5,465.5]]},
{"id":31,"name":"Flag of Turkey","description":"Flag of Turkey with the silhouette of Istanbul","website":"","subreddit":"r/turkey","center":[390.5,396.5],"path":[[300.5,344.5],[479.5,344.5],[479.5,448.5],[300.5,448.5],[300.5,344.5]]},
{"id":32,"name":"Atatürk's Portrait","description":"Mustafa Kemal Atatürk, founder of Turkey","website":"","subreddit":"r/turkey","center":[1052.5,60.5],"path":[[1001.5,1.5],[1103.5,1.5],[1103.5,119.5],[1001.5,119.5]]},
{"id":33,"name":"Moka pot","description":"An Italian traditional coffee maker.","website":"","subreddit":"","center":[833.5,391.5],"path":[[815.5,406.5],[850.5,406.5],[850.5,376.5],[815.5,376.5]]},
{"id":34,"name":"Toki Pona (ma nanpa wan)","description":"The first site decorated by the toki pona community. Toki pona is a minimalist constructed language by Sonja Lang (jan Sonja).","website":"https://tokipona.org/","subreddit":"r/tokipona/","center":[763.5,345.5],"path":[[740.5,330.5],[786.5,330.5],[786.5,360.5],[740.5,360.5]]},
{"id":35,"name":"civbr :happysperm:/:squirtyay:","description":"The :squirtyay:/:happysperm: emote built by the r/civbattleroyale and associated communities","website":"","subreddit":"r/civbattleroyale","center":[718.5,369.5],"path":[[707.5,360.5],[724.5,360.5],[730.5,366.5],[730.5,374.5],[725.5,380.5],[718.5,380.5],[714.5,377.5],[707.5,376.5],[707.5,376.5],[707.5,360.5]]},
{"id":36,"name":"Java","description":"The Java Logo","website":"","subreddit":"","center":[1220.5,875.5],"path":[[1215.5,870.5],[1224.5,870.5],[1224.5,879.5],[1215.5,879.5]]},
{"id":37,"name":"Tally Hall Logo","description":"This is the logo of the band \"tally hall\". Above it, in the trans pride flag, is the character \"ally hall\", a joint project between the two groups. ","website":"https://www.tallyhall.com","subreddit":"/r/tallyhall","center":[769.5,495.5],"path":[[754.5,477.5],[754.5,521.5],[763.5,521.5],[763.5,507.5],[786.5,507.5],[786.5,477.5],[773.5,477.5]]},
{"id":38,"name":"clint stevens","description":"profile picture of clint stevens, a speedrunner twitch's streamer","website":"https://www.twitch.tv/clintstevens","subreddit":"r/ClintStevens","center":[1727.5,899.5],"path":[[1717.5,889.5],[1736.5,889.5],[1736.5,909.5],[1717.5,909.5]]},
{"id":39,"name":"Encanto Butterfly","description":"Butterfly from the Disney animated movie Encanto.","website":"","subreddit":"","center":[1924.5,275.5],"path":[[1918.5,270.5],[1918.5,281.5],[1927.5,281.5],[1933.5,270.5],[1918.5,270.5]]},
{"id":40,"name":"Outer wilds Patch","description":"the main logo for the game outer wilds, it's content is animated to emulate a supernovae","website":"","subreddit":"r/outerwilds","center":[367.5,948.5],"path":[[347.5,959.5],[388.5,959.5],[389.5,958.5],[389.5,955.5],[368.5,925.5],[367.5,925.5],[346.5,955.5],[346.5,958.5],[347.5,959.5],[371.5,954.5],[346.5,955.5]]},
{"id":41,"name":"Amulet of Yendor","description":"A powerful artifact representing the Pixel Dungeon community.","website":"https://pixeldungeon.fandom.com/wiki/Amulet_of_Yendor","subreddit":"/r/PixelDungeon","center":[698.5,368.5],"path":[[689.5,361.5],[689.5,361.5],[689.5,361.5],[707.5,361.5],[707.5,375.5],[689.5,375.5],[689.5,368.5]]},
{"id":42,"name":"Hatchling and scout","description":"main character of the game Outer Wilds","website":"","subreddit":"r/outerwilds","center":[389.5,934.5],"path":[[384.5,944.5],[391.5,944.5],[391.5,942.5],[390.5,942.5],[390.5,938.5],[392.5,938.5],[393.5,939.5],[395.5,940.5],[395.5,941.5],[396.5,942.5],[395.5,943.5],[395.5,944.5],[397.5,944.5],[397.5,943.5],[398.5,942.5],[399.5,942.5],[400.5,943.5],[400.5,944.5],[402.5,944.5],[402.5,943.5],[401.5,942.5],[402.5,941.5],[402.5,939.5],[400.5,937.5],[399.5,937.5],[399.5,935.5],[400.5,935.5],[399.5,934.5],[398.5,935.5],[399.5,936.5],[399.5,937.5],[397.5,937.5],[395.5,939.5],[394.5,938.5],[394.5,935.5],[391.5,930.5],[391.5,923.5],[388.5,921.5],[385.5,921.5],[384.5,923.5],[383.5,923.5],[382.5,922.5],[381.5,923.5],[382.5,925.5],[383.5,928.5],[383.5,930.5],[380.5,935.5],[380.5,938.5],[381.5,939.5],[384.5,938.5],[384.5,944.5]]},
{"id":43,"name":"Corridor Crew Logo","description":"Logo from the Corridor youtube channel, a group of vfx artist.","website":"https://www.youtube.com/c/corridorcrew","subreddit":"r/Corridor","center":[121.5,94.5],"path":[[121.5,87.5],[114.5,93.5],[121.5,101.5],[128.5,94.5]]},
{"id":44,"name":"OptiFine logo","description":"The logo of the Minecraft performance mod, OptiFine","website":"https://www.optifine.net/","subreddit":"r/Optifine","center":[810.5,671.5],"path":[[804.5,665.5],[815.5,665.5],[815.5,677.5],[804.5,677.5]]},
{"id":45,"name":"Baltic states","description":"A map of the three Baltic states: Estonia, Latvia, and Lithuania.","website":"","subreddit":"","center":[1925.5,139.5],"path":[[1954.5,100.5],[1955.5,162.5],[1949.5,161.5],[1949.5,176.5],[1937.5,176.5],[1937.5,182.5],[1902.5,181.5],[1902.5,174.5],[1897.5,174.5],[1897.5,100.5]]},
{"id":46,"name":"The Elder Scrolls V: Skyrim","description":"The logo for the fifth Elder Scrolls game, Skyrim.","website":"","subreddit":"r/skyrim","center":[1984.5,257.5],"path":[[1969.5,238.5],[1999.5,238.5],[1999.5,276.5],[1969.5,276.5]]},
{"id":47,"name":"Moon Lord (Terraria)","description":"Pixel art of the Moon Lord, the final boss from the game Terraria.","website":"","subreddit":"r/Terraria","center":[1773.5,359.5],"path":[[1793.5,402.5],[1785.5,404.5],[1780.5,409.5],[1781.5,411.5],[1777.5,415.5],[1772.5,415.5],[1768.5,412.5],[1765.5,404.5],[1757.5,402.5],[1754.5,379.5],[1738.5,402.5],[1731.5,402.5],[1722.5,387.5],[1720.5,357.5],[1708.5,336.5],[1713.5,328.5],[1723.5,322.5],[1733.5,325.5],[1741.5,340.5],[1731.5,355.5],[1732.5,368.5],[1737.5,363.5],[1739.5,354.5],[1749.5,346.5],[1757.5,345.5],[1754.5,319.5],[1758.5,306.5],[1770.5,301.5],[1788.5,304.5],[1795.5,319.5],[1792.5,333.5],[1791.5,344.5],[1810.5,352.5],[1812.5,365.5],[1817.5,368.5],[1819.5,356.5],[1809.5,338.5],[1813.5,336.5],[1820.5,327.5],[1828.5,325.5],[1835.5,331.5],[1839.5,337.5],[1837.5,344.5],[1829.5,358.5],[1825.5,392.5],[1817.5,402.5],[1807.5,396.5],[1795.5,378.5]]},
{"id":48,"name":"Chessboard","description":"","website":"","subreddit":"","center":[1668.5,99.5],"path":[[1615.5,47.5],[1720.5,47.5],[1720.5,151.5],[1615.5,150.5]]},
{"id":49,"name":"Half-Life 3","description":"The logo for the, sadly nonexistent, third entry in the Half-Life series of first-person shooters by Valve.","website":"","subreddit":"r/HalfLife","center":[774.5,193.5],"path":[[766.5,185.5],[782.5,185.5],[782.5,200.5],[766.5,200.5]]},
{"id":50,"name":"Mass Effect","description":"Mass Effect is a series of third-person science fiction role-playing games developed by BioWare.","website":"","subreddit":"r/masseffect","center":[822.5,992.5],"path":[[842.5,999.5],[801.5,999.5],[801.5,984.5],[842.5,984.5]]},
{"id":51,"name":"Mass relay","description":"A mass relay, a form of FTL travel, from Mass Effect.","website":"","subreddit":"r/masseffect","center":[835.5,981.5],"path":[[841.5,978.5],[830.5,978.5],[827.5,981.5],[830.5,984.5],[842.5,984.5],[842.5,978.5]]},
{"id":52,"name":"Tali'Zorah","description":"A popular NPC from the Mass Effect series.","website":"","subreddit":"r/masseffect","center":[823.5,973.5],"path":[[819.5,964.5],[828.5,964.5],[828.5,978.5],[826.5,983.5],[818.5,983.5],[818.5,964.5]]},
{"id":53,"name":"Rec Room","description":"Rec Room is a virtual reality, online video game with an integrated game creation system developed and published by Rec Room Inc.","website":"https://recroom.com","subreddit":"/r/recroom","center":[398.5,991.5],"path":[[393.5,1000.5],[403.5,999.5],[403.5,982.5],[394.5,982.5],[394.5,987.5],[393.5,987.5],[393.5,989.5]]},
{"id":54,"name":"Smiling Friends","description":"Smiling Friends is an animated television series created by Zach Hadel and Michael Cusack for Cartoon Network's night-time programming block Adult Swim - Wiki","website":"https://www.reddit.com/r/SmilingFriends/","subreddit":"/r/SmilingFriends/","center":[531.5,927.5],"path":[[513.5,900.5],[548.5,900.5],[548.5,954.5],[514.5,953.5]]},
{"id":55,"name":"Mikio Fujioka Tribute","description":"A star in tribute to Mikio Fujioka, a guitarist of BABYMETAL's backing band the KAMI band - who sadly passed away in 2018","website":"https://www.babymetal.com/en/","subreddit":"r/BABYMETAL","center":[1124.5,482.5],"path":[[1120.5,478.5],[1120.5,486.5],[1128.5,486.5],[1128.5,481.5],[1125.5,481.5],[1125.5,478.5]]},
{"id":56,"name":"Tintin and his dog.","description":"The Tintin comic series originated in Belgium and is represented on the flag.","website":"","subreddit":"","center":[308.5,596.5],"path":[[322.5,580.5],[322.5,613.5],[291.5,612.5],[296.5,579.5],[299.5,579.5]]},
{"id":57,"name":"Queen Margrethe The 2nd","description":"A picture of her royal highness the Danish queen Margrethe the 2nd smoking","website":"","subreddit":"","center":[472.5,259.5],"path":[[478.5,215.5],[484.5,215.5],[484.5,216.5],[486.5,216.5],[486.5,217.5],[488.5,217.5],[488.5,218.5],[490.5,218.5],[490.5,219.5],[491.5,219.5],[491.5,220.5],[493.5,220.5],[493.5,221.5],[494.5,221.5],[494.5,222.5],[495.5,222.5],[495.5,293.5],[437.5,294.5],[437.5,287.5],[448.5,277.5],[449.5,275.5],[449.5,272.5],[448.5,271.5],[448.5,269.5],[448.5,266.5],[448.5,265.5],[447.5,262.5],[448.5,262.5],[450.5,260.5],[449.5,258.5],[449.5,256.5],[447.5,255.5],[450.5,253.5],[453.5,249.5],[448.5,248.5],[452.5,245.5],[457.5,249.5],[458.5,247.5],[456.5,245.5],[456.5,243.5],[458.5,241.5],[459.5,240.5],[459.5,237.5],[459.5,235.5],[461.5,237.5],[463.5,235.5],[463.5,234.5],[464.5,231.5],[458.5,228.5],[459.5,225.5],[458.5,224.5],[458.5,221.5],[458.5,220.5],[463.5,220.5],[466.5,220.5],[467.5,222.5],[473.5,219.5],[474.5,219.5]]},
{"id":58,"name":"Kaj & Andrea","description":"Popular children cartoon in Denmark containing two puppets named Kaj (the frog) and Andrea (the parrot)","website":"","subreddit":"","center":[445.5,232.5],"path":[[437.5,215.5],[454.5,218.5],[457.5,222.5],[457.5,226.5],[459.5,226.5],[457.5,226.5],[457.5,228.5],[459.5,230.5],[456.5,232.5],[452.5,232.5],[453.5,234.5],[453.5,243.5],[446.5,250.5],[442.5,250.5],[441.5,248.5],[439.5,248.5],[437.5,251.5],[434.5,249.5],[435.5,245.5],[436.5,242.5],[437.5,234.5],[435.5,233.5],[435.5,226.5],[436.5,224.5],[437.5,224.5],[437.5,222.5],[434.5,221.5],[437.5,216.5]]},
{"id":59,"name":"Art Heaven","description":"Art Heaven is an art community started on discord. This is an image of our mascot, Abby!","website":"","subreddit":"r/artheaven","center":[652.5,640.5],"path":[[661.5,632.5],[661.5,647.5],[642.5,647.5],[642.5,632.5]]},
{"id":60,"name":"/r/FigureSkating","description":"","website":"","subreddit":"/r/FigureSkating","center":[277.5,975.5],"path":[[286.5,966.5],[267.5,966.5],[267.5,972.5],[268.5,972.5],[268.5,973.5],[269.5,973.5],[269.5,980.5],[268.5,980.5],[268.5,985.5],[286.5,985.5]]},
{"id":61,"name":"Hermitcraft","description":"Hermitcraft is a popular Minecraft SMP (Survival MultiPLayer), featuring many of the most popular creators","website":"https://hermitcraft.com","subreddit":"r/hermitcraft","center":[881.5,607.5],"path":[[924.5,583.5],[879.5,583.5],[879.5,590.5],[851.5,590.5],[850.5,632.5],[902.5,632.5],[902.5,616.5],[906.5,616.5],[906.5,592.5],[925.5,592.5],[925.5,583.5],[924.5,583.5]]},
{"id":62,"name":"Notte Boom Sticker","description":"The in-game emote used for Dragalia Lost mobile game featuring the character Notte.","website":"https://dragalialost.com/","subreddit":"/r/DragaliaLost","center":[197.5,49.5],"path":[[178.5,34.5],[215.5,34.5],[215.5,64.5],[178.5,64.5]]},
{"id":63,"name":"Patriotic Dragonite","description":"A Dragonite from the video game series Pokémon with its palm on its chest. It has become a symbol of spanish patriotism on many memes featuring him behind a spanish flag.","website":"","subreddit":"r/esplace","center":[983.5,300.5],"path":[[973.5,308.5],[973.5,306.5],[974.5,305.5],[974.5,303.5],[973.5,302.5],[972.5,301.5],[972.5,300.5],[972.5,299.5],[973.5,298.5],[974.5,297.5],[973.5,296.5],[973.5,295.5],[972.5,294.5],[970.5,294.5],[968.5,296.5],[967.5,295.5],[967.5,291.5],[969.5,289.5],[970.5,288.5],[970.5,286.5],[971.5,287.5],[972.5,288.5],[974.5,288.5],[975.5,287.5],[976.5,286.5],[977.5,285.5],[980.5,285.5],[981.5,286.5],[985.5,285.5],[986.5,286.5],[987.5,286.5],[988.5,285.5],[989.5,286.5],[987.5,288.5],[986.5,288.5],[985.5,287.5],[984.5,288.5],[984.5,293.5],[985.5,293.5],[987.5,293.5],[989.5,291.5],[989.5,290.5],[990.5,288.5],[991.5,287.5],[992.5,286.5],[993.5,287.5],[994.5,288.5],[995.5,289.5],[995.5,296.5],[996.5,296.5],[996.5,297.5],[995.5,297.5],[993.5,297.5],[993.5,295.5],[990.5,295.5],[989.5,296.5],[988.5,296.5],[988.5,298.5],[989.5,300.5],[989.5,301.5],[988.5,302.5],[989.5,303.5],[992.5,303.5],[992.5,302.5],[991.5,301.5],[991.5,301.5],[991.5,298.5],[994.5,298.5],[995.5,299.5],[995.5,300.5],[997.5,300.5],[997.5,301.5],[998.5,301.5],[998.5,305.5],[997.5,306.5],[996.5,306.5],[995.5,307.5],[990.5,311.5],[990.5,312.5],[989.5,313.5],[989.5,314.5],[985.5,318.5],[983.5,318.5],[982.5,317.5],[982.5,316.5],[983.5,315.5],[983.5,313.5],[982.5,312.5],[981.5,311.5],[980.5,312.5],[980.5,313.5],[977.5,313.5],[977.5,314.5],[975.5,316.5],[973.5,316.5],[972.5,315.5],[972.5,314.5],[973.5,313.5],[974.5,312.5],[974.5,311.5],[973.5,310.5],[973.5,308.5]]},
{"id":64,"name":"Shane Keith Warne (1969-2022)","description":"Shane Warne was an Australian cricketer. A right-arm leg spinner, he is widely regarded as one of the greatest bowlers in cricket history. Lovingly known as 'Warnie', he would forever stay immortal in the hearts of cricket fans all around the world.","website":"https://www.instagram.com/shanewarne23/?hl=en","subreddit":"","center":[311.5,267.5],"path":[[296.5,254.5],[319.5,260.5],[294.5,281.5],[294.5,273.5],[293.5,268.5],[293.5,263.5],[293.5,259.5],[293.5,256.5],[293.5,253.5],[294.5,252.5],[302.5,252.5],[306.5,252.5],[311.5,252.5],[318.5,252.5],[323.5,252.5],[330.5,252.5],[333.5,253.5],[335.5,256.5],[334.5,260.5],[334.5,264.5],[334.5,267.5],[334.5,265.5],[334.5,269.5],[334.5,271.5],[334.5,273.5],[334.5,282.5],[331.5,282.5],[328.5,282.5],[294.5,282.5],[294.5,282.5]]},
{"id":65,"name":"Mayreel (Forma de Alpaca)","description":"Mayreel from the gacha mobile game Guardian Tales in its alpaca form. She's is the god of harvest Kamael's divine beast, an alpaca with the power of grass and flowers. Usually, she tags along with Bari in her alpaca form, but she can change into human form.\n","website":"","subreddit":"r/guardiantales","center":[689.5,208.5],"path":[[688.5,194.5],[692.5,194.5],[692.5,195.5],[693.5,196.5],[693.5,199.5],[696.5,199.5],[696.5,200.5],[697.5,200.5],[697.5,203.5],[698.5,204.5],[700.5,204.5],[700.5,205.5],[701.5,205.5],[701.5,207.5],[702.5,207.5],[702.5,211.5],[701.5,211.5],[701.5,214.5],[700.5,214.5],[696.5,218.5],[695.5,219.5],[694.5,219.5],[693.5,218.5],[691.5,218.5],[690.5,219.5],[689.5,219.5],[688.5,218.5],[685.5,218.5],[684.5,219.5],[683.5,219.5],[677.5,213.5],[677.5,205.5],[682.5,199.5],[682.5,196.5],[684.5,194.5],[686.5,194.5],[686.5,195.5],[687.5,196.5],[688.5,196.5],[689.5,195.5]]},
{"id":66,"name":"Babymetal","description":"Yui Metal, Su Metal and Moa Metal of the Japanese Metal band BABYMETAL","website":"https://www.babymetal.com/en/","subreddit":"r/BABYMETAL","center":[675.5,611.5],"path":[[649.5,591.5],[701.5,591.5],[701.5,631.5],[649.5,631.5],[649.5,591.5]]},
{"id":67,"name":"Babymetal Resistance Logo","description":"Babymetal Resistance album logo/art","website":"https://www.babymetal.com/en/","subreddit":"r/BABYMETAL","center":[1141.5,470.5],"path":[[1115.5,465.5],[1125.5,465.5],[1125.5,461.5],[1161.5,461.5],[1161.5,465.5],[1167.5,465.5],[1161.5,474.5],[1157.5,474.5],[1157.5,481.5],[1149.5,481.5],[1146.5,479.5],[1142.5,478.5],[1137.5,479.5],[1133.5,481.5],[1125.5,481.5],[1125.5,476.5],[1122.5,474.5],[1118.5,470.5]]},
{"id":68,"name":"Outer Wilds: Nomai Mask","description":"Outer Wilds is an action-adventure game developed by Mobius Digital, featuring a solar system stuck in a 22-minute time loop, which ends as the sun goes supernova. This is the mask of an old, dead civilization in the solar system.","website":"https://www.mobiusdigitalgames.com/outer-wilds.html","subreddit":"/r/outerwilds","center":[1686.5,664.5],"path":[[1662.5,637.5],[1662.5,690.5],[1709.5,690.5],[1709.5,637.5]]},
{"id":69,"name":"Rubius","description":"Logo of one of the largest creators of Spanish-speaking content nicknamed \"la leyenda del gaming\" aka \"elRubius\", along with his community and the entire Spanish-speaking community, next to it the well-known bear skin that he used is his multiple minecraft series like \"Karmaland\", sigo?","website":"https://www.madkat.store/es/","subreddit":"/r/ubius/","center":[1519.5,637.5],"path":[[1487.5,623.5],[1460.5,613.5],[1577.5,613.5],[1577.5,660.5],[1460.5,660.5],[1460.5,614.5],[1487.5,622.5]]},
{"id":70,"name":"R.I.P. Michigun","description":"A memorial for famous and skilled Geometry Dash player Michigun.","website":"https://discord.gg/BcXxhV4mYn","subreddit":"r/geometrydashplace","center":[942.5,393.5],"path":[[923.5,367.5],[960.5,367.5],[960.5,418.5],[923.5,418.5]]},
{"id":71,"name":"Georgia Institute of Technology","description":"Icons and mascots of Georgia Tech.","website":"gatech.edu","subreddit":"/r/gatecg","center":[402.5,570.5],"path":[[379.5,529.5],[421.5,529.5],[420.5,608.5],[379.5,608.5],[379.5,583.5],[412.5,583.5],[412.5,549.5],[379.5,549.5]]},
{"id":72,"name":"Formula 1","description":"Logos of all 2022 Teams, the Williams-W with the addition of \"FW\" in honour of the late founder Frank Williams.\n\n\"Keep fighting Micheal\" honours Michael Schumacher who is still fighting for his life after a devastating skiing accident many years ago.\n\"JB17\" is a testiment to Jules Bianchi, who suffered a fatal accident during the 2014 Japanese Grand Prix.\n\"AH19\" is a testiment to the late Anthoine Hubert who lost his life during the 2019 Belgian Grand Prix in the Saturday race in Formula 2.","website":"","subreddit":"r/formula1","center":[510.5,796.5],"path":[[448.5,762.5],[571.5,762.5],[571.5,829.5],[448.5,829.5],[448.5,762.5]]},
{"id":73,"name":"TUHH","description":"The Name and Logo of the Hamburg University of Technology.\n\"Technische Universität Hansestadt Hamburg\"","website":"https://www.tuhh.de","subreddit":"r/TU_HH/","center":[234.5,168.5],"path":[[221.5,165.5],[245.5,165.5],[245.5,171.5],[221.5,171.5],[221.5,165.5]]},
{"id":74,"name":"Ethereum","description":"Ethereum is a block chain powering smart contracts and cryptocurrencies, including ETH itself. \nThis logo was built by a small team of only about 50 people after a smaller version south of the current location was taken over.\nIt has been rebuilt after an attack by the trees below in conjunction with the German flag, and has recently added a prism effect with a laser coming from the Loopring logo, through the ETH crystal, and splitting into a rainbow on the Immutable side.","website":"https://discord.gg/BMCdDHvNm6","subreddit":"","center":[841.5,876.5],"path":[[841.5,856.5],[854.5,877.5],[840.5,896.5],[828.5,878.5]]},
{"id":75,"name":"Destiny","description":"Gaming and politics live streamer Steven Kenneth \"Destiny\" Bonnell II","website":"https://destiny.gg","subreddit":"/r/Destiny","center":[367.5,105.5],"path":[[334.5,78.5],[399.5,78.5],[399.5,131.5],[334.5,131.5]]},
{"id":76,"name":"LTTSTORE.COM","description":"A reference to shoutouts in Linus Tech Tips videos for their own merchandise line available on LTTSTORE.COM.\nSpammers have made repeated attempts to replace two pixels of the O in .COM with orange in order to alter the text to .CUM.","website":"https://www.lttstore.com/","subreddit":"/r/LinusTechTips/","center":[83.5,771.5],"path":[[49.5,766.5],[115.5,765.5],[115.5,777.5],[49.5,776.5]]},
{"id":77,"name":"Löwenzahn","description":"A Dandelion, representing the popular German children's tv show \"Löwenzahn\"","website":"https://en.wikipedia.org/wiki/L%C3%B6wenzahn","subreddit":"","center":[517.5,850.5],"path":[[519.5,865.5],[523.5,865.5],[522.5,864.5],[522.5,863.5],[524.5,863.5],[524.5,864.5],[530.5,863.5],[528.5,861.5],[528.5,858.5],[530.5,858.5],[530.5,859.5],[531.5,859.5],[530.5,859.5],[530.5,858.5],[529.5,858.5],[529.5,856.5],[532.5,856.5],[531.5,856.5],[531.5,855.5],[531.5,854.5],[532.5,854.5],[533.5,853.5],[531.5,853.5],[531.5,851.5],[532.5,851.5],[532.5,850.5],[534.5,850.5],[535.5,849.5],[535.5,848.5],[537.5,846.5],[537.5,845.5],[537.5,846.5],[535.5,848.5],[534.5,848.5],[533.5,849.5],[532.5,849.5],[532.5,847.5],[533.5,847.5],[533.5,846.5],[534.5,846.5],[534.5,845.5],[533.5,844.5],[531.5,844.5],[530.5,845.5],[530.5,846.5],[531.5,847.5],[532.5,847.5],[532.5,849.5],[531.5,849.5],[529.5,851.5],[528.5,853.5],[528.5,854.5],[528.5,855.5],[526.5,855.5],[526.5,856.5],[524.5,856.5],[524.5,851.5],[525.5,851.5],[525.5,850.5],[526.5,850.5],[526.5,849.5],[527.5,849.5],[527.5,844.5],[529.5,844.5],[529.5,845.5],[529.5,844.5],[529.5,843.5],[530.5,843.5],[530.5,842.5],[531.5,842.5],[531.5,841.5],[532.5,841.5],[532.5,840.5],[532.5,839.5],[532.5,841.5],[530.5,841.5],[530.5,843.5],[528.5,843.5],[528.5,839.5],[529.5,839.5],[529.5,838.5],[530.5,838.5],[530.5,837.5],[531.5,837.5],[531.5,835.5],[529.5,834.5],[528.5,833.5],[528.5,834.5],[527.5,834.5],[527.5,835.5],[526.5,835.5],[526.5,836.5],[525.5,836.5],[525.5,837.5],[526.5,837.5],[526.5,838.5],[527.5,838.5],[527.5,840.5],[526.5,840.5],[526.5,843.5],[525.5,843.5],[527.5,843.5],[527.5,847.5],[526.5,847.5],[526.5,849.5],[525.5,849.5],[525.5,851.5],[523.5,851.5],[523.5,850.5],[522.5,850.5],[522.5,848.5],[523.5,848.5],[523.5,845.5],[524.5,845.5],[524.5,844.5],[525.5,844.5],[523.5,844.5],[523.5,843.5],[519.5,843.5],[519.5,841.5],[521.5,841.5],[521.5,840.5],[522.5,840.5],[522.5,839.5],[523.5,839.5],[523.5,836.5],[522.5,836.5],[522.5,834.5],[521.5,834.5],[521.5,833.5],[520.5,832.5],[518.5,832.5],[516.5,834.5],[516.5,836.5],[513.5,836.5],[513.5,834.5],[514.5,834.5],[514.5,833.5],[513.5,832.5],[511.5,832.5],[510.5,833.5],[510.5,834.5],[511.5,835.5],[512.5,836.5],[513.5,837.5],[513.5,839.5],[511.5,839.5],[511.5,838.5],[510.5,837.5],[507.5,837.5],[505.5,839.5],[505.5,841.5],[504.5,841.5],[504.5,844.5],[507.5,847.5],[509.5,847.5],[509.5,851.5],[507.5,851.5],[506.5,852.5],[508.5,852.5],[508.5,854.5],[505.5,857.5],[505.5,859.5],[503.5,859.5],[503.5,860.5],[505.5,860.5],[505.5,861.5],[507.5,861.5],[507.5,862.5],[509.5,862.5],[509.5,863.5],[508.5,864.5],[509.5,863.5],[512.5,863.5],[512.5,865.5]]},
{"id":78,"name":"The Colosseum","description":"A Roman gladiator arena, built in Rome, Italy.","website":"https://en.wikipedia.org/wiki/Colosseum","subreddit":"","center":[822.5,427.5],"path":[[790.5,404.5],[809.5,404.5],[855.5,404.5],[855.5,451.5],[789.5,450.5],[789.5,404.5]]},
{"id":79,"name":"Dante Alighieri","description":"An Italian poem, known for writing \"The Divine Commedy\"","website":"https://en.wikipedia.org/wiki/Dante_Alighieri","subreddit":"","center":[852.5,346.5],"path":[[856.5,372.5],[842.5,372.5],[842.5,324.5],[863.5,324.5],[863.5,360.5],[856.5,360.5],[856.5,371.5]]},
{"id":80,"name":"Poland","description":"Polish flag with dumplings, a bottle of vodka, Pope John Paul II, and the dog from the old Polish cartoon \"Reksio\" drawn on top of it.","website":"","subreddit":"/r/Polska","center":[585.5,359.5],"path":[[481.5,344.5],[689.5,342.5],[688.5,375.5],[480.5,376.5]]},
{"id":81,"name":"Krtek","description":"The protagonist of the infamous Czech cartoon \"Krtek\", literally meaning \"The Mole\".","website":"","subreddit":"","center":[1298.5,190.5],"path":[[1299.5,172.5],[1304.5,173.5],[1307.5,177.5],[1307.5,181.5],[1306.5,185.5],[1307.5,192.5],[1307.5,205.5],[1303.5,205.5],[1298.5,206.5],[1295.5,205.5],[1290.5,205.5],[1286.5,204.5],[1286.5,198.5],[1290.5,189.5],[1291.5,179.5],[1294.5,174.5],[1297.5,173.5]]},
{"id":82,"name":"Kentaro Miura \"Guts\" Tribute","description":"An illustration of Guts, the protagonist of the manga and anime, \"Berserk\". Seen underneath is Guts's famous \"Dragon Slayer\" sword, next to a plaque that reads \"RIP Miura\".\n\nKentaro Miura, the creator of Berserk, died May 6th, 2021. He has since had many tributes across the internet and media alike.","website":"https://en.wikipedia.org/wiki/Kentaro_Miura","subreddit":"r/Berserk","center":[642.5,241.5],"path":[[594.5,202.5],[677.5,202.5],[677.5,214.5],[682.5,219.5],[694.5,219.5],[694.5,274.5],[691.5,277.5],[596.5,277.5],[594.5,275.5]]},
{"id":83,"name":"Karlsruhe Institute of Technology (KIT)","description":"University of Karlsruhe (Germany)","website":"kit.edu","subreddit":"/r/KaIT","center":[796.5,534.5],"path":[[760.5,521.5],[760.5,547.5],[832.5,547.5],[832.5,521.5]]},
{"id":84,"name":"FUCK CARS Parking Lot","description":"Its a parking lot.\n\nAlthough i am too scared to see whats in the subreddit","website":"","subreddit":"r/fuckcars","center":[1020.5,761.5],"path":[[918.5,798.5],[917.5,721.5],[1114.5,721.5],[1114.5,722.5],[1115.5,722.5],[1115.5,723.5],[1115.5,724.5],[1116.5,724.5],[1116.5,725.5],[1117.5,725.5],[1117.5,726.5],[1118.5,726.5],[1119.5,726.5],[1119.5,727.5],[1119.5,728.5],[1120.5,728.5],[1121.5,728.5],[1121.5,729.5],[1122.5,729.5],[1122.5,801.5],[964.5,801.5],[964.5,796.5],[963.5,795.5],[962.5,793.5],[961.5,792.5],[959.5,792.5],[958.5,793.5],[957.5,794.5],[956.5,795.5],[954.5,797.5],[953.5,798.5],[952.5,799.5],[932.5,799.5],[931.5,798.5],[930.5,797.5],[929.5,796.5],[928.5,795.5],[927.5,794.5],[926.5,793.5],[925.5,792.5],[924.5,792.5],[923.5,792.5],[922.5,793.5],[921.5,794.5],[921.5,795.5],[920.5,796.5],[920.5,797.5],[919.5,798.5],[918.5,798.5]]},
{"id":85,"name":"Cave Story","description":"Cave Story, originally released as Dōkutsu Monogatari, is a 2004 Metroidvania platform-adventure game for Microsoft Windows. It was developed over five years by Japanese developer Daisuke \"Pixel\" Amaya in his free time.","website":"https://www.reddit.com/r/cavestory/","subreddit":"r/cavestory","center":[585.5,883.5],"path":[[563.5,866.5],[608.5,866.5],[607.5,901.5],[562.5,900.5]]},
{"id":86,"name":"Blender","description":"Blender Logo. Blender is a free and open-source 3D computer graphics software.","website":"https://www.blender.org/","subreddit":"r/blender","center":[127.5,105.5],"path":[[121.5,103.5],[122.5,102.5],[123.5,102.5],[124.5,100.5],[127.5,99.5],[130.5,102.5],[133.5,105.5],[133.5,107.5],[132.5,108.5],[131.5,109.5],[131.5,110.5],[130.5,111.5],[128.5,111.5],[127.5,110.5],[125.5,109.5],[123.5,108.5],[121.5,107.5],[122.5,105.5],[121.5,104.5],[121.5,102.5]]},
{"id":87,"name":"Catalonia","description":"The flag of Catalonia","website":"","subreddit":"r/Catalunya","center":[715.5,346.5],"path":[[689.5,360.5],[740.5,360.5],[740.5,332.5],[689.5,332.5]]},
{"id":88,"name":"Update TF2","description":"TF2 is seemingly been abandoned by their respective developers","website":"","subreddit":"r/tf2","center":[682.5,53.5],"path":[[657.5,35.5],[707.5,35.5],[707.5,70.5],[657.5,70.5]]},
{"id":89,"name":"Indonesian Flag","description":"Indonesian flag with indonesian archipelago and pinguin pixelart","website":"","subreddit":"r/indonesia","center":[116.5,793.5],"path":[[89.5,781.5],[143.5,781.5],[143.5,804.5],[89.5,804.5]]},
{"id":90,"name":"League of Legends Logo","description":"A logo for League of Legends, with a red filter for its background.","website":"https://www.leagueoflegends.com/en-us/","subreddit":"r/leagueoflegends","center":[731.5,228.5],"path":[[709.5,203.5],[709.5,249.5],[759.5,250.5],[747.5,205.5]]},
{"id":91,"name":"Mexico","description":"Flag of Mexico with a Mayan Pyramid","website":"","subreddit":"r/Mexico","center":[826.5,486.5],"path":[[787.5,521.5],[865.5,521.5],[865.5,451.5],[787.5,451.5]]},
{"id":92,"name":"Lego","description":"Lego logo, next to the flag of Denmark, its country of origin.","website":"","subreddit":"r/Lego","center":[664.5,331.5],"path":[[689.5,342.5],[689.5,320.5],[638.5,320.5],[638.5,342.5]]},
{"id":93,"name":"Northern Cyprus","description":"Flag of Northern Cyprus, officially the Turkish Republic of Northern Cyprus","website":"","subreddit":"","center":[1970.5,54.5],"path":[[1941.5,35.5],[1999.5,35.5],[1999.5,73.5],[1941.5,73.5]]},
{"id":94,"name":"The Great Wave off Kanagawa","description":"The Great Wave off Kanagawa, also known as The Great Wave or The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was created in 1831","website":"","subreddit":"","center":[1960.5,802.5],"path":[[1921.5,829.5],[1999.5,829.5],[1999.5,775.5],[1920.5,775.5]]},
{"id":95,"name":"ENA","description":"ENA is a animated series created by Peruvian animator Joel Guerra. It takes place in a surreal, digital world and stars the eponymous character ENA","website":"","subreddit":"r/ENA","center":[1986.5,752.5],"path":[[1972.5,730.5],[1999.5,730.5],[1999.5,775.5],[1973.5,775.5]]},
{"id":96,"name":"Big Ten West","description":"The original claims of the Big Ten Conference of college universities. Started by Purdue, and joined by Rutgers, Nebraska, Illinois, Iowa, and Penn State.","website":"","subreddit":"r/TheB1G","center":[211.5,605.5],"path":[[256.5,582.5],[256.5,629.5],[174.5,629.5],[174.5,609.5],[151.5,609.5],[154.5,601.5],[161.5,601.5],[166.5,590.5],[161.5,589.5],[163.5,582.5]]},
{"id":97,"name":"Niko from OneShot","description":"The main character \"Niko\" from the indie video game OneShot.","website":"http://www.oneshot-game.com/","subreddit":"/r/oneshot","center":[921.5,264.5],"path":[[911.5,266.5],[911.5,248.5],[933.5,248.5],[933.5,250.5],[932.5,250.5],[932.5,251.5],[931.5,251.5],[931.5,258.5],[930.5,258.5],[930.5,260.5],[932.5,260.5],[932.5,266.5],[931.5,266.5],[931.5,269.5],[929.5,269.5],[929.5,270.5],[928.5,270.5],[928.5,272.5],[932.5,272.5],[932.5,274.5],[931.5,274.5],[931.5,275.5],[930.5,275.5],[930.5,276.5],[928.5,276.5],[928.5,280.5],[927.5,280.5],[927.5,281.5],[926.5,281.5],[926.5,282.5],[925.5,282.5],[924.5,282.5],[924.5,283.5],[918.5,283.5],[918.5,282.5],[916.5,282.5],[916.5,281.5],[915.5,281.5],[915.5,280.5],[914.5,280.5],[914.5,276.5],[913.5,276.5],[913.5,274.5],[911.5,274.5],[911.5,272.5],[914.5,272.5],[914.5,269.5],[912.5,269.5],[912.5,266.5]]},
{"id":98,"name":"/r/196 Mural","description":"The mural created by the shitposting subreddit /r/196","website":"","subreddit":"/r/196","center":[208.5,664.5],"path":[[174.5,629.5],[241.5,629.5],[241.5,698.5],[174.5,698.5]]},
{"id":99,"name":"Lemon Demon","description":"The Lemon Demon logo was designed by u/iforgotmypasswordss, and was part of a joint project between r/lemondemon and r/tallyhall","website":"","subreddit":"r/lemondemon","center":[770.5,414.5],"path":[[754.5,399.5],[754.5,428.5],[786.5,428.5],[786.5,399.5]]},
{"id":100,"name":"The Inkunzi Logo","description":"The Logo for the nation rp Inkunzi, a geopolitical Nation RP on a fantasy planet. Made by CalmDownLevelUp","website":"https://www.youtube.com/watch?v=gLXxk7ZsrDM","subreddit":"r/CalmDownLevelUp","center":[1840.5,811.5],"path":[[1845.5,806.5],[1845.5,815.5],[1835.5,815.5],[1835.5,806.5]]},
{"id":101,"name":"A Practical Guide To Evil by ErraticErrata - Do Wrong Right","description":"A Practical Guide to Evil is a YA fantasy novel about a young girl named Catherine Foundling making her way through the world – though, in a departure from the norm, not on the side of the heroes. Is there such a thing as doing bad things for good reasons, or is she just rationalizing her desire for control? Good and Evil are tricky concepts, and the more power you get the blurrier the lines between them become.","website":"http://practicalguidetoevil.wordpress.com/","subreddit":"/r/practicalguidetoevil","center":[947.5,531.5],"path":[[959.5,520.5],[959.5,541.5],[935.5,541.5],[935.5,520.5],[959.5,520.5]]},
{"id":102,"name":"HasanAbi Logo","description":"Twitch streamer Hasan Piker's logo/icon","website":"twitch.tv/HasanAbi","subreddit":"r/Hasan_Piker","center":[1799.5,484.5],"path":[[1849.5,429.5],[1749.5,429.5],[1749.5,539.5],[1850.5,539.5],[1849.5,539.5],[1849.5,429.5]]},
{"id":103,"name":"The Ohio State University","description":"The Ohio State University (OSU) is located in Columbus, Ohio, USA. OSU's school colors are scarlet and gray which can be seen around their famous Block O - located towards the bottom left of the artwork. The Block \"O\" together with the Buckeye nut is the logo for The Ohio State University. OSU (not to be confused with the rhythm game \"osu!\") is famous for it's rivalry with the University of Michigan with the 15-2 representing the current streak of 15 wins against UofM's 2. The Ohio flag is on the top right, representing the state of Ohio, USA. The bottom right has the famous \"Script Ohio\" - a long-time Ohio State tradition from the school's Marching Band where members of the band will form the word \"Ohio\" in script during football games. A second block \"O\" is situated next to Purdue University & Rutgers University elsewhere on r/place.","website":"https://www.osu.edu","subreddit":"r/osu","center":[1347.5,813.5],"path":[[1331.5,795.5],[1331.5,830.5],[1363.5,831.5],[1363.5,795.5],[1363.5,795.5],[1363.5,795.5]]},
{"id":104,"name":"One Piece","description":"Anime","website":"","subreddit":"r/OnePiece","center":[354.5,571.5],"path":[[330.5,528.5],[378.5,528.5],[377.5,614.5],[330.5,614.5],[330.5,614.5]]},
{"id":105,"name":"PotatoMcWhiskey","description":"The logo of Civ VI streamer PotatoMcWhiskey","website":"https://www.youtube.com/user/PotatoMcWhiskey/","subreddit":"/r/PotatoMcWhiskey","center":[1516.5,81.5],"path":[[1494.5,96.5],[1518.5,98.5],[1521.5,107.5],[1535.5,89.5],[1534.5,60.5],[1507.5,61.5],[1508.5,71.5],[1500.5,72.5],[1494.5,62.5]]},
{"id":106,"name":"Operation Gooseflight","description":"Splinter from r/canada to escape the meme of messing with the flag.","website":"","subreddit":"r/canada","center":[1816.5,908.5],"path":[[1829.5,880.5],[1829.5,934.5],[1794.5,934.5],[1793.5,931.5],[1808.5,916.5],[1808.5,912.5],[1806.5,912.5],[1806.5,879.5],[1829.5,879.5]]},
{"id":107,"name":"Critical Role","description":"Emblem of the actual-play Dungeons and Dragons series","website":"https://critrole.com/","subreddit":"r/CriticalRole","center":[526.5,977.5],"path":[[513.5,963.5],[538.5,963.5],[538.5,991.5],[513.5,991.5]]},
{"id":108,"name":"Palico","description":"An iconic character from the popular game series, Monster Hunter","website":"","subreddit":"r/MonsterHunter","center":[761.5,621.5],"path":[[748.5,608.5],[748.5,635.5],[769.5,635.5],[776.5,620.5],[776.5,608.5]]},
{"id":109,"name":"Portugal","description":"The flag of Portugal and depictions of portuguese poet Luís de Camões, Pena National Palace, celebrity Fernando Mendes, statue of Afonso Henriques (1st King of Portugal), Bridge 25th of April, and finally, a Caravel. ","website":"","subreddit":"/r/portugal","center":[984.5,336.5],"path":[[865.5,308.5],[865.5,360.5],[856.5,360.5],[856.5,371.5],[922.5,370.5],[923.5,367.5],[960.5,367.5],[960.5,360.5],[1099.5,360.5],[1109.5,352.5],[1121.5,347.5],[1121.5,325.5],[1113.5,325.5],[1113.5,313.5],[1113.5,308.5],[865.5,308.5]]},
{"id":110, "name": "Trans Pride Flag", "description": "The Trans Pride Flag, emblazoned with a variety of pixel arts.", "website": "", "subreddit": "r/transplace", "center": [ 634.5, 453.5 ], "path": [ [ 481.5, 430.5 ], [ 786.5, 430.5 ], [ 786.5, 476.5 ], [ 481.5, 475.5 ] ] }, 
{"id":111, "name": "Connection Lost", "description": "The \"Connection lost... Please wait - attempting to reestablish.\" message originates from RuneScape, the popular free MMORPG", "website": "", "subreddit": "", "center": [ 116.5, 17.5 ], "path": [ [ 0.5, 0.5 ], [ 231.5, 0.5 ], [ 231.5, 33.5 ], [ 0.5, 33.5 ] ] }, 
{"id":112, "name": "Froggy Chair", "description": "The Froggy Chair, from the Nintendo game Animal Crossing.", "website": "", "subreddit": "", "center": [ 61.5, 125.5 ], "path": [ [ 54.5, 115.5 ], [ 66.5, 113.5 ], [ 67.5, 121.5 ], [ 70.5, 125.5 ], [ 71.5, 133.5 ], [ 70.5, 134.5 ], [ 67.5, 134.5 ], [ 66.5, 131.5 ], [ 62.5, 131.5 ], [ 62.5, 136.5 ], [ 57.5, 136.5 ], [ 57.5, 133.5 ], [ 53.5, 133.5 ], [ 53.5, 126.5 ], [ 54.5, 125.5 ], [ 54.5, 115.5 ] ] }, 
{"id":113, "name": "The Welsh Flag", "description": "The Welsh Flag, featuring the Dragon of Cadwaladr", "website": "", "subreddit": "", "center": [ 100.5, 132.5 ], "path": [ [ 128.5, 147.5 ], [ 128.5, 118.5 ], [ 67.5, 118.5 ], [ 68.5, 120.5 ], [ 71.5, 124.5 ], [ 72.5, 133.5 ], [ 71.5, 134.5 ], [ 70.5, 135.5 ], [ 66.5, 135.5 ], [ 65.5, 132.5 ], [ 63.5, 132.5 ], [ 62.5, 136.5 ], [ 75.5, 136.5 ], [ 75.5, 146.5 ], [ 128.5, 147.5 ] ] }, 
{"id":114, "name": "Radiohead Crying Minotaur", "description": "The Crying Minotaur, from the cover of Radiohead's 2001 album \"Amnesiac\"", "website": "", "subreddit": "/r/radiohead", "center": [ 102.5, 554.5 ], "path": [ [ 79.5, 530.5 ], [ 124.5, 530.5 ], [ 124.5, 578.5 ], [ 79.5, 578.5 ], [ 79.5, 530.5 ] ] }, 
{"id":115, "name": "DFTBA", "description": "Don't Forget To Be Awesome (DFTBA), the catchphrase of YouTuber duo Vlogbrothers, and their community Nerdfightaria, held aloft by Crank the Crab.", "website": "https://nerdfighteria.com", "subreddit": "/r/nerdfighters", "center": [ 148.5, 703.5 ], "path": [ [ 135.5, 695.5 ], [ 162.5, 695.5 ], [ 164.5, 697.5 ], [ 164.5, 705.5 ], [ 162.5, 707.5 ], [ 155.5, 707.5 ], [ 152.5, 711.5 ], [ 154.5, 713.5 ], [ 154.5, 714.5 ], [ 143.5, 714.5 ], [ 143.5, 713.5 ], [ 145.5, 711.5 ], [ 143.5, 709.5 ], [ 142.5, 708.5 ], [ 142.5, 707.5 ], [ 135.5, 707.5 ], [ 133.5, 705.5 ], [ 133.5, 697.5 ], [ 135.5, 695.5 ] ] }, 
{"id":116, "name": "Pizza John", "description": "Pizza John, the logo/meme surrounding Pizzamas, an annual celebration by the Green Brothers (Vlogbrothers)", "website": "https://pizzamas.com/pages/what-is-this", "subreddit": "/r/nerdfighters", "center": [ 1378.5, 804.5 ], "path": [ [ 1364.5, 779.5 ], [ 1391.5, 779.5 ], [ 1391.5, 829.5 ], [ 1364.5, 829.5 ], [ 1364.5, 779.5 ] ] }, 
{"id":117, "name": "e621 Logo", "description": "The logo of the mature imageboard e621.net. WARNING: WEBSITE CONTAINS NSFW IMAGES", "website": "", "subreddit": "", "center": [ 1616.5, 622.5 ], "path": [ [ 1604.5, 610.5 ], [ 1630.5, 610.5 ], [ 1630.5, 619.5 ], [ 1627.5, 619.5 ], [ 1627.5, 635.5 ], [ 1604.5, 635.5 ], [ 1604.5, 610.5 ] ] }, 
{"id":118, "name": "Bad Dragon Logo", "description": "The logo of Bad Dragon, a manufacturer of fantasy adult toys. WARNING: WEBSITE CONTAINS NSFW CONTENT.", "website": "", "subreddit": "", "center": [ 1595.5, 628.5 ], "path": [ [ 1587.5, 620.5 ], [ 1602.5, 620.5 ], [ 1602.5, 635.5 ], [ 1587.5, 635.5 ], [ 1587.5, 620.5 ] ] }, 
{"id":119, "name": "r/Furry_IRL", "description": "The logo of the r/Furry_IRL subreddit, dedicated to furry memes.", "website": "", "subreddit": "/r/furry_irl", "center": [ 912.5, 92.5 ], "path": [ [ 894.5, 70.5 ], [ 929.5, 70.5 ], [ 929.5, 114.5 ], [ 894.5, 114.5 ], [ 894.5, 70.5 ] ] }, 
{"id":120, "name": "Greggs", "description": "The logo of Greggs, the British fast-food bakery chain.", "website": "", "subreddit": "", "center": [ 727.5, 479.5 ], "path": [ [ 702.5, 477.5 ], [ 752.5, 477.5 ], [ 752.5, 481.5 ], [ 702.5, 481.5 ], [ 702.5, 477.5 ] ] },
{"id":121, "name": "Peppy", "description": "A Pixel art image of Peppy, the creator of Osu!", "website": "https://osu.ppy.sh/", "subreddit": "/r/osugame/", "center": [ 1726.5, 736.5 ], "path": [ [ 1726.5, 672.5 ], [ 1751.5, 693.5 ], [ 1751.5, 707.5 ], [ 1743.5, 718.5 ], [ 1755.5, 726.5 ], [ 1756.5, 731.5 ], [ 1760.5, 738.5 ], [ 1760.5, 747.5 ], [ 1763.5, 753.5 ], [ 1762.5, 766.5 ], [ 1762.5, 773.5 ], [ 1756.5, 779.5 ], [ 1748.5, 779.5 ], [ 1747.5, 780.5 ], [ 1702.5, 780.5 ], [ 1701.5, 781.5 ], [ 1700.5, 781.5 ], [ 1700.5, 776.5 ], [ 1699.5, 774.5 ], [ 1697.5, 773.5 ], [ 1693.5, 773.5 ], [ 1693.5, 771.5 ], [ 1692.5, 769.5 ], [ 1691.5, 766.5 ], [ 1690.5, 763.5 ], [ 1690.5, 756.5 ], [ 1689.5, 755.5 ], [ 1689.5, 745.5 ], [ 1690.5, 744.5 ], [ 1690.5, 739.5 ], [ 1691.5, 738.5 ], [ 1691.5, 734.5 ], [ 1692.5, 730.5 ], [ 1694.5, 729.5 ], [ 1694.5, 727.5 ], [ 1695.5, 725.5 ], [ 1699.5, 721.5 ], [ 1701.5, 721.5 ], [ 1703.5, 720.5 ], [ 1706.5, 719.5 ], [ 1707.5, 718.5 ], [ 1708.5, 717.5 ], [ 1708.5, 716.5 ], [ 1707.5, 715.5 ], [ 1707.5, 712.5 ], [ 1706.5, 711.5 ], [ 1706.5, 709.5 ], [ 1705.5, 708.5 ], [ 1704.5, 707.5 ], [ 1703.5, 707.5 ], [ 1703.5, 700.5 ], [ 1704.5, 698.5 ], [ 1704.5, 695.5 ], [ 1707.5, 695.5 ], [ 1708.5, 694.5 ], [ 1708.5, 691.5 ], [ 1710.5, 691.5 ], [ 1710.5, 689.5 ], [ 1710.5, 685.5 ], [ 1726.5, 672.5 ] ] },
{"id":122, "name": "Girl with a Pearl Earring", "description": "Pixel art of the Girl with a Pearl Earring, by Johannes Vermeer", "website": "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring", "subreddit": "", "center": [ 907.5, 34.5 ], "path": [ [ 928.5, 0.5 ], [ 928.5, 68.5 ], [ 886.5, 68.5 ], [ 886.5, 0.5 ], [ 928.5, 0.5 ] ] },
{"id": 123, "submitted_by": "Kenjidono_", "name": "Palestanian Flag", "description": "This is the current Flag of Palestine.", "website": "", "subreddit": "/r/Palestine", "center": [44.5, 660.5], "path": [[20.5, 643.5], [20.5, 678.5], [68.5, 678.5], [69.5, 643.5], [20.5, 643.5], [20.5, 678.5]]},
{"id": 124, "submitted_by": "Inzaniity", "name": "German Fast-Train (ICE)", "description": "The German fast train ICE (Inter-City-Express) with bad network reception. It is known for having really bad network reception while travelling with Deutsche Bahn.", "website": "", "subreddit": "", "center": [349.5, 858.5], "path": [[373.5, 849.5], [373.5, 867.5], [325.5, 867.5], [325.5, 863.5], [326.5, 859.5], [331.5, 854.5], [324.5, 853.5], [324.5, 851.5], [323.5, 850.5], [323.5, 844.5], [327.5, 844.5], [327.5, 846.5], [328.5, 847.5], [329.5, 846.5], [331.5, 846.5], [331.5, 854.5], [333.5, 854.5], [335.5, 852.5], [337.5, 852.5], [344.5, 849.5], [373.5, 849.5]]},
{"id": 125, "submitted_by": "MaulPaul", "name": "End of speedlimit", "description": "German road sign used on the Autobahn(German Highway) to indicate the end of all speed and passing limits", "website": "", "subreddit": "r/placeDE", "center": [572.5, 852.5], "path": [[570.5, 846.5], [574.5, 846.5], [578.5, 850.5], [578.5, 855.5], [574.5, 858.5], [570.5, 858.5], [566.5, 854.5], [566.5, 850.5], [570.5, 846.5], [572.5, 856.5], [572.5, 865.5], [572.5, 856.5], [571.5, 849.5]]},
{"id": 126, "submitted_by": "Inzaniity", "name": "arte", "description": "Arte is a European public service channel that promotes cultural programming. It's a coorporation between French and German broadcasting companies.", "website": "https://www.arte.tv/en/", "subreddit": "", "center": [1163.5, 849.5], "path": [[1200.5, 830.5], [1200.5, 868.5], [1126.5, 868.5], [1126.5, 829.5], [1200.5, 830.5]]},
{"id": 127, "submitted_by": "Woocami", "name": "Die Sendung mit der Maus", "description": "Die Sendung mit der Maus (The Show with the Mouse) is a German children's television series, popular nation-wide for its educational content.", "website": "[https://www.wdrmaus.de/](https://www.wdrmaus.de/)", "subreddit": "/r/placede", "center": [82.5, 853.5], "path": [[61.5, 865.5], [56.5, 865.5], [53.5, 862.5], [51.5, 862.5], [48.5, 859.5], [48.5, 858.5], [49.5, 858.5], [49.5, 857.5], [50.5, 857.5], [50.5, 858.5], [52.5, 858.5], [52.5, 857.5], [53.5, 857.5], [54.5, 858.5], [54.5, 860.5], [53.5, 861.5], [55.5, 863.5], [56.5, 864.5], [61.5, 864.5], [62.5, 864.5], [62.5, 863.5], [63.5, 863.5], [63.5, 861.5], [64.5, 861.5], [64.5, 859.5], [63.5, 860.5], [60.5, 856.5], [60.5, 853.5], [61.5, 852.5], [61.5, 851.5], [62.5, 850.5], [65.5, 850.5], [65.5, 849.5], [66.5, 848.5], [68.5, 848.5], [69.5, 847.5], [70.5, 847.5], [71.5, 848.5], [71.5, 849.5], [73.5, 849.5], [74.5, 850.5], [76.5, 848.5], [76.5, 847.5], [77.5, 846.5], [77.5, 843.5], [76.5, 843.5], [76.5, 839.5], [77.5, 839.5], [77.5, 838.5], [76.5, 838.5], [74.5, 836.5], [76.5, 834.5], [78.5, 834.5], [78.5, 832.5], [82.5, 832.5], [82.5, 835.5], [85.5, 835.5], [85.5, 836.5], [87.5, 836.5], [87.5, 837.5], [88.5, 838.5], [89.5, 838.5], [90.5, 839.5], [91.5, 839.5], [92.5, 840.5], [92.5, 841.5], [91.5, 842.5], [94.5, 842.5], [94.5, 840.5], [96.5, 840.5], [97.5, 841.5], [97.5, 839.5], [98.5, 839.5], [100.5, 841.5], [100.5, 842.5], [102.5, 844.5], [102.5, 848.5], [101.5, 849.5], [101.5, 850.5], [100.5, 851.5], [99.5, 851.5], [99.5, 854.5], [102.5, 854.5], [103.5, 853.5], [104.5, 853.5], [105.5, 852.5], [106.5, 853.5], [107.5, 854.5], [104.5, 857.5], [104.5, 858.5], [105.5, 859.5], [105.5, 862.5], [101.5, 862.5], [101.5, 864.5], [103.5, 866.5], [103.5, 867.5], [99.5, 867.5], [98.5, 866.5], [99.5, 865.5], [99.5, 862.5], [97.5, 862.5], [97.5, 865.5], [95.5, 867.5], [94.5, 867.5], [93.5, 866.5], [92.5, 866.5], [92.5, 865.5], [93.5, 864.5], [95.5, 864.5], [95.5, 863.5], [94.5, 862.5], [94.5, 861.5], [92.5, 859.5], [92.5, 856.5], [91.5, 856.5], [89.5, 858.5], [89.5, 861.5], [88.5, 862.5], [88.5, 863.5], [89.5, 864.5], [89.5, 866.5], [86.5, 866.5], [86.5, 859.5], [83.5, 859.5], [83.5, 866.5], [74.5, 866.5], [73.5, 867.5], [69.5, 867.5], [68.5, 866.5], [67.5, 866.5], [66.5, 867.5], [64.5, 867.5], [63.5, 866.5], [62.5, 865.5]]},
{"id": 128, "submitted_by": "red__flag_", "name": "European Union Flag with a peace dove", "description": "The flag of the European Union with a peace dove. The same flag was also in r/place 2017.", "website": "[https://discord.gg/uxm3wbrHke](https://discord.gg/uxm3wbrHke)", "subreddit": "r/PlaceEU", "center": [403.5, 848.5], "path": [[373.5, 829.5], [433.5, 829.5], [433.5, 867.5], [373.5, 867.5], [373.5, 867.5]]},
{"id": 129, "submitted_by": "Yuzumi_", "name": "Bernd das Brot with a beer", "description": "Bernd das Brot is a puppet character, star mascot and cult figure of the German children's television channel KI.KA.", "website": "https://en.wikipedia.org/wiki/Bernd_das_Brot", "subreddit": "", "center": [205.5, 855.5], "path": [[204.5, 846.5], [188.5, 860.5], [213.5, 874.5], [215.5, 833.5], [190.5, 831.5], [189.5, 832.5], [187.5, 832.5], [186.5, 851.5], [183.5, 851.5], [181.5, 849.5], [179.5, 849.5], [177.5, 851.5], [178.5, 852.5], [178.5, 853.5], [176.5, 855.5], [170.5, 857.5], [170.5, 860.5], [172.5, 861.5], [174.5, 860.5], [170.5, 864.5], [171.5, 867.5], [174.5, 867.5], [176.5, 867.5], [177.5, 869.5], [179.5, 869.5], [181.5, 866.5], [184.5, 863.5], [186.5, 863.5], [186.5, 873.5], [213.5, 874.5], [214.5, 862.5], [218.5, 862.5], [220.5, 864.5], [223.5, 866.5], [226.5, 867.5], [229.5, 869.5], [234.5, 869.5], [238.5, 865.5], [242.5, 868.5], [242.5, 863.5], [244.5, 858.5], [244.5, 853.5], [239.5, 847.5], [234.5, 845.5], [231.5, 846.5], [229.5, 848.5], [227.5, 849.5], [224.5, 850.5], [222.5, 849.5], [222.5, 851.5], [219.5, 852.5], [218.5, 853.5], [214.5, 851.5], [214.5, 850.5], [214.5, 850.5], [215.5, 851.5]]},
{"id": 130, "submitted_by": "Jm8alt3", "name": "Pochita", "description": "Pochita is a character from the manga Chansaw Man.", "website": "", "subreddit": "r/ChainsawMan", "center": [212.5, 791.5], "path": [[198.5, 779.5], [204.5, 779.5], [207.5, 782.5], [207.5, 783.5], [215.5, 783.5], [215.5, 782.5], [216.5, 782.5], [216.5, 781.5], [219.5, 781.5], [223.5, 785.5], [224.5, 786.5], [224.5, 789.5], [222.5, 791.5], [223.5, 792.5], [223.5, 793.5], [225.5, 793.5], [225.5, 799.5], [224.5, 799.5], [224.5, 800.5], [222.5, 800.5], [222.5, 802.5], [219.5, 802.5], [219.5, 803.5], [215.5, 803.5], [215.5, 801.5], [212.5, 801.5], [212.5, 802.5], [206.5, 802.5], [206.5, 800.5], [208.5, 798.5], [205.5, 798.5], [202.5, 795.5], [202.5, 789.5], [201.5, 789.5], [199.5, 787.5], [198.5, 786.5], [198.5, 784.5], [197.5, 784.5], [197.5, 780.5], [198.5, 779.5]]},
{"id": 131, "submitted_by": "linwji", "name": "Neopets", "description": "A virtual pet game that peaked in popularity the 1990s ", "website": "https://www.neopets.com/", "subreddit": "/r/neopets", "center": [331.5, 722.5], "path": [[310.5, 702.5], [311.5, 742.5], [351.5, 742.5], [351.5, 702.5]]},
{"id": 132, "submitted_by": "linwji", "name": "Bangladesh (country)", "description": "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common.", "website": "", "subreddit": "/r/bangladesh", "center": [305.5, 985.5], "path": [[287.5, 978.5], [323.5, 978.5], [323.5, 992.5], [283.5, 992.5], [288.5, 991.5]]},
{"id": 133, "submitted_by": "linwji", "name": "Singapore", "description": "Small Island Country with a 5.5M population with high degree with development", "website": "https://www.visitsingapore.com/", "subreddit": "/r/singapore", "center": [306.5, 966.5], "path": [[286.5, 956.5], [326.5, 958.5], [326.5, 976.5], [288.5, 976.5]]},
{"id": 134, "submitted_by": "linwji", "name": "Google Chrome Dino", "description": "This dino game appears when Chrome browser is offline", "website": "https://chromedino.com/", "subreddit": "", "center": [323.5, 793.5], "path": [[342.5, 779.5], [304.5, 779.5], [302.5, 807.5], [342.5, 808.5]]},
{"id": 135, "submitted_by": "linwji", "name": "Malaysia (country)", "description": "Lovely country in South-East Asia with a 30M population", "website": "", "subreddit": "/r/malaysia", "center": [358.5, 974.5], "path": [[394.5, 962.5], [325.5, 960.5], [324.5, 988.5], [392.5, 988.5]]},
{"id": 136, "submitted_by": "linwji", "name": "Gear in Factorio Video Game", "description": "One of the most important component pieces in Factorio game to craft machines to grow the factory", "website": "https://factorio.com/", "subreddit": "/r/factorio", "center": [1598.5, 563.5], "path": [[1574.5, 548.5], [1621.5, 548.5], [1622.5, 578.5], [1573.5, 578.5]]},
{"id": 137, "submitted_by": "linwji", "name": "BTS Young Forever Album Cover", "description": "Korea's hottest boyband's album cover featured a colourful hot-air balloon", "website": "https://www.youtube.com/watch?v=7m-4u4GONsA&ab_channel=BangtanSubs", "subreddit": "/r/bangtan", "center": [1971.5, 217.5], "path": [[1999.5, 195.5], [1944.5, 196.5], [1942.5, 239.5], [1998.5, 238.5]]},
{"id": 138, "submitted_by": "linwji", "name": "Aang, the last Avatar (cartoon)", "description": "The world is divided into four nations -- the Water Tribe, the Earth Kingdom, the Fire Nation and and the Air Nomads -- each represented by a natural element for which the nation is named. Benders have the ability to control and manipulate the element from their nation. Only the Avatar is the master of all four elements and Aang conquers them all!! ", "website": "http://www.nick.co.uk/shows/avatar/q03fvj", "subreddit": "", "center": [289.5, 947.5], "path": [[281.5, 938.5], [296.5, 938.5], [297.5, 957.5], [282.5, 956.5]]},
{"id": 139, "submitted_by": "linwji", "name": "Sailor Moon", "description": "A popular Japanese Anime in the 1990s where a group of girls with superpowers triumph over evil", "website": "", "subreddit": "/r/sailormoon", "center": [379.5, 974.5], "path": [[364.5, 961.5], [366.5, 986.5], [395.5, 986.5], [391.5, 962.5]]},
{"id": 140, "submitted_by": "bafimet", "name": "Ghost", "description": "'Grucifix' symbol for the Swedish metal band Ghost.", "website": "", "subreddit": "r/GhostBC", "center": [1308.5, 60.5], "path": [[1300.5, 49.5], [1318.5, 49.5], [1316.5, 72.5], [1299.5, 72.5], [1299.5, 71.5], [1299.5, 49.5]]},
{"id": 141, "submitted_by": "linwji", "name": "Factorio (video game)", "description": "One of the most popular factory simulation games with a strong community of over 2.5million players", "website": "https://factorio.com", "subreddit": "/r/factorio", "center": [291.5, 557.5], "path": [[252.5, 548.5], [252.5, 567.5], [329.5, 567.5], [330.5, 548.5]]},
{"id": 142, "submitted_by": "JCx64", "name": "Giralda Tower", "description": "A moorish & christian tower from Seville, one of the most iconic monuments from Spain.", "website": "https://en.wikipedia.org/wiki/Giralda", "subreddit": "/r/Spain", "center": [1335.5, 300.5], "path": [[1335.5, 287.5], [1335.5, 289.5], [1336.5, 289.5], [1336.5, 296.5], [1338.5, 296.5], [1338.5, 295.5], [1338.5, 304.5], [1339.5, 304.5], [1339.5, 307.5], [1332.5, 307.5], [1332.5, 295.5], [1332.5, 296.5], [1333.5, 296.5], [1334.5, 296.5], [1334.5, 289.5], [1335.5, 289.5], [1335.5, 287.5]]},
{"id": 143, "submitted_by": "morganisboring", "name": "Taylor Swift tribute", "description": "A tribute to singer-songerwriter Taylor Swift. The 13 represents her lucky number, which is particularly referenced in the art she creates. Her initials are below, and the whole is surrounded by a border of colours representing her 9 studio albums (as of r/place 2). A special thank you to r/Lego, whom we have mutually defended.", "website": "", "subreddit": "/r/taylorswift", "center": [650.5, 307.5], "path": [[638.5, 294.5], [659.5, 294.5], [660.5, 295.5], [663.5, 295.5], [663.5, 320.5], [638.5, 320.5], [638.5, 294.5]]},
{"id": 144, "submitted_by": "greese1", "name": "Fish Cult tank 2", "description": "a team of people dedicated to making fish on r/place", "website": "", "subreddit": "r/PlaceFishCult", "center": [1435.5, 920.5], "path": [[1431.5, 935.5], [1429.5, 935.5], [1429.5, 934.5], [1428.5, 934.5], [1427.5, 933.5], [1426.5, 932.5], [1426.5, 931.5], [1426.5, 931.5], [1425.5, 931.5], [1425.5, 930.5], [1423.5, 930.5], [1421.5, 930.5], [1421.5, 907.5], [1421.5, 906.5], [1450.5, 906.5], [1449.5, 930.5], [1446.5, 930.5], [1446.5, 931.5], [1445.5, 932.5], [1445.5, 931.5], [1444.5, 933.5], [1443.5, 934.5], [1442.5, 934.5], [1442.5, 935.5]]},
{"id": 145, "submitted_by": "greese1", "name": "Fish Cult tank 1", "description": "a team of people dedicated to making fish on [r/place](https://www.reddit.com/r/place/)", "website": "", "subreddit": "r/PlaceFishCult", "center": [473.5, 898.5], "path": [[448.5, 890.5], [448.5, 914.5], [453.5, 914.5], [453.5, 906.5], [454.5, 906.5], [454.5, 905.5], [499.5, 905.5], [499.5, 904.5], [500.5, 904.5], [500.5, 890.5], [448.5, 890.5]]},
{"id": 146, "submitted_by": "abcMarcus", "name": "Hong Kong Flag", "description": "A Hong Kong Flag and slogon and yellow umbrella symbol used in protest against the Chinese Communist Party.", "website": "", "subreddit": "/r/HongKong", "center": [634.5, 674.5], "path": [[600.5, 650.5], [600.5, 698.5], [668.5, 699.5], [668.5, 650.5]]},
{"id": 147, "submitted_by": "morganisboring", "name": "Lover - Taylor Swift Album", "description": "The Lover logo inspired by Taylor Swift's 2019 studio album.", "website": "", "subreddit": "r/taylorswift", "center": [1824.5, 106.5], "path": [[1809.5, 98.5], [1837.5, 98.5], [1837.5, 129.5], [1832.5, 129.5], [1835.5, 126.5], [1835.5, 124.5], [1836.5, 123.5], [1836.5, 116.5], [1830.5, 110.5], [1829.5, 110.5], [1828.5, 109.5], [1820.5, 109.5], [1819.5, 110.5], [1817.5, 110.5], [1815.5, 112.5], [1814.5, 112.5], [1810.5, 116.5], [1810.5, 117.5], [1809.5, 117.5], [1809.5, 98.5]]},
{"id": 148, "submitted_by": "jasonycw", "name": "Palico", "description": "An iconic character from the popular game series, Monster Hunter", "website": "", "subreddit": "r/MonsterHunter", "center": [761.5, 621.5], "path": [[748.5, 608.5], [748.5, 635.5], [769.5, 635.5], [776.5, 620.5], [776.5, 608.5]]},
{"id": 149, "submitted_by": "pixelsimulation", "name": "Art Heaven", "description": "Art Heaven is an art community started on discord. This is an image of our mascot, Abby!", "website": "", "subreddit": "r/artheaven", "center": [652.5, 640.5], "path": [[661.5, 632.5], [661.5, 647.5], [642.5, 647.5], [642.5, 632.5]]},
{"id": 150, "submitted_by": "ljcool2006", "name": "Hawaii: Part II", "description": "An album by Miracle Musical, a music project made by members of Tally Hall", "website": "https://www.hawaiipartii.com/", "subreddit": "/r/tallyhall", "center": [1507.5, 191.5], "path": [[1495.5, 180.5], [1518.5, 180.5], [1518.5, 201.5], [1495.5, 201.5]]},
{"id": 151, "submitted_by": "F-L-A-R-E", "name": "Karlsruhe Institute of Technology (KIT)", "description": "University of Karlsruhe (Germany)", "website": "kit.edu", "subreddit": "/r/KaIT", "center": [796.5, 534.5], "path": [[760.5, 521.5], [760.5, 547.5], [832.5, 547.5], [832.5, 521.5]]},
{"id": 152, "submitted_by": "Powaza", "name": "Chick (Powi)", "description": "The Chick from the MEA (Middle Eastern Alliance). Idea from 'Powi Club's Discord server and other helpers.", "website": "https://discord.gg/EyNsdbU", "subreddit": "/r/PowiTeam", "center": [ 1777.5, 949.5 ], "path": [ [ 1784.5, 940.5 ], [ 1773.5, 940.5 ], [ 1773.5, 946.5 ], [ 1768.5, 947.5 ], [ 1768.5, 957.5 ], [ 1784.5, 957.5 ], [ 1784.5, 952.5 ] ] },
{"id": 153, "submitted_by": "horsewhips", "name": "The Ohio State University", "description": "The Ohio State University (OSU) is located in Columbus, Ohio, USA.  OSU's school colors are scarlet and gray which can be seen around their famous Block O - located towards the bottom left of the artwork.  The Block 'O' together with the Buckeye nut is the logo for The Ohio State University. OSU (not to be confused with the rhythm game 'osu!') is famous for it's rivalry with the University of Michigan with the 15-2 representing the current streak of 15 wins against UofM's 2. The Ohio flag is on the top right, representing the state of Ohio, USA. The bottom right has the famous 'Script Ohio' - a long-time Ohio State tradition from the school's Marching Band where members of the band will form the word 'Ohio' in script during football games. A second block 'O' is situated next to Purdue University & Rutgers University elsewhere on r/place.", "website": "[https://www.osu.edu](https://www.osu.edu)", "subreddit": "r/osu", "center": [ 1347.5, 813.5 ], "path": [ [ 1331.5, 795.5 ], [ 1331.5, 830.5 ], [ 1363.5, 831.5 ], [ 1363.5, 795.5 ], [ 1363.5, 795.5 ], [ 1363.5, 795.5 ] ] },
{"id":154,"name":"EVE Online","description":"The logo for Eve Online, an economy-based space MMORPG.","website":"eveonline.com","subreddit":"r/Eve","center":[38.5,44.5],"path":[[13.5,34.5],[62.5,34.5],[62.5,53.5],[13.5,53.5]]},
{"id":155,"name":"o7","description":"An emoticon depicting a person saluting.","website":"","subreddit":"","center":[7.5,46.5],"path":[[12.5,35.5],[12.5,53.5],[0.5,53.5],[0.5,46.5],[12.5,35.5]]},
{"id":156,"name":"SS13 clown","description":"The clown, a playable character in the game Space Station 13.","website":"spacestation13.com","subreddit":"r/SS13","center":[70.5,103.5],"path":[[61.5,91.5],[79.5,91.5],[79.5,116.5],[68.5,116.5],[68.5,111.5],[61.5,111.5]]},
{"id":157,"name":"Dota 2","description":"The logo for Dota 2, a MOBA developed by Valve.","website":"dota2.com","subreddit":"r/DotA2","center":[14.5,160.5],"path":[[0.5,143.5],[27.5,143.5],[27.5,177.5],[0.5,177.5]]},
{"id":159,"name":"Flag of Egypt","description":"","website":"","subreddit":"r/Egypt","center":[66.5,156.5],"path":[[28.5,144.5],[28.5,169.5],[108.5,169.5],[108.5,148.5],[74.5,148.5],[74.5,138.5],[52.5,138.5],[47.5,144.5],[28.5,144.5]]},
{"id":160,"name":"Pyramids of Giza","description":"","website":"","subreddit":"","center":[66.5,157.5],"path":[[52.5,160.5],[80.5,160.5],[74.5,154.5],[72.5,155.5],[68.5,152.5],[66.5,154.5],[62.5,150.5]]},
{"id":161,"name":"Homestuck","description":"A webcomic by Andrew Hussie that ran from 2009 to 2016.","website":"homestuck.com","subreddit":"r/homestuck","center":[248.5,145.5],"path":[[221.5,126.5],[266.5,126.5],[275.5,135.5],[275.5,164.5],[221.5,164.5]]},
{"id":162,"name":"Hiveswap","description":"An adventure game set in the same multiverse as Homestuck.","website":"hiveswap.com","subreddit":"r/hiveswap","center":[262.5,168.5],"path":[[247.5,165.5],[247.5,171.5],[276.5,171.5],[276.5,165.5]]},
{"id":163,"name":"Flag of Taiwan","description":"","website":"","subreddit":"","center":[286.5,165.5],"path":[[276.5,158.5],[295.5,158.5],[295.5,172.5],[276.5,172.5]]},
{"id":164,"name":"Flag of South Korea","description":"","website":"","subreddit":"","center":[306.5,165.5],"path":[[295.5,158.5],[316.5,158.5],[316.5,172.5],[295.5,172.5]]},
{"id":165,"name":"Flag of Japan","description":"","website":"","subreddit":"","center":[327.5,165.5],"path":[[316.5,158.5],[337.5,158.5],[337.5,172.5],[316.5,172.5]]},
{"id":166,"name":"John Egbert","description":"A major character from Homestuck.","website":"","subreddit":"","center":[251.5,112.5],"path":[[243.5,102.5],[258.5,102.5],[258.5,121.5],[243.5,121.5]]},
{"id":167,"name":"Nepeta Leijon","description":"A character from Homestuck.","website":"","subreddit":"","center":[180.5,153.5],"path":[[171.5,141.5],[188.5,141.5],[188.5,165.5],[171.5,165.5]]},
{"id":168,"name":"Faroe Islands","description":"","website":"","subreddit":"","center":[437.5,120.5],"path":[[412.5,103.5],[461.5,103.5],[461.5,136.5],[412.5,136.5]]},
{"id":169,"name":"Flag of Norway","description":"","website":"","subreddit":"","center":[352.5,72.5],"path":[[493.5,36.5],[215.5,36.5],[215.5,95.5],[231.5,95.5],[231.5,100.5],[259.5,100.5],[259.5,124.5],[268.5,125.5],[334.5,124.5],[334.5,78.5],[400.5,78.5],[400.5,124.5],[412.5,124.5],[412.5,103.5],[461.5,103.5],[461.5,119.5],[475.5,119.5],[475.5,103.5],[495.5,102.5],[494.5,79.5]]},
{"id":170,"name":"The Scream","description":"A painting by Norwegian artist Edvard Munch.","website":"","subreddit":"","center":[274.5,66.5],"path":[[247.5,40.5],[300.5,40.5],[300.5,91.5],[247.5,91.5]]},
{"id":171,"name":"Flag of Ukraine","description":"","website":"","subreddit":"","center":[205.5,213.5],"path":[[0.5,170.5],[337.5,171.5],[337.5,193.5],[433.5,193.5],[433.5,252.5],[237.5,251.5],[237.5,249.5],[-1.5,251.5]]},
{"id":172,"name":"Gnome Child","description":"An NPC from the MMORPG Runescape.","website":"","subreddit":"","center":[152.5,63.5],"path":[[146.5,34.5],[137.5,57.5],[146.5,71.5],[135.5,83.5],[138.5,86.5],[144.5,82.5],[168.5,84.5],[168.5,77.5],[161.5,71.5],[164.5,65.5],[164.5,54.5],[155.5,43.5],[151.5,43.5],[150.5,34.5]]},
{"id":173,"name":"Big Floppa","description":"The one and only.","website":"","subreddit":"r/bigfloppa","center":[1937.5,465.5],"path":[[1954.5,491.5],[1918.5,490.5],[1925.5,465.5],[1924.5,448.5],[1923.5,436.5],[1928.5,440.5],[1934.5,436.5],[1939.5,435.5],[1947.5,440.5],[1954.5,434.5],[1954.5,442.5],[1950.5,450.5],[1951.5,465.5]]},
{"id":174,"name": "Hytale","description": "Hytale is an upcoming sandbox game by Hypixel Studios. Production began in 2015 by developers from the Minecraft multiplayer server Hypixel with funding and assistance from Riot Games, who later acquired the studio in 2020. It is planned to be released for PC, consoles, and mobile devices by 2023.","website": "https://hytale.com/","subreddit": "/r/hytaleinfo","center": [342.5,630.5],"path": [[323.5,614.5],[361.5,614.5],[361.5,645.5],[323.5,645.5],[323.5,614.5]]},
{"id":175,"name":"Truttle1","description":"Theiconofanesolangyoutuber","website":"https://www.youtube.com/c/Truttle1","subreddit":"r/Truttle1","center":[1857.5,497.5],"path":[[1853.5,494.5],[1853.5,494.5],[1853.5,494.5],[1851.5,496.5],[1851.5,497.5],[1852.5,498.5],[1854.5,498.5],[1854.5,498.5],[1856.5,500.5],[1858.5,498.5],[1860.5,500.5],[1860.5,500.5],[1862.5,498.5],[1862.5,497.5],[1858.5,493.5],[1857.5,493.5],[1855.5,495.5],[1854.5,495.5],[1854.5,495.5],[1854.5,495.5],[1854.5,495.5],[1853.5,494.5]]},
{"id":176,"name": "Interlingue", "description": "Flag of Interlingue, an IAL to communicate between Western European languages.", "website": "https://occidental-lang.com", "subreddit": "/r/interlingue", "center": [ 768.5, 328.5 ], "path": [ [ 765.5, 326.5 ], [ 770.5, 326.5 ], [ 770.5, 329.5 ], [ 765.5, 329.5 ] ] },
{"id":177, "name": "Viossa", "description": "Flag of the conpidgin Viossa.", "website": "", "subreddit": "/r/viossa", "center": [ 775.5, 296.5 ], "path": [ [ 769.5, 290.5 ], [ 780.5, 290.5 ], [ 780.5, 301.5 ], [ 769.5, 301.5 ] ] },
{"id":178, "name": "Lojban", "description": "Flag of Lojban", "website": "https://lojban.org", "subreddit": "/r/lojban", "center": [ 760.5, 328.5 ], "path": [ [ 763.5, 326.5 ], [ 757.5, 326.5 ], [ 757.5, 330.5 ], [ 763.5, 330.5 ] ] },
    {
    	"id": 179,
    	"name": "Bloons Dart Monkey",
    	"description": "A Dart Monkey from the Bloons Tower Defence game series.",
    	"website": "https://ninjakiwi.com",
    	"subreddit": "/r/btd6",
    	"center": [
    		1878.5,
    		1658.5
    	],
    	"path": [
    		[
    			1867.5,
    			1680.5
    		],
    		[
    			1888.5,
    			1680.5
    		],
    		[
    			1888.5,
    			1673.5
    		],
    		[
    			1900.5,
    			1673.5
    		],
    		[
    			1900.5,
    			1664.5
    		],
    		[
    			1898.5,
    			1664.5
    		],
    		[
    			1898.5,
    			1662.5
    		],
    		[
    			1894.5,
    			1662.5
    		],
    		[
    			1894.5,
    			1660.5
    		],
    		[
    			1893.5,
    			1659.5
    		],
    		[
    			1893.5,
    			1654.5
    		],
    		[
    			1891.5,
    			1652.5
    		],
    		[
    			1891.5,
    			1649.5
    		],
    		[
    			1890.5,
    			1648.5
    		],
    		[
    			1889.5,
    			1648.5
    		],
    		[
    			1889.5,
    			1647.5
    		],
    		[
    			1887.5,
    			1647.5
    		],
    		[
    			1887.5,
    			1642.5
    		],
    		[
    			1886.5,
    			1642.5
    		],
    		[
    			1886.5,
    			1640.5
    		],
    		[
    			1885.5,
    			1640.5
    		],
    		[
    			1885.5,
    			1636.5
    		],
    		[
    			1883.5,
    			1636.5
    		],
    		[
    			1883.5,
    			1635.5
    		],
    		[
    			1882.5,
    			1634.5
    		],
    		[
    			1880.5,
    			1634.5
    		],
    		[
    			1878.5,
    			1632.5
    		],
    		[
    			1877.5,
    			1633.5
    		],
    		[
    			1875.5,
    			1633.5
    		],
    		[
    			1874.5,
    			1634.5
    		],
    		[
    			1874.5,
    			1636.5
    		],
    		[
    			1872.5,
    			1637.5
    		],
    		[
    			1869.5,
    			1637.5
    		],
    		[
    			1864.5,
    			1640.5
    		],
    		[
    			1862.5,
    			1643.5
    		],
    		[
    			1862.5,
    			1659.5
    		],
    		[
    			1866.5,
    			1660.5
    		],
    		[
    			1865.5,
    			1664.5
    		],
    		[
    			1862.5,
    			1668.5
    		],
    		[
    			1862.5,
    			1669.5
    		],
    		[
    			1867.5,
    			1669.5
    		]
    	]
    }
];

//console.log("There are "+atlas.length+" entries in the Atlas.");

/*
atlas.sort(function(a, b) {
	if (a.id < b.id) {
		return -1;
	}
	if (a.id > b.id) {
		return 1;
	}
		// a must be equal to b
	return 0;
});

for(var i = 0; i < atlas.length; i++) {
	if(atlas[i-1]){
		if(atlas[i-1].id == atlas[i].id) {
			console.log(atlas[i-1].id + ": "+ atlas[i-1].name);
			console.log(atlas[i  ].id + ": "+ atlas[i  ].name);
		}
	}
}

console.log("biggest id: "+atlas[atlas.length-1].id + ", " + atlas[atlas.length-1].name);
*/

/*
for(var i = 0; i < atlas.length; i++) {
	if(typeof atlas[i].website == "undefined") {
		console.log(atlas[i].name);
	} else if(atlas[i].website.trim() != "") {
		if(atlas[i].website.trim().substring(0, 4) != "http") {
			console.log(atlas[i].name + ": " + atlas[i].website);
		}
	}
}
*/

// sort by center.y, so that lines will overlap less
atlas.sort(function (a, b) {
	if (a.center[1] < b.center[1]) {
		return -1;
	}
	if (a.center[1] > b.center[1]) {
		return 1;
	}
	// a must be equal to b
	return 0;
});

/*

// Populate with test data

for(var i = 0; i < 10000; i++) {
	var x = ~~(Math.random() * 1000)+0.5;
	var y = ~~(Math.random() * 1000)+0.5;
	var w = ~~(Math.random()*100);
	var h = ~~(Math.random()*100);
	atlas.push( {
		"id": 5,
		"name": "test"+(i+3),
		"website": "",
		"subreddit": "",
		"center": [0, 0],
		"path":[
			[x, y],
			[x+w, y],
			[x+w, y+h],
			[x, y+h]
		]
	});
}

*/
