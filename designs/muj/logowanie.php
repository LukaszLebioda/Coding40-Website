<?php
function filtruj($zmienna)
{
    if(get_magic_quotes_gpc())
        $zmienna = stripslashes($zmienna); // usuwamy slashe

    // usuwamy spacje, tagi html oraz niebezpieczne znaki
    return mysql_real_escape_string(htmlspecialchars(trim($zmienna)));
}

if (isset($_POST['loguj']))
{
    $login = filtruj($_POST['email']);
    $haslo = filtruj($_POST['haslo']);
    $ip = filtruj($_SERVER['REMOTE_ADDR']);

    // sprawdzamy czy login i haslo sa dobre
    if (mysql_num_rows(mysql_query("SELECT login, haslo FROM uzytkownicy WHERE login = '".$email."' AND haslo = '".md5($haslo)."';")) > 0)
    {
        // uaktualniamy date logowania oraz ip
        mysql_query("UPDATE `uzytkownicy` SET (`logowanie` = '".time().", `ip` = '".$ip."'') WHERE login = '".$email."';");

        $_SESSION['zalogowany'] = true;
        $_SESSION['login'] = $email;

        // zalogowany

    }
    else echo "Wpisano zle dane.";
}
?>
