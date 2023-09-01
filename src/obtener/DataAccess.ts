import axios from 'axios';
const swapi_url = "http://swapi.py4e.com/api/";

export default class DataAccess {
    public async main(service: string, number: string): Promise<any> {
        let result: any = {};
        switch (service) {
            case "planets":
                result = await get_planet(service, number);
                break;
            case "films":
                result = await get_film(service, number);
                break;
            case "people":
                result = await get_people(service, number);
                break;
            case "species":
                result = await get_species(service, number);
                break;
            case "starships":
                result = await get_starships(service, number);
                break;
            case "vehicles":
                result = await get_vehicles(service, number);
                break;
            default:
                result = await get_planet("planets", "1");
                break;
        }
        return result;
    }
};

const get_planet = async (service: string, number: string): Promise<any> => {
    const service_url = `${swapi_url}${service}/${number}`;
    try {
        const { data } = await axios.get(service_url);
        const {
            name: nombre,
            rotation_period: periodo_rotacion,
            orbital_period: periodo_orbital,
            diameter: diametro,
            climate: clima,
            gravity: gravedad,
            terrain: terreno,
            surface_water: superficie_agua,
            population: poblacion,
            residents: residentes,
            films: pelicula,
            created: creado,
            edited: editado,
            url,
        } = data;

        return {
            nombre,
            periodo_rotacion,
            periodo_orbital,
            diametro,
            clima,
            gravedad,
            terreno,
            superficie_agua,
            poblacion,
            residentes,
            pelicula,
            creado,
            editado,
            url,
        };
    } catch (error) {
        throw new Error("no existe.");
    }
};

const get_film = async (service: string, number: string): Promise<any> => {
    const service_url = `${swapi_url}${service}/${number}`;
    try {
        const { data } = await axios.get(service_url);
        const {
            characters: caracteres,
            created: creado,
            director: director,
            edited: editado,
            episode_id: espisodio_id,
            opening_crawl: rastreo_apertura,
            planets: planetas,
            producer: productor,
            release_date: fecha_lanzamiento,
            species: especies,
            starships: naves_estelares,
            title: titulo,
            url,
            vehicles: vehiculos,
        } = data;

        return {
            caracteres,
            creado,
            director,
            editado,
            espisodio_id,
            rastreo_apertura,
            planetas,
            productor,
            fecha_lanzamiento,
            especies,
            naves_estelares,
            titulo,
            url,
            vehiculos
        };
    } catch (error) {
        console.error(error);
    }
};

const get_people = async (service: string, number: string): Promise<any> => {
    const service_url = `${swapi_url}${service}/${number}`;
    try {
        const { data } = await axios.get(service_url);
        const {
            birth_year: nacimiento,
            eye_color: color_ojos,
            films: peliculas,
            gender: genero,
            hair_color: color_pelo,
            height: altura,
            homeworld: mundo_natal,
            mass: masa,
            name: nombre,
            skin_color: color_piel,
            created: creado,
            edited: editado,
            species: especies,
            starships: naves_estelares,
            url,
            vehicles: vehiculos,
        } = data;
        return {
            nacimiento,
            color_ojos,
            peliculas,
            genero,
            color_pelo,
            altura,
            mundo_natal,
            masa,
            nombre,
            color_piel,
            creado,
            editado,
            especies,
            naves_estelares,
            url,
            vehiculos,
        };
    } catch (error) {
        console.error(error);
        throw error; // Puedes lanzar el error nuevamente para que sea manejado por la función que llame a esta.
    }
};

const get_species = async (service: string, number: string): Promise<any> => {
    const service_url = `${swapi_url}${service}/${number}`;
    try {
        const { data } = await axios.get(service_url);
        const {
            average_height: altura_media,
            average_lifespan: vida_promedio,
            classification: clasificacion,
            created: creado,
            designation: designacion,
            edited: editado,
            eye_colors: color_ojos,
            hair_colors: color_cabello,
            homeworld: mundo_natal,
            language: idioma,
            name: nombre,
            people: personas,
            films: peliculas,
            skin_colors: color_piel,
            url,
        } = data;
        return {
            altura_media,
            vida_promedio,
            clasificacion,
            creado,
            designacion,
            editado,
            color_ojos,
            color_cabello,
            mundo_natal,
            idioma,
            nombre,
            personas,
            peliculas,
            color_piel,
            url,
        };
    } catch (error) {
        console.error(error);
        throw error; // Puedes lanzar el error nuevamente para que sea manejado por la función que llame a esta.
    }
};

const get_starships = async (service: string, number: string): Promise<any> => {
    const service_url = `${swapi_url}${service}/${number}`;
    try {
        const { data } = await axios.get(service_url);
        const {
            MGLT,
            cargo_capacity: capacidad_carga,
            consumables: consumibles,
            cost_in_credits: costo_creditos,
            created: creado,
            crew: tripulacion,
            edited: editado,
            hyperdrive_rating: calificacion_hiperimpulsor,
            length: longitud,
            manufacturer: fabricante,
            max_atmosphering_speed: velocidad_maxima_atmosfera,
            model: modelo,
            name: nombre,
            passengers: pasajeros,
            films: peliculas,
            pilots: pilotos,
            starship_class: clase_nave_estelar,
            url,
        } = data;
        return {
            MGLT,
            capacidad_carga,
            consumibles,
            costo_creditos,
            creado,
            tripulacion,
            editado,
            calificacion_hiperimpulsor,
            longitud,
            fabricante,
            velocidad_maxima_atmosfera,
            modelo,
            nombre,
            pasajeros,
            peliculas,
            pilotos,
            clase_nave_estelar,
            url,
        };
    } catch (error) {
        console.error(error);
        throw error; // Puedes lanzar el error nuevamente para que sea manejado por la función que llame a esta.
    }
};

const get_vehicles = async (service: string, number: string): Promise<any> => {
    const service_url = `${swapi_url}${service}/${number}`;
    try {
        const { data } = await axios.get(service_url);
        const {
            cargo_capacity: capacidad_carga,
            consumables: consumibles,
            cost_in_credits: costo_creditos,
            created: creado,
            crew: tripulacion,
            edited: editado,
            length: longitud,
            manufacturer: fabricante,
            max_atmosphering_speed: velocidad_maxima_atmosfera,
            model: modelo,
            name: nombre,
            passengers: pasajeros,
            pilots: pilotos,
            films: peliculas,
            url,
            vehicle_class: clase_vehiculo,
        } = data;

        return {
            capacidad_carga,
            consumibles,
            costo_creditos,
            creado,
            tripulacion,
            editado,
            longitud,
            fabricante,
            velocidad_maxima_atmosfera,
            modelo,
            nombre,
            pasajeros,
            pilotos,
            peliculas,
            url,
            clase_vehiculo,
        };
    } catch (error) {
        console.error(error);
        throw error; // Puedes lanzar el error nuevamente para que sea manejado por la función que llame a esta.
    }
};