<!DOCTYPE HTML>
<html lang="pl">
<head>
	<!-- Miejsce na komentarz -->
	<meta charset="utf-8" />
	<title>Order summary</title>
	<meta name="description" content="I'd like to tell You my story of the change I made not to regret ever again I hadn't done it sooner" />
	<meta name="keywords" content="coding, self-study, lifechange" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
</head>

<body>

	<!-- tutaj mamy: nazwa zmiennej = metoda przesłania danych, a w [] (czyli znaku tablicy) mamy nazwę pola edycyjnego z atrybutu name w <input /> formularza -->
	<!-- do tej zmiennej włóż wartość przesłaną metodą post z pola edycyjnego formularza o takiej a takiej nazwie -->
	<!-- tabelę dla order summary tworzymy w ramach instrukcji echo, w apostrofach -->
<?php

	$morskieoko = $_POST['MorskieOko'];
	$gerlach = $_POST['Gerlach'];
	$total = 199.99*$morskieoko + 1499.99*$gerlach;
	
echo<<<END
	
	<h2>Order summary</h2>
	<table border="1" cellpadding="10" cellspacing="0">
	<tr>
		<td>Gerlach (1499,99 PLN / pax)</td><td>$morskieoko</td>
	</tr>
	<tr>
		<td>Morskie Oko (199,99 PLN / pax)</td><td>$gerlach</td>
	</tr>
	<tr>
		<td>TOTAL (PLN)</td><td>$total</td>
	</tr>
	</table>
	</br><a href="index-test.php">Back to main page</a>
END;	
?>	
	
	

</body>

</html>