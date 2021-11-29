import { ThemeContext } from "./Layout";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";


const Toolbar = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const { setSearchQuery } = useContext(FilterContext);

    return (           
  
        <div className="container-fluid dark-theme-toolbar  mt-5">
            <div className="row mb-3 ">
                <div className="col">
                    <h4 className="dark-theme-text">Change Theme</h4>
                    <div className="form-check form-switch">    
                        <input 
                                className="form-check-input" 
                                type="checkbox" 
                                role="switch" 
                                id="flexSwitchCheckChecked" 
                                checked={theme}
                                onChange = {(event) => {
                                    setTheme(event.target.checked)
                                }} />
                        <label className="form-check-label dark-theme-text " 
                            for="flexSwitchCheckChecked"> Dark / Light</label>
                    </div>
                </div>

                <div className="col">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder='Search...'
                    
                            onChange={ (event) => {
                                setSearchQuery(event.target.value);
                            }
                        } />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-secondary">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>    
                </div>
            </div>                      
        </div> 
    );
}
 
export default Toolbar;
