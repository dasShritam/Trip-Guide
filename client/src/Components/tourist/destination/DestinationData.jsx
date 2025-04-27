import "./Destination.scss";

const DestinationData = (props) => {
  const {styles, heading, text, img1, img2} = props;
  return (
    <div className={styles}>
      <div className="des-text">
        <h2>{heading}</h2>
        <p> {text}</p>
      </div>

      <div className="image">
        <img alt="img" src={img1} />
        <img alt="img" src={img2} />
      </div>
    </div>
  );
};

export default DestinationData;
