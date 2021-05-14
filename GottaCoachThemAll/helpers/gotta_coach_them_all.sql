-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 12 avr. 2021 à 16:00
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gotta_coach_them_all`
--

-- --------------------------------------------------------

--
-- Structure de la table `coaching`
--

CREATE TABLE `coaching` (
  `id` int(11) NOT NULL,
  `id_coach` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description_coaching` varchar(255) NOT NULL,
  `disponibilite` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `coachs`
--

CREATE TABLE `coachs` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_jeu` int(11) NOT NULL,
  `niveau` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `id_team` int(11) NOT NULL,
  `baniere_profil` varchar(255) NOT NULL,
  `achievements` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `jeux`
--

CREATE TABLE `jeux` (
  `id` int(11) NOT NULL,
  `jeu` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `jeux`
--

INSERT INTO `jeux` (`id`, `jeu`, `image`, `logo`, `description`) VALUES
(17, 'Counter Strike : Global Offensive', 'assets/jeu/CSGO.jpg', 'assets/logo/Counter_Strike_logo.png', 'Counter-Strike: Global Offensive (CS: GO) étend le genre du jeu d\'action dont Counter-Strike fut le pionnier lors de sa sortie, il y a plus de 12 ans. CS: GO comprend de nouvelles cartes, de nouveaux personnages, de nouvelles armes et met à jour les classiques (de_dust2, etc.).'),
(18, 'Overwatch', 'assets/jeu/overwatch.png', 'assets/logo/Overwatch_logo.png', "Overwatch est un jeu en ligne qui prend place dans un futur proche, en 2074 pour être exact. Dans des parties en 6 contre 6, le joueur incarne un héros parmi la palette proposée. Chaque personnage a des caractéristiques et des capacités particulières et un rôle défini parmi Attaque, Défense, Tank et Soutien. Les équipes cherchent donc un équilibre afin d\'être le plus efficace possible dans l\'accomplissement des objectifs "),
(19, 'Fifa 21', 'assets/jeu/fifa.webp', 'assets/logo/fifa_logo.png', "La célèbre série FIFA, produite par EA SPORTS depuis plus de 20 ans, est aujourd’hui la plus grande franchise de jeu vidéo de sport de la planète. FIFA donne vie au Jeu universel en vous proposant de jouer dans les plus grands clubs, au sein des plus grands championnats et avec les meilleurs joueurs de football du monde, le tout avec un réalisme et un niveau de détail incroyables. "),
(24, 'Hearthstone ', 'assets/jeu/hearthstone.jpg', 'assets/logo/Hearthstone_Logo.png', "Hearthstone est un jeu de cartes à collectionner en ligne, développé et édité par la société Blizzard Entertainment. C\'est un jeu gratuit s\'inspirant de l\'univers de fiction médiéval-fantastique du jeu vidéo Warcraft développé par Blizzard. "),
(25, 'Rocket League', 'assets/jeu/rocket.webp', 'assets/logo/rocket_logo.jpg', "Le jeu est inspiré du football : deux équipes, composées de un à quatre joueurs conduisant des véhicules, s\'affrontent au cours d\'un match afin de frapper un ballon et de marquer dans le but adverse. Les voitures sont équipées de propulseurs (boost) et peuvent sauter, permettant de jouer le ballon dans les airs."),
(26, 'Dota 2', 'assets/jeu/dota2.png', 'assets/logo/Dota2_Logo.png', "Dota 2 est un jeu vidéo de type MOBA développé et édité par Valve Corporation avec l\'aide de certains des créateurs du jeu d\'origine : Defense of the Ancients, un mod de carte personnalisée pour le jeu de stratégie en temps réel Warcraft III: Reign of Chaos et son extension Warcraft III: The Frozen Throne."),
(29, 'Trackmania', 'assets/jeu/trackmania.png', 'assets/logo/trackmania_logo.png', "Ressentez l\'adrénaline de la course et la joie de la création avec Trackmania ! Choisissez parmi trois niveaux d\'accès pour découvrir tout ce que propose le jeu et plongez dans ce remake éblouissant du légendaire Trackmania Nations."),
(30, 'Valorant', 'assets/jeu/valorant.jpg', 'assets/logo/valorant_logo.png', "Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games et sorti le 2 juin 2020.");

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `coach_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'When reservation created',
  `horaire_coaching` int(11) NOT NULL,
  `commentaire` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `nom_team` varchar(255) NOT NULL,
  `image_team` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `tuto_coach`
--

CREATE TABLE `tuto_coach` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `id_jeu` varchar(255) NOT NULL,
  `id_coach` int(11) NOT NULL,
  `points_clefs` varchar(255) NOT NULL,
  `descritpion_tuto` varchar(255) DEFAULT NULL,
  `lien_tuto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `id_role` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image_profil` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `coaching`
--
ALTER TABLE `coaching`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_coach` (`id_coach`),
  ADD UNIQUE KEY `description_coaching` (`description_coaching`),
  ADD UNIQUE KEY `disponibilite` (`disponibilite`);

--
-- Index pour la table `coachs`
--
ALTER TABLE `coachs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `baniere_profil` (`baniere_profil`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_jeu` (`id_jeu`),
  ADD KEY `id_team` (`id_team`);

--
-- Index pour la table `jeux`
--
ALTER TABLE `jeux`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `jeu` (`jeu`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `coach_id` (`coach_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `role` (`role`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nom_team` (`nom_team`),
  ADD UNIQUE KEY `image_team` (`image_team`);

--
-- Index pour la table `tuto_coach`
--
ALTER TABLE `tuto_coach`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lien_tuto` (`lien_tuto`),
  ADD KEY `id_coach` (`id_coach`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pseudo` (`pseudo`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD UNIQUE KEY `image_profil` (`image_profil`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `coaching`
--
ALTER TABLE `coaching`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `coachs`
--
ALTER TABLE `coachs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jeux`
--
ALTER TABLE `jeux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tuto_coach`
--
ALTER TABLE `tuto_coach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `coaching`
--
ALTER TABLE `coaching`
  ADD CONSTRAINT `coaching_ibfk_1` FOREIGN KEY (`id_coach`) REFERENCES `coachs` (`id`);

--
-- Contraintes pour la table `coachs`
--
ALTER TABLE `coachs`
  ADD CONSTRAINT `coachs_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `coachs_ibfk_2` FOREIGN KEY (`id_jeu`) REFERENCES `jeux` (`id`),
  ADD CONSTRAINT `coachs_ibfk_3` FOREIGN KEY (`id_team`) REFERENCES `team` (`id`);

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`coach_id`) REFERENCES `coachs` (`id`);

--
-- Contraintes pour la table `tuto_coach`
--
ALTER TABLE `tuto_coach`
  ADD CONSTRAINT `tuto_coach_ibfk_1` FOREIGN KEY (`id_coach`) REFERENCES `coachs` (`id`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
