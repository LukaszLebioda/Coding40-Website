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

<?php

	$pin = $_POST['pin'];
	
	if ($pin==1729)
	{
		echo "PIN poprawny";
	}
	else
	{	
		echo "PIN niepoprawny";
	}
?>
	

</body>

</html>