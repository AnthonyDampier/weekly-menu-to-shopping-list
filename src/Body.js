import './Body.css';
import MenuCarousel from './Components/MenuCarousel.js';
const menuItems = [
    {
        name: 'Item 1',
        imageSrc: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Description of Item 1',
        ingredients: [
            {
                name: 'nameIng1',
                QuantityPerServing: 'This Much Oz' 
            },
            {
                name: 'nameIng2',
                QuantityPerServing: 'This Much Oz' 
            }
        ]
    },
    {
        name: 'Item 2',
        imageSrc: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Description of Item 2',
        ingredients: [
            {
                name: 'nameIng2',
                QuantityPerServing: 'This Much Oz' 
            },
            {
                name: 'nameIng2',
                QuantityPerServing: 'This Much Oz' 
            }
        ]
    },
    {
        name: 'Item 3',
        imageSrc: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        description: 'Description of Item 3',
        ingredients: [
            {
                name: 'nameIng3',
                QuantityPerServing: 'This Much Oz' 
            },
            {
                name: 'nameIng2',
                QuantityPerServing: 'This Much Oz' 
            }
        ]
    },
];

export default function Body(){
    return(
        <>
            <h1>Hello World</h1>
            <MenuCarousel menuItems={menuItems} />
        </>
    )
}
