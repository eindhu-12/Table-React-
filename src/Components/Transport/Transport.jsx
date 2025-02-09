import Table from "../../Custom_Components/Table/Table";
import { TransportData } from "../../Data/Transport";

const Transport = () => {
    console.log(TransportData);
    
    return (
      <>
      <h1>
          Transport Data:-
      </h1>
      <Table heading={Object.keys(TransportData[0])} data={TransportData} />
      </>
    )
  }
  
  export default Transport
  