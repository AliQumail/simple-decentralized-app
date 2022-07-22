import "./styles.css";

const Bio = (props) => {
  return (
    <div className="outer-div">
      <span className="style-red">Bio: </span> {props.bio}
    </div>
  );
};

export default Bio;
