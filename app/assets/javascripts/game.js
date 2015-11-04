window.onload = function(){
	
	function createCanvas(parent, width, height){
		
		var canvas = {};
		canvas.node = document.createElement('canvas');
		canvas.context = canvas.node.getContext('2d');
		canvas.node.width = width || 100;
		canvas.node.height = height || 100;
		parent.appendChild(canvas.node);
		return canvas;
	}
	
	function moveSnake(x, y, history, hoverX, hoverY){
		var snakeLength = x.length;
		//var distanceMoved = Math.sqrt(((x[0] - hoverX) * (x[0] - hoverX)) + ((y[0] - hoverY) * (y[0] - hoverY)));
		var xMoved = x[0] - hoverX;
		var yMoved = y[0] - hoverY;
		
		var oldHistory = new Array(history.length);
		
		for(i = 0; i < oldHistory.length; i++){
			oldHistory[i] = history[i];
		}
		
		
		if(x.length > 1){
			for(i = 0; i < x.length; i++){
				if(i == 0){
					
					/*if(xMoved < 0 && yMoved < 0){
						if(Math.abs(xMoved) > Math.abs(yMoved)){
							history[i] = "right";
							console.log("Move Right");
						}else{
							history[i] = "down";
							console.log("Move Down");
						}
					}else if(xMoved > 0 && yMoved > 0){
						if(Math.abs(xMoved) > Math.abs(yMoved)){
							history[i] = "left";
							console.log("Move Left");
						}else{
							history[i] = "up";
							console.log("Move Up");
						}
					}else if(xMoved < 0 && yMoved > 0){
						if(Math.abs(xMoved) > Math.abs(yMoved)){
							history[i] = "right";
							console.log("Move Right");
						}else{
							history[i] = "up";
							console.log("Move Up");
						}
					}else if(xMoved > 0 && yMoved < 0){
						if(Math.abs(xMoved) > Math.abs(yMoved)){
							history[i] = "left";
							console.log("Move Left");
						}else{
							history[i] = "down";
							console.log("Move Down");
						}
					}*/
					if(xMoved < 0){
						//moved right
						if(yMoved < 0){
							//moved right and down
							if(Math.abs(xMoved) > Math.abs(yMoved)){
								//moved farther right than down
								history[i] = "right";
							}else{
								//moved farther down than right
								history[i] = "down";
							}
						}else if(yMoved > 0){
							//moved right and up
							if(Math.abs(xMoved) > Math.abs(yMoved)){
								//moved farther right than up
								history[i] = "right";
							}else{
								//moved farther up than right
								history[i] = "up";
							}
						}else{
							//moved directly right
							history[i] = "right";
						}
					}else if(xMoved > 0){
						//moved left
						if(yMoved < 0){
							//moved left and down
							if(Math.abs(xMoved) > Math.abs(yMoved)){
								//moved farther left than down
								history[i] = "left";
							}else{
								//moved farther down than left
								history[i] = "down";
							}
						}else if(yMoved > 0){
							//moved left and up
							if(Math.abs(xMoved) > Math.abs(yMoved)){
								//moved farther left than up
								history[i] = "left";
							}else{
								//moved farther up than left
								history[i] = "up";
							}
						}else{
							//moved directly left
							history[i] = "left";
						}
					}else{
						//moved up or down
						if(yMoved < 0){
							//moved directly down
							history[i] = "down";
						}else{
							//moved directly up
							history[i] = "up";
						}
					}
					
					x[0] = hoverX;
					y[0] = hoverY;
				}else{
					history[i] = oldHistory[i-1];
					
					if(history[i-1] == "right"){
						x[i] = x[i-1] - 3;
						y[i] = y[i-1];
					}else if(history[i-1] == "left"){
						x[i] = x[i-1] + 3;
						y[i] = y[i-1];
					}else if(history[i-1] == "up"){
						x[i] = x[i-1];
						y[i] = y[i-1] + 3;
					}else if(history[i-1] == "down"){
						x[i] = x[i-1];
						y[i] = y[i-1] - 3;
					}
				}
			}
		}else{
			x[0] = hoverX;
			y[0] = hoverY;
			
			
			if(xMoved < 0){
				//moved right
				if(yMoved < 0){
					//moved right and down
					if(Math.abs(xMoved) > Math.abs(yMoved)){
						//moved farther right than down
						history[0] = "right";
					}else{
						//moved farther down than right
						history[0] = "down";
					}
				}else if(yMoved > 0){
					//moved right and up
					if(Math.abs(xMoved) > Math.abs(yMoved)){
						//moved farther right than up
						history[0] = "right";
					}else{
						//moved farther up than right
						history[0] = "up";
					}
				}else{
					//moved directly right
					history[0] = "right";
				}
			}else if(xMoved > 0){
				//moved left
				if(yMoved < 0){
					//moved left and down
					if(Math.abs(xMoved) > Math.abs(yMoved)){
						//moved farther left than down
						history[0] = "left";
					}else{
						//moved farther down than left
						history[0] = "down";
					}
				}else if(yMoved > 0){
					//moved left and up
					if(Math.abs(xMoved) > Math.abs(yMoved)){
						//moved farther left than up
						history[0] = "left";
					}else{
						//moved farther up than left
						history[0] = "up";
					}
				}else{
					//moved directly left
					history[0] = "left";
				}
			}else{
				//moved up or down
				if(yMoved < 0){
					//moved directly down
					history[0] = "down";
				}else{
					//moved directly up
					history[0] = "up";
				}
			}
			/*if(xMoved < 0 && yMoved < 0){
				if(Math.abs(xMoved) > Math.abs(yMoved)){
					history[0] = "right";
					console.log("right");
				}else{
					history[0] = "down";
					console.log("down");
				}
			}else if(xMoved > 0 && yMoved > 0){
				if(Math.abs(xMoved) > Math.abs(yMoved)){
					history[0] = "left";
					console.log("left");
				}else{
					history[0] = "up";
					console.log("up");
				}
			}else if(xMoved < 0 && yMoved > 0){
				if(Math.abs(xMoved) > Math.abs(yMoved)){
					history[0] = "right";
					console.log("right");
				}else{
					history[0] = "up";
					console.log("up");
				}
			}else if(xMoved > 0 && yMoved < 0){
				if(Math.abs(xMoved) > Math.abs(yMoved)){
					history[0] = "left";
					console.log("left");
				}else{
					history[0] = "down";
					console.log("down");
				}
			}*/
			
		}
		/*x[0] = hoverX;
		y[0] = hoverY;
		
		if(x.length > 1){
			for(i = 1; i < x.length; i++){
				if(history[i-1] == "right"){
					x[i] = x[i] + 1 - xMoved;
					y[i] = y[i] + yMoved;
				}else if(history[i-1] == "left"){
					x[i] = x[i] - 1 - xMoved;
					y[i] = y[i] + yMoved;
				}else if(history[i-1] == "down"){
					y[i] = y[i] + 1 - yMoved;
					x[i] + x[i] + xMoved;
				}else if(history[i-1] == "up"){
					y[i] = y[i] - 1 - yMoved;
					x[i] + x[i] + xMoved;
				}
			}
		}
		
		for(i = history.length - 1; i >= 0; i--){
			if(i == 0){
				if(xMoved < 0 && yMoved < 0){
					if(Math.abs(xMoved) > Math.abs(yMoved)){
						history[i] = "right";
					}else{
						history[i] = "down";
					}
				}else if(xMoved > 0 && yMoved > 0){
					if(Math.abs(xMoved) > Math.abs(yMoved)){
						history[i] = "left";
					}else{
						history[i] = "up";
					}
				}else if(xMoved < 0 && yMoved > 0){
					if(Math.abs(xMoved) > Math.abs(yMoved)){
						history[i] = "right";
					}else{
						history[i] = "up";
					}
				}else if(xMoved > 0 && yMoved < 0){
					if(Math.abs(xMoved) > Math.abs(yMoved)){
						history[i] = "left";
					}else{
						history[i] = "down";
					}
				}
			}else{
				history[i] = history[i-1];
			}
		}*/
		
		var newPositionInfo = new Array(3);
		
		for(i = 0; i < 3; i++){
			if(i == 0){
				newPositionInfo[0] = x;
			}else if(i == 1){
				newPositionInfo[1] = y;
			}else{
				newPositionInfo[2] = history;
			}
		}
		
		//var newPositionInfo = {x, y, history};
		
		return newPositionInfo;
		
	}
	
	function eatFood(oldX, oldY, x, y, history){
		
		/*if(oldX[0] > x){
			console.log("greater");
		}else if(oldX[0] < x){
			console.log("less");
		}else if(oldX[0] == x){
			console.log("equal");
		}*/
		
		if((oldX[0] != x) && (oldY[0] != y)){
			if(oldX[0] < x && oldY[0] < y){
				//append right
				var newestX = oldX[oldX.length - 1];
				var newXValue = newestX + 4;
				oldX.push(newXValue);
				oldY.push(oldY[oldY.length - 1]);
			}else if(oldX[0] > x && oldY[0] > y){
				//append left
				var newestX = oldX[oldX.length - 1];
				var newXValue = newestX - 4;
				oldX.push(newXValue);
				oldY.push(oldY[oldY.length - 1]);
			}else if(oldX[0] > x && oldY[0] < y){
				//append left
				var newestX = oldX[oldX.length - 1];
				var newXValue = newestX - 4;
				oldX.push(newXValue);
				oldY.push(oldY[oldY.length - 1]);
			}else if(oldX[0] < x && oldY[0] > y){
				//append right
				var newestX = oldX[oldX.length - 1];
				var newXValue = newestX + 4;
				oldX.push(newXValue);
				oldY.push(oldY[oldY.length - 1]);
			}
		}else{
			var newestX = oldX[oldX.length - 1];
			var newXValue = newestX + 4;
			oldX.push(newXValue);
			oldY.push(oldY[oldY.length - 1]);
		}
		
		history.push(history[history.length - 1]);
		
		var newValues = new Array(3);
		for(i = 0; i < 3; i++){
			if(i == 0){
				newValues[0] = oldX;
			}else if(i == 1){
				newValues[1] = oldY;
			}else{
				newValues[2] = history;
			}
		}
		
		return newValues;
	}
	
	function init(container, width, height, fillColor){
		var canvas = createCanvas(container, width, height);
		var ctx = canvas.context;
		ctx.fillStyle = fillColor;
		//ctx.strokeStyle = fillColor;
		//ctx.lineWidth = 3;
		
		//generate first food
		var foodX = Math.floor((Math.random() * canvas.node.offsetWidth) + 1);
		var foodY = Math.floor((Math.random() * canvas.node.offsetHeight) + 1);
		ctx.fillRect(foodX, foodY, 3, 3);
		var lastX;
		var lastY;
		var locationX = [];
		var locationY = [];
		var moveHistory = [];
		var firstMouse = true;
		canvas.node.onmousemove = function(e){
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			
			if (firstMouse){
				firstMouse = false;
				lastX = x;
				lastY = y;
				locationX[0] = x;
				locationY[0] = y;
				
				
				if ((x >= 0) && (x <= 20)){
					moveHistory[0] = "right";
				}else if ((x <= this.offsetWidth) && (x >= this.offsetWidth - 20)){
					moveHistory[0] = "left";
				}else if((y >= 0) && (y <= 20)){
					moveHistory[0] = "down";
				}else if ((y <= this.offsetHeight) && (y >= this.offsetHeight - 20)){
					moveHistory[0] = "up";
				}else{
					moveHistory[0] = "right";
				}
			}else{
				// check if snake is dead
				if(locationX.length > 1){
					for(i = 1; i < locationX.length; i++){
						if(locationX[0] == locationX[i]){
							if(locationY[0] == locationY[i]){
								//canvas.node.removeEventListener("onmousemove", this);
								container.removeChild(canvas);
							}
						}
					}
				}
				
				
				if((locationX[0] <= 2) || (locationX[0] >= this.offsetWidth - 2)){
					console.log("off screen");
					//canvas.node.removeEventListener("onmousemove", this);
					container.removeChild(canvas);
				}
				
				if((locationY[0] <= 2) || (locationY[0] >= 598)){
					console.log("off screen");
					//canvas.node.removeEventListener("onmousemove", this);
					container.removeChild(canvas);
				}
				
				//erase snake before move
				ctx.fillStyle = "#000000";
				for(i = 0; i < locationX.length; i++){
					ctx.fillRect(locationX[i], locationY[i], 5, 5);
				}
				ctx.fillStyle = fillColor;

				//check if near food
				/*if((x == foodX && y == foodY) || (x == foodX - 1 && y == foodY) ||
					(x == foodX && y == foodY - 1) || (x == foodX + 1 && y == foodY) ||
					(x == foodX && y == foodY + 1) || (x == foodX - 1 && y == foodY - 1) ||
					(x == foodX - 1 && y == foodY + 1) || (x == foodX + 1 && y == foodY + 1)||
					(x == foodX + 1 && y == foodY -1)){
					var growth = eatFood(locationX, locationY, x, y, moveHistory);
					locationX = growth[0];
					locationY = growth[1];
					moveHistory = growth[2];
					
					//move food
					foodX = Math.floor((Math.random() * canvas.node.offsetWidth) + 1);
					foodY = Math.floor((Math.random() * canvas.node.offsetHeight) + 1);
					ctx.fillRect(foodX, foodY, 3, 3);
				}*/
				
				if((x >= foodX && x < foodX + 5) || (x <= foodX && x > foodX - 5)){
					if((y >= foodY && y < foodY + 5) || (y <= foodY && y > foodY - 5)){
						var growth = eatFood(locationX, locationY, x, y, moveHistory);
						locationX = growth[0];
						locationY = growth[1];
						moveHistory = growth[2];
						
						//move food
						foodX = Math.floor((Math.random() * canvas.node.offsetWidth) + 1);
						foodY = Math.floor((Math.random() * canvas.node.offsetHeight) + 1);
						ctx.fillRect(foodX, foodY, 3, 3);
					}
				}
				
				// move snake
				var snakeLocation = moveSnake(locationX, locationY, moveHistory, x, y);
				
				locationX = snakeLocation[0];
				locationY = snakeLocation[1];
				moveHistory = snakeLocation[2];
				
				//redraw snake
				for(i = 0; i < locationX.length; i++){
					ctx.fillRect(locationX[i], locationY[i], 5, 5);
				}
			}
			
		}
		
		/*canvas.node.onmousemove = function(e){
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			
			if(lastX && lastY){
				ctx.beginPath();
				ctx.moveTo(lastX, lastY);
				ctx.lineTo(x, y);
				ctx.stroke();
				
				var a = lastX - x;
				var b = lastY - y;
				
				var c = Math.sqrt( a*a + b*b );
				console.log(c);
			}
			
			lastX = x;
			lastY = y;
		}*/
	}
	var container = document.getElementById('gamewindow');
	init(container, container.offsetWidth, container.offsetHeight, "#FF0000");
}



