export async function get(url:string){
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('Failed to fetch data.');
    }

    // Unknown es mejor que any en estos casos ya que permite que no se pueda acceder a ninguna propiedad
    const data = await response.json() as unknown;
    
    return data
}