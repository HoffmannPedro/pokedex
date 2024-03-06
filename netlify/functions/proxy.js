// netlify/functions/proxy.js

const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  // Recibe la URL original de la solicitud del cliente
  const url = `https://pokeapi-proxy.freecodecamp.rocks${event.path}`;

  try {
    // Realiza la solicitud a la API de PokeAPI a través de HTTPS
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener datos de la API");
    }

    // Obtiene los datos de la respuesta y los devuelve al cliente
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    // Maneja cualquier error que ocurra durante la solicitud
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
