<!DOCTYPE HTML>
<html lang="pl">
<head>
	<!-- Miejsce na komentarz -->
	<meta charset="utf-8" />
	<title>The High Tatra</title>
	<meta name="description" content="I'd like to tell You my story of the change I made not to regret ever again I hadn't done it sooner" />
	<meta name="keywords" content="coding, self-study, lifechange" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
</head>

<body>

<h1>Explore the High Tatra</h1>
		<br />
		
	<!-- Wygląd formularza na stronie www, z odniesieniem do pliku wykonawczego order_form.php 
	do wartości atrybutu "name" w <input /> odniesiemy się potem w pliku "orderform.php-->
	<form action="order_form.php" method="post">
	
	Morskie Oko Family Tour (199,99 PLN / pax)
	<input type ="text" name="MorskieOko" />
		<br /><br/>
	
	Gerlach Winter Expedition (2499,99 PLN / pax)
	<input type ="text" name="Gerlach"/>
		<br /><br />
	
	<input type="submit" value="Order"/>
	</form>

<br /><br /><br />
 
<!-- dwa przykłady działania skryptu php ze zmienną i funkcją echo -->
<?php

$name = "Łukasz";
echo "$name, witaj";

?>

<?php

echo "Hello World!";

?>

</body>

</html>