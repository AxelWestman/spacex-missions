const API_URL = "https://api.spacexdata.com/v3";

export async function getAllLaunches(){
    try{
        const response = await fetch(`${API_URL}/launches`); //Pedimos los datos
        const data = await response.json(); //Pedimos que los datos se pasen a JSON
        return data;
    } catch (error) {
        console.log(error); 
        }
}

export async function getLaunchByFlightNumber(flightNumber){
    try{
        const response = await fetch(`${API_URL}/launches/${flightNumber}`); //Pedimos los datos
        const data = await response.json(); //Pedimos que los datos se pasen a JSON
        return data;
    } catch (error) {
        console.log(error);
    }
}