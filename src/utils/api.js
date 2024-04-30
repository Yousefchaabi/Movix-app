import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};

/*
  Ce code est un module JavaScript qui utilise Axios pour effectuer des requêtes HTTP vers l'API de The Movie Database (TMDb) version 3.

1) Tout d'abord, il importe Axios, une bibliothèque JavaScript pour effectuer des requêtes HTTP depuis le navigateur ou Node.js.

2) Il définit deux constantes :
BASE_URL qui représente l'URL de base de l'API de TMDb.
TMDB_TOKEN qui est une clé d'API (token) de TMDb, récupérée à partir de variables d'environnement grâce à import.meta.env.VITE_APP_TMDB_TOKEN.

3) Il définit un objet headers qui contient l'en-tête de la requête avec la clé d'API dans le format requis par TMDb.

4) Il exporte une fonction asynchrone fetchDataFromApi qui prend deux paramètres :
url: l'URL spécifique de l'API de TMDb à appeler.
params: des paramètres de requête optionnels à envoyer avec la requête.

5) Dans la fonction fetchDataFromApi, il effectue une requête HTTP GET vers l'API de TMDb en utilisant Axios. Il combine BASE_URL et url pour former l'URL complète de la requête. Les en-têtes et les paramètres sont également inclus dans la requête.

6) Il retourne les données reçues de l'API si la requête est réussie.

7) S'il y a une erreur lors de la requête, il capture cette erreur dans le bloc catch, la journalise dans la console avec console.log(err) et renvoie l'erreur.

En résumé, ce code fournit une fonction réutilisable pour effectuer des requêtes vers l'API de TMDb en utilisant Axios, en incluant automatiquement la clé d'API dans les en-têtes de chaque requête.

*/
