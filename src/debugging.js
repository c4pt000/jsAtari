/*

jsAtari
Copyright (C) 2011 Jeremy Neiman

This file is part of jsAtari.

jsAtari is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

jsAtari is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with jsAtari.  If not, see <http://www.gnu.org/licenses/>.

*/


debug = function (log_txt) 
{
	if (window.console != undefined) {
		console.log(log_txt);
	}
};

debugging = 
{
	/*Debugging*/
	time: new Date().getTime(),
	fps: 0,
	
	updateFPS: function()
	{
		var newTime = (new Date().getTime());
		debugging.fps = (1000/(newTime - debugging.time))*60;
		document.getElementById("fps").innerHTML = debugging.fps;
		debugging.time = newTime;
	},
};