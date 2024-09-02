export function ImgContainer({ navStep }) {
  return (
    <div className="container">
      <img className="contain" src={navStep.imgPath} alt={navStep.label} />
      <div className="overlay">
        <div className="icon">
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
};