import { useEffect, useState } from "react";
import {food} from "./types/food"

function FoodList (){

    const [foods, setfoods] =  useState<food[]>([])
    useEffect(() => {
        const fetchfood = async () => {
        const response = await fetch("https://localhost:5000/api/MarriottFood");
        const data = await response.json();
        setfoods(data);
        };
        fetchfood()
    }, [])
    
    
    return (
        <>
        <h1>Marriott Food</h1>
        <table>
            <thead>
            <tr>
                <th>Event Name</th>
                <th>Vendor</th>
                <th>Food Rating</th>
            </tr>
            </thead>
            <tbody>
                {
                    foods.map(f => (
                    <tr key={f.foodId}>
                        <td>{f.eventName}</td>
                        <td>{f.vendor}</td>
                        <td>{f.foodRating}</td>
                    </tr>
                    ))
                }
            </tbody>

        </table>
        </>
    );
}
export default FoodList;