import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

/* 
  Cette fonction personnalisée useFetch est un hook personnalisé qui gère les requêtes de données à partir d'une URL donnée.

1) Tout d'abord, elle reçoit une URL en tant que paramètre.

2) Elle utilise l'état local de React, useState, pour gérer trois états différents :
data: l'ensemble des données récupérées à partir de l'URL.
loading: un indicateur de chargement pour indiquer si les données sont en cours de chargement.
error: un état pour capturer toute erreur survenue lors de la récupération des données.

3) Ensuite, elle utilise le hook useEffect de React pour effectuer les actions nécessaires lorsqu'il y a un changement dans l'URL. 
Cela signifie que chaque fois que l'URL change, cette fonction est déclenchée.

4) À l'intérieur de useEffect, elle met à jour l'état loading pour indiquer que le chargement est en cours, puis réinitialise les états 
data et error à null pour s'assurer qu'ils sont vides avant de récupérer de nouvelles données.

5) Ensuite, elle appelle la fonction fetchDataFromApi pour récupérer les données à partir de l'URL spécifiée. Une fois les données 
récupérées, elle met à jour l'état loading pour indiquer que le chargement est terminé, puis met à jour l'état data avec les données 
récupérées.

6) Si une erreur se produit lors de la récupération des données, elle capture cette erreur dans le bloc catch et met à jour l'état 
loading pour indiquer que le chargement est terminé, puis met à jour l'état error avec un message d'erreur approprié.

7) Enfin, elle renvoie un objet contenant les trois états data, loading, et error, de sorte que le composant qui utilise ce hook 
puisse les utiliser pour afficher les données, l'état de chargement et les erreurs éventuelles.

En résumé, ce hook useFetch encapsule la logique de récupération des données à partir d'une URL donnée, fournissant un moyen
 pratique de gérer les requêtes HTTP dans les composants React.
*/
