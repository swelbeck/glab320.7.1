import { useState, useEffect } from "react";

export default function Form(props){

    const[formData, setFormData] = useState({
        searchterm: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault()

        props.movieSearch(formData.searchterm)
    }

  // The component must return some JSX
  return(
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}/>
            <input type="submit" value="submit" />
        </form>
    </div>
  );
};