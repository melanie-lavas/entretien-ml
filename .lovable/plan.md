# Conseiller intelligent de soumission

## Objectif
Ajouter au début de la page de soumission un assistant simple qui analyse la description du logement et du besoin, recommande les services M.L Excellence pertinents et indique les renseignements manquants pour obtenir une soumission précise.

## Expérience client
- Une zone de texte permet de décrire librement le logement, son état, la fréquence et les priorités.
- Le bouton « Obtenir mes recommandations » lance l’analyse avec Lovable AI.
- Le résultat présente trois blocs faciles à lire : services recommandés, raisons, renseignements à ajouter.
- Un bouton applique les recommandations compatibles au formulaire existant; le client peut ensuite compléter et envoyer sa demande normalement.
- Les états de chargement, erreur et nouvelle analyse sont clairement affichés.

## Mise en œuvre
- Créer une fonction serveur publique, validée et limitée en taille, afin que la clé AI reste privée.
- Utiliser AI Gateway avec `openai/gpt-6-astra`, le mode Responses, un raisonnement léger et une réponse structurée en JSON.
- Contraindre les recommandations au catalogue réel de M.L Excellence, sans inventer de prix ni garantir un résultat.
- Intégrer l’assistant dans `/soumission` et préremplir seulement les champs pertinents sans écraser les réponses déjà fournies.
- Ajouter les dépendances AI officielles et documenter cette séparation serveur/client.

## Vérification
- Tester un scénario résidentiel réel dans l’aperçu.
- Vérifier l’affichage mobile et ordinateur, les erreurs et l’application des recommandations.
- Confirmer que la page et l’ensemble du projet se compilent sans erreur.
