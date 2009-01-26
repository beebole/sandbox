<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>SandBoxed - JSONP</title>
		<script type="text/javascript" src="js/json2Min.js"></script>
		<script type="text/javascript">
			function callBack(json){
				window.name = JSON.stringify(json);}
		</script>
		<script src="<?php echo $_GET["JSONP"]; ?>" charset="UTF-8" type="text/javascript"></script>
	</head>
	<body>
	</body>
</html>