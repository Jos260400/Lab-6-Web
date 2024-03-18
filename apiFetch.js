async function obtenerDatos() {
    try {
      const respuesta = await fetch('http://44.227.164.159/18071/Lab6.html');
      

      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }
  
      const datos = await respuesta.json();
      
      console.log(datos);
    } catch (error) {

      console.error('Hubo un problema con la petición Fetch:', error.message);
    }
  }
  

  obtenerDatos();
  