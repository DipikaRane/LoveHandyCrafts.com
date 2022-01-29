import React from 'react';
import {Link} from 'react-router-dom';


const SearchDisplay=(props)=>{
    const renderCat=({quickData})=>{
        if(quickData){
            return quickData.map((item)=>{
                return(
                    <Link to={`/products/${item.category_id}`} key={item.category_id}>
                        <div class="option">
                            <div class="tilecomponent">
                                <img src={item.cat_image} alt={item.category}/>
                                <div class="heading">
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }
    return(
                <div class="mainoptionblock">
                    {renderCat(props)}     
                </div>                 
    )
}
export default SearchDisplay;