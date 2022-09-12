<!DOCTYPE HTML>
<html lang="en">
<head>
	<!-- Miejsce na komentarz -->
	<meta charset="utf-8" />
	<title>Result of the puzzle</title>
	<meta name="description" content="A space for prolonged descritpion" />
	<meta name="keywords" content="order form, php basics" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
</head>

<body>

<?php 
	 
	$candy = $_POST['candy'];
	$pupil = $_POST['pupil'];	
	$candiesperpupil = $candy / ($pupil - 1);
	
echo<<<END

	<h2>Order summary</h2>
	
	<table border="1" cellpadding="10" cellspacing="0">
	<tr>
		<td>number of candies</td> <td>$candy</td>
	</tr>
	<tr>
		<td>number of pupils</td> <td>$pupil</td>
	</tr>
	<tr>
		<td>candies per pupil</td> <td>$candiesperpupil</td>
	</tr>	
	</table>
	<br /><a href="index.php">Powrót do strony głównej</a>

END;
?>

</body>
</html>