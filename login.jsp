<html>
<head>
<link rel="stylesheet" href="css/login.css">
</head>
<body>
  <input type="radio" checked id="toggle--login" name="toggle" class="ghost" />
  <input type="radio" id="toggle--signup" name="toggle" class="ghost" />

  <form class="form form--login framed" action="LoginController" method="post">
    <input type="text" placeholder="TID" class="input input--top" name="username" />
    <input type="password" placeholder="Password" class="input" name="password" />
    <input type="submit" value="Log in" class="input input--submit" />
    <label for="toggle--signup" class="text text--small text--centered">New? <b>Sign up</b></label>
  </form>
  
  <form class="form form--signup framed" action="NewUserController" method="post">
    <input type="text" placeholder="TID" class="input" name="username"/>
    <input type="password" placeholder="Password" class="input" name="password" />
    <input type="submit" value="Sign up" class="input input--submit" />
    <label for="toggle--login" class="text text--small text--centered">Not new? <b>Log in</b></label>
  </form>
  <div class="fullscreen-bg"></div>
</body>
</html>