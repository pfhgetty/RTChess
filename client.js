function createBoard()
{
         //var tile = new Image();
         //tile.src = '/ChessPieces/black_tile.png';
         var tile = document.createElement("img");
         tile.setAttribute('src', 'ChessPieces/black_tile.png');
         document.body.appendChild(img);
         alert("created image");
}
alert("starting js");
createBoard();