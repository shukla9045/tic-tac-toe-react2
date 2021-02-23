import Row from "./Row";

const GameBoard = () => {
  return (
    <>
      <div className="col-md-12 col-12 text-center">
        <h3>Player-1:</h3>
        <h3>Player-2:</h3>
      </div>
      <div className="gameBoard bg-white col-md-6 offset-md-3 shadow-sm row p-3">
        <Row />
        <Row />
        <Row />
      </div>
    </>
  );
};

export default GameBoard;
