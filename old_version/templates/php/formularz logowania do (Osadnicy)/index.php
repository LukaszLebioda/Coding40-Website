<!-- index.php to plik, który wyszukuje serwer w pierwszej kolejnośći (po przyjściu żądania z przeglądarki -->
<!-- znajduje się w nim formularz, w którym jest odniesienie do pliku na serwerze, który to plik ten formularz ma obsłużyć: <form action="login.php" method="post">  -->
<!-- plik php, który ma być dostępny dla Usera dopiero po zalogowaniu się; wyświetli się wtedy zawartość konta -->
<!-- jeśli User jest już zalogowany, to mógłby teoretycznie wpisać w przeglądarkę adres serwera, w w naszym przypadku: localhost/osadnicy albo localhost/osadnicy/index.php i znowu znalazłby się na stronie z formularzem do logowania --> 
<!-- dlatego w pliku index.php dodamy instrukcję warunkową if, która sprawdzi, czy User jest już zalogowany, i jeśli tak, przeniesie go z powrotem do game.php -->
<!-- natomiast żeby User nie mógł, wpisując odpowiedni adres, przejść od razu do swojego lub czyjegoś konta, musimy w pliku game.php dodać kolejnego ifa, który sprawdzi, czy użytkownik jest zalogowany -->
<!-- i trzecia możliwość: User może wpisać w przeglądarkę adres: localhost/osadnicy/login.php; nazwa pliku login.php jest jawna, bo figuruje w kodzie html jako odniesienie na formularzu -->
<!-- tu jest problem taki, że żadne dane z index.php (onclick) nie zostały przesłane do login.php metodą post; dlatego w login.php ustawimy ifa, który sprawdzi, czy zmienne login i password istnieją, czy ustanowiono je metodą post -->

<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Osadnicy - gra przeglądarkowa</title>
	<meta name="description" content="A space for prolonged descritpion" />
	<meta name="keywords" content="order form, php basics" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
</head>

<body>

	<h1>Tylko martwi ujrzeli koniec wojny - Platon</h1>
	
	<form action="login.php" method="post"> 
			Login: <br /><br /> <input type="text" name="login" /> 
			<br /><br />
			Password: <br /><br /> <input type="password" name="password" />
			<br /><br />
		<input type="submit" value="Log in" />
	</form>
	
</body>
</html>




