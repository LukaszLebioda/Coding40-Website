<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
</head>

<body>
<?php
mysql_connect("localhost","admin","haslo");
mysql_select_db("baza");

function filtruj($zmienna)
{
    if(get_magic_quotes_gpc())
        $zmienna = stripslashes($zmienna); // usuwamy slashe

    // usuwamy spacje, tagi html oraz niebezpieczne znaki
    return mysql_real_escape_string(htmlspecialchars(trim($zmienna)));
}

if (isset($_POST['rejestruj']))
{
    $login = filtruj($_POST['login']);
    $haslo1 = filtruj($_POST['haslo1']);
    $haslo2 = filtruj($_POST['haslo2']);
    $email = filtruj($_POST['email']);
    $ip = filtruj($_SERVER['REMOTE_ADDR']);

    // sprawdzamy czy login nie jest juz w bazie
    if (mysql_num_rows(mysql_query("SELECT login FROM uzytkownicy WHERE login = '".$login."';")) == 0)
    {
        if ($haslo1 == $haslo2) // sprawdzamy czy hasla takie same
        {
            mysql_query("INSERT INTO `uzytkownicy` (`login`, `haslo`, `email`, `rejestracja`, `logowanie`, `ip`)
                VALUES ('".$login."', '".md5($haslo1)."', '".$email."', '".time()."', '".time()."', '".$ip."');");

            echo "Konto zostalo utworzone!";
        }
        else echo "Hasla nie sa takie same";
    }
    else echo "Podany login jest juz zajety.";
}
?>
</body>
</html>
