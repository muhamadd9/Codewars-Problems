// reverse("hello world") = "dlrow olleh" (N = 11) reverse("abcd") = "dcba" (N = 4) reverse("12345") = "54321" (N = 5)

// Using Recursion 

function reverse(str) {
    if(str.length <= 1){
      return str
    }
      return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
  }