<?php
include_once ('db.php');

// проверяю был ли передан POST запрос с параметрами card и anketa
if (isset($_POST['card']) && isset($_POST['anketa']))
{

    $anketa = json_decode($_POST['anketa']); //декодирую JSON строку обратно в массив
    $card = $_POST['card']; //количество карточек заполненого опыта работы
    $recordCard = count($anketa) / $card; //количество записей в массиве полученном из строки с опытом делю на количество карточек заполеного опыта
    $chunk = array_chunk($anketa, $recordCard); //разбиваю массив полученный массив $array на равное количество записей в каждой карточке опыта
    // циклом записываю каждую карточку с опытом в базу данных
    for ($i = 0;$i < count($chunk);$i++)
    {

        $nameCompany = $chunk[$i][0]; //место работы
        $dateStart = $chunk[$i][1]; //дата начала работы
        $dateEnd = $chunk[$i][2]; //дата конца работы
        $post = $chunk[$i][3]; //должность
        $dutiy = $chunk[$i][4]; //должостные обязанности
        $currentWorkBoolean = $chunk[$i][5]; //текущее место работы
        if ($currentWorkBoolean == 'true')
        {
            $currentWork = 1;
        }
        else
        {
            $currentWork = 0;
        } //если это текущее место работы то пишем в переменную 1 иначе 0
        SaveDB($nameCompany, $dateStart, $dateEnd, $post, $dutiy, $currentWork, $link); //передаю на запись в базу данных
        
    }
}

//функция записи карточки опыта в базу данных передаются поля компания, начало работы, конец работы, должность, что делал, текущая работа. А также переменная подключения
//к базе данных
function SaveDB($nameCompany, $dateStart, $dateEnd, $post, $dutiy, $currentWork, $link)
{
    $query = mysqli_query($link, "INSERT INTO `experience` (`id`, `nameCompany`, `dateStartWork`,`dateEndWork`,`post`,`dutiy`,`currentWork`) VALUES 
						(NULL, '" . $nameCompany . "', '" . $dateStart . "','" . $dateEnd . "', '" . $post . "', '" . $dutiy . "','" . $currentWork . "')");
}

?>
