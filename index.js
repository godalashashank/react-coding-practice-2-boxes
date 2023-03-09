const Box = (props) => {
  //  Write your code here.
  const { boxName, text } = props;
  return (
    <div className={`${boxName} box`}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box boxName="yellow-box" text="Small" />
      <Box boxName="blue-box" text="Medium" />
      <Box boxName="pink-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
