import "./styles.css"

const Quote = (props) => {
    return <div className="outer-div">
        <h5 className="my-quote">My Quote</h5>
       <q> {props.quote}</q>
    </div>
 }
 
 export default Quote; 
