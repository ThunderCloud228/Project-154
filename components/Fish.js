// Registering component in Fish.js

AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        // id
        var id = `fish${i}`;
  
        // Position variables
        var posX =(Math.random() * 3000 - 1000);
        var posY = (Math.random() * 2 - 1);
        var posZ = (Math.random() * 3000 - 1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        // Call the function
        this.fishes(id, position);
      }
    } ,
  
    fishes: (id, position) => {
      
        // Get the terrain element
        var terrainEl = document.querySelector("#terrain");

        // Creating the fish model entity
        var fishEl = document.createElement("a-entity");

        // Setting the id and position
        fishEl.setAttribute("id",id);
        fishEl.setAttribute("position",position);

        // Setting multiple attributes
        fishEl.setAttribute("gltf-model", "./assets/models/fish/scene.gltf");
        fishEl.setAttribute("animation-mixer", {});
        fishEl.setAttribute("scale", {x:500, y:500, z:500})

        // Append the bird entity as the child of the parent entity
        terrainEl.appendChild(fishEl);
        
    }
  });
  
  