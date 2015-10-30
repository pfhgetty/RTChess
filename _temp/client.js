/*function createBoard()
{

}
ige.addGraph('IgeBaseScene');
var entity = new IgeEntity();

var baseScene = ige.$('baseScene');
entity.mount(baseScene);

var tex = new IgeTexture('ChessPieces/white_tile.png');

ige.on('texturesLoaded', function () {
    // All textures have loaded, start your game logic etc
entity
    .texture(tex)
    .dimensionsFromTexture();
});
alert("starting js");
createBoard();         */
var Client = IgeClass.extend({
	classId: 'Client',

	init: function () {
		ige.showStats(1);
		ige.input.debug(true);

                              var tex = new IgeTexture('ChessPieces/white_tile.png');
		// Wait for our textures to load before continuing
		ige.on('texturesLoaded', function () {
			// Create the HTML canvas
			ige.createFrontBuffer(true);

			// Start the engine
			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Load the base scene data
					ige.addGraph('IgeBaseScene');

					// Add all the items in Scene1 to the scenegraph
					// (see gameClasses/Scene1.js :: addGraph() to see
					// the method being called by the engine and how
					// the items are added to the scenegraph)
                                        var baseScene = ige.$('baseScene');
                                        entity.mount(baseScene);




                                        entity
                                             .texture(tex)
                                             .dimensionsFromTexture();
                                        }

			});
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }