<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{config('app.name')}}</title>
    <!-- <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet"> -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital@0;1&display=swap" rel="stylesheet">
    <link href="css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css"></link rel="stylesheet">

    <style>
        body{
            /* font-family:"Roboto" */
        }
    </style>
</head>
<body>
    <div id="mute"></div>
    <div id="app"></div>
    <script src="js/app.js"></script>
</body>
</html>