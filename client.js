function createBoard()
{
         alert("Create board called");
         var tile = new Image();
         tile.src = '/ChessPieces/black_tile.png';
         tile.onLoad = alert("hi");
        // var tile = document.createElement("img");
         //tile.setAttribute('src', 'ChessPieces/black_tile.png');
         alert("created image");
}
alert("starting js");
createBoard();