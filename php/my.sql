-- запрос на выборку
SELECT name,adress FROM my WHERE  age >= 18 and age <= 30 and adress LIKE 'Москва%'; 

-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: 10.0.56.23
-- Время создания: Ноя 27 2022 г., 01:12
-- Версия сервера: 5.7.37-40
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `a0676744_vreale`
--

-- --------------------------------------------------------

--
-- Структура таблицы `my`
--

CREATE TABLE `my` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(2) DEFAULT NULL,
  `adress` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `my`
--

INSERT INTO `my` (`id`, `name`, `age`, `adress`) VALUES
(1, 'Сергей Сидоров', 27, 'Пермь, пр. Лумумбы 12а кв. 19'),
(2, 'Светлана Шаклеина', 26, 'Москва, пр. Минина и Пожарского 12а кв. 119'),
(3, 'Ольга Попова', 30, 'Москва, пл. Дружбы народов 112а кв. 419'),
(4, 'Сергей Бобров', 47, 'Мурманск, ул. Сверждлва 45б кв. 29'),
(5, 'Светлана Шаклеина', 18, 'Москва, ул. Красных партизан 44, кв. 9'),
(6, 'Сергей Потапенко', 57, 'Москва, Красная площадь'),
(7, 'Василий Большаев', 43, 'дер.Ольховка, пр. Комсомольцев  12а'),
(8, 'Егор Фомин', 44, 'дер. Ольховка, пр. Комсомольцев 43б'),
(9, 'Ольга Власенкова', 39, 'Пашия, ул. Пржевальского 41-1'),
(10, 'Тарас Дубинин', 22, 'Москва, пл. Трёх вокзалов');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `my`
--
ALTER TABLE `my`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `my`
--
ALTER TABLE `my`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
