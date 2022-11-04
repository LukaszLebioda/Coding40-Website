-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 08 Wrz 2022, 21:16
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `quiz`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pytania moje`
--

CREATE TABLE `pytania moje` (
  `id` int(11) NOT NULL,
  `kategoria` text CHARACTER SET utf32 COLLATE utf32_polish_ci NOT NULL,
  `pytanie` text CHARACTER SET utf32 COLLATE utf32_polish_ci NOT NULL,
  `A` text COLLATE utf8_polish_ci NOT NULL,
  `B` text COLLATE utf8_polish_ci NOT NULL,
  `C` text COLLATE utf8_polish_ci NOT NULL,
  `poprawna` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `pytania moje`
--

INSERT INTO `pytania moje` (`id`, `kategoria`, `pytanie`, `A`, `B`, `C`, `poprawna`) VALUES
(1, 'Góry', 'Najwyższa góra w całości znajdująca się na polskim terytorium to:', 'Rysy', 'Babia Góra', 'Kozi Wierch', 'C'),
(2, 'Morza', 'Morze Kaspijskie to:', 'morze', 'jezioro', 'rzeka', 'A'),
(3, 'Lasy', 'Największa puszcza Polski (poza Białowieską) to:', 'Puszcza Błędowska', 'Puszcza Augustowska', 'Puszcza Niepołomicka', 'B'),
(4, 'Góry', 'Podaj nazwę Perci prowadzącej na Babią Górę', 'Orla Perć', 'Perć Akademicka', 'Perć Borkowskiego', 'B');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `pytania moje`
--
ALTER TABLE `pytania moje`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `pytania moje`
--
ALTER TABLE `pytania moje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
