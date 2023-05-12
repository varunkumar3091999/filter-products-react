const Header = ({ prodCount }) => {
  return (
    <div className="header">
      <div className="heading">Heading</div>
      <div className="prod-count">{prodCount} products available</div>
    </div>
  );
};

export default Header;
