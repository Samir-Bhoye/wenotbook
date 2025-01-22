import Notes from "./Notes"
//  import showAlert from "./Alert"
const Nohome = (props) => {
  const {showAlert}=props;
  return (
    <div>
     
      <Notes showAlert={showAlert}/>
    </div>
  );
};

export default Nohome;
