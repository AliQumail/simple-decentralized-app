const Country = (props) => {

    return  <div className="outer-div"> 
        I'm from <span className="font-weight-bold text-primary">{props.country}</span>
    </div>
 }
 
 export default Country; 