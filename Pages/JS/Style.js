    <script>
      function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      function checkInputBox() {
        var email = document.getElementById( 'Email-vaification' ).value;
        var style = document.getElementById( 'Email-vaification' ).style; /* 'style' is an object of element with the id '0xff' */
        var valid = validateEmail( email );
        /* upate border of s1 */

        var submitStyle = document.getElementById( 'button' ).style;


        if (valid == true) {
          style.border = "2px solid #00ff00";
        } else {
          style.border = "2px solid #ff0000";
        }
      }

    </script>
  </head>
  <body>

    <h1 style="text-align: center">Super Snazzy Email Check</h1>

    <div style="padding: 10px; border: 2px solid #000000; width: 400px;">
      <!-- email input -->
      Email Address
      <input type="text" size="25" name="email" id="Email-vaification"
             style="" onkeypress="checkInputBox()">
      <br/>
      <br/>
      <button onclick="clickMe()" id="button" style="">submit</button>
    </div>

  </body>
</html>
