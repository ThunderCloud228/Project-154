// Registering component in Treasure.js

AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        // id
        var id = `coin${i}`;
  
        // Position variables
        var posX =(Math.random() * 10 + -5);
        var posY = (Math.random() * 4 + 66);
        var posZ = (Math.random() * 200 + -100);
  
        var position = { x: posX, y: posY, z: posZ };
  
        // Call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) {
      
      var terrainEl = document.querySelector("#terrain");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      
      coinEl.setAttribute("material","color","#ff9100");
      
      coinEl.setAttribute("geometry", { primitive: "sphere", radius: 1 });
  
      terrainEl.appendChild(coinEl);

      console.log(position)
    }
  });
  
  