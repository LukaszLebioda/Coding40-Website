<!-- przykład konkatencji w echo: 
echo $login."<br />";
echo $password;

<!-- żeby połączyć php z bazą, trzeba podać dane serwera; tutaj damy tylko odniesienie do pliku dbconnetc.php z danymi dostępowymi do serwera; ponieważ więcej plików będzie korzystać z serwera, w przypadku jakiejkolwiek zmiany, podmienimy tylko dane z dbconnetc.php, a nie we wszystkich pehapach po kolei -->

<!-- za pomocą obiektu klasy msqli ustanawiamy polączenie z bazą -->
<!-- za pomocą operatora @ zatrzymujemy defaultowe info z php o ewentualnych błędach, ponieważ samodzielnie okodujemy sobie wyświetlanie błędów funkcją if -->
<!-- if ($connect->connect_errno!=0) - atrybut ma wartość 0 jeśli ostatnia próba połączenia się powiodła; jeśli będzie jakikolwiek inny numer, oznacza to, że próba się nie powiodła -->
<!-- wartość 0 zawsze jest różwnoważne z false, zatem jeśli tu będzie zero, to ten if się nie spełni -->


<?php

require_once "dbconnetc.php";

	$connect = new mysqli($host, $db_user, $db_password, $db_name);

	if ($connect->connect_errno!=0)
	{
		echo "Error: ".$connect->connect_errno. "Opis: ".$connect->connect_error;
	}
	else
	{
		$login = $_POST['login'];
		$password = $_POST['password'];
	}

	$login = $_POST['login'];
	$password = $_POST['password'];	

echo $login."<br />"; 
echo $password;



?>