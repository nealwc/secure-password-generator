var password = []


for (var i = 0; i < 10; i++) {
    // Generate a random number between 1 and 10
    // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
    // var num = Math.floor(Math.random() * 10) + 1;
    // var char = charAt(Math.floor(Math.random());

    // // Display in console
    // // console.log(num);
    // console.log(char);
    
    var a = ['a', 'b', 'c', 'd', 'e', 'f'];
    var randomValue = a[Math.floor(a.length * Math.random())];
    console.log(randomValue);
    password.push(randomValue);
    
    
  }

  console.log(JSON.stringify(password));
  console.log(password);
  