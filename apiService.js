async function fetchData(url) {
    try {
      const response = await fetch(url);

      const data = await response.json();
  
      if (!response.ok) {

        throw new Error(data.message || 'Error desconocido');
      }
  
      return data;
    } catch (error) {

      console.error('Error al comunicarse con la API:', error.message);
      throw error; 
    }
  }
  
  export default fetchData;
  