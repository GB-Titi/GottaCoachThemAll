# GottaCoachThemAll

## Description du projet 
L'objectif de ce projet est de crée une application mobile sur laquelle on peut réserver des coachings de jeux vidéos, suivre des tutoriels, ou se renseigner sur divers aspect du e-sport, des compétitions, et des évènements à venir.

Le but est de permettre au client de progresser quelque soit son niveau sur un jeu donné, le tout via l'aide de coachs qui sont des joeurs professionels, ainsi que par le biais de tutos vidéos sur des sujets précis. (Comment ajuster son aim dans un jeu de tir, quels bonnes tactiques adopter dans telle ou telle situation etc...)

Ce projet est un travail en collaboration entre Massoundi Samir & Matteoli Tristan, deux étudiants en bachelor 3 technologies du Web chez Ynov Campus Aix-en-Provence.

***GottaCoachThemAll*** est notre application pour le `Suivi de projet Tehno WEB d'Ynov` visant à crée ou répondre à une demande de projet réel d'un client. Nous avons donc décidé de monter notre propre projet et nous serons donc nos propres clients.

## Instruction d'installation et d'utilisation

 - Téléchargez le git du projet complet depuis la branche master.
 - Si vous n'avez pas node d'installer utilisez la commande -> `npm install`.
 - Nous utilson également `nodemon` afin de lancer l'application. Pour l'installer -> `npm install -g nodemon`.
 - Pour lancer l'application utilisez la commande -> `nodemon ./index.js localhost 8080` (permet de le faire tourner en local. Nous utiliserons un serveur lors de la mise en production).

## Technologies choisies

Voici la liste des technilogies utilisées et à quel but.

|                |Techno                         |Interêt                      |Alternatives                 |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|**Base de données** |`MySQL`                        |`C'est un outil qu'on connait très bien`          |`MariaDB, postgreSQL` --> `Non retenu car on péférais MySQL`          |
|**Api**           |`Express (API REST)`            |`On l'a déjà utilisé et il se lie bien avec React Native`|`graphQL`--> `On ne connaissais pas donc on a préféré utiliser une API Rest Express`      |
|**Application**    |`React Native`|`Crée une application mobile avec un laguage qu'on connait. Il permet de réutiliser ses composants pour faire un site web`           | `Ionic` --> `On connaissais bien, mais il est moins performant et plus difficile à passer en web`   |
|**Expo** |`Expo`                        |`Expo`          |`Expo`         |

## Documentation: Miro [![Doc Miro](https://img.shields.io/static/v1?label=Documentation&message=Miro&color=yellow)](https://miro.com/app/board/o9J_lVUmVv4=/)

Vous retrouverez ici le miro du projet.
 Il contient : 
  >- La description du projet
  >- La definition du besoin
  >- Les tâches à effectuer
  >- Liste des fonctionnalitées
  >- Les maquettes
  >- Le Flow-Chart
  >- Le schema BDD


## Maquettes: AdobeXD [![Doc AdobeXD](https://img.shields.io/static/v1?label=Documentation&message=AdobeXD&color=red)](https://xd.adobe.com/view/a4bce071-752a-4a9e-9272-f13f8791b708-f1ef/)

Vous retrouverez ici les maquettes du projet sous adobeXD (document disponnible en ligne).
 Il contient le premier jet des maquettes: 
  >- Le menu
  >- La page d'accueil
  >- Le menu ouvert
  >- La liste des jeux
  >- Un template de liste de coachs
  >- Le template de la page perso des coachs
>![Screenshot](img/images_docs/maquettes_v1.png)


# Structure de l'application :
> ## Flowchart :
>![Screenshot](img/images_docs/flowchart.png)



> ## Diagramme BDD :
>![Screenshot](img/images_docs/diagramee_bdd.png)


## Droits d’auteurs et informations sur la licence

>A définir
