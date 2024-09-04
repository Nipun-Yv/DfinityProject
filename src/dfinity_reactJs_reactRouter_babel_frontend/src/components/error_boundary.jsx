import React,{Fragment} from "react";

class ErrorBoundary extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) { 
          
        return { hasError: true };  
    }

    componentDidCatch(error, errorInfo) {    
         
        console.error("error:" + error.toString());
        console.error("errorInfo:" + errorInfo.toString());
        document.getElementById("error_name").innerText = error.name;
        document.getElementById("error_msg").innerText = error.message;
    }

    render() {
        if (this.state.hasError) {      
         
            return (
                <Fragment>
                    <h1>Unexpected application crash !</h1>
                    <h2>Catch error boundary Error infomation:</h2>
                    <p>Name: <span id="error_name"/></p>
                    <p>Message: <span id="error_msg"/></p>
                </Fragment> 
            );
        }
        return this.props.children; 
    }
  }

  export default ErrorBoundary