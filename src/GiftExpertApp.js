import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);
    // const handleAdd = () => {
    //     ;
    // };

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setcategories={ setcategories }/>

            <hr></hr>


            <ol>{
                    categories.map( category => 
                        
                        <GiftGrid
                            
                            key = { category }
                            category = {category}
                            
                        />
                    )
             }
            </ol>
        </>

)




}



export default GiftExpertApp