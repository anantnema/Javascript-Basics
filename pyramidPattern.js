var a=['p','u','s','h','e','n','g','a','g','e'];function m(z){return z.split("").reverse().join("");}function f(h,c){for(var i=0;i<h;i++){var s='';for(var j=1;j<h-i;j++)s+=' ';for(k=1;k<=2*i+1;k++){s+=a[c];c++;c%=10;}for(j=1;j<h-i;j++)s+=' ';if(i%2==1)s=m(s);console.log(s);}}function g(h,c){var q=h;if(q%2==0)q++;for(var i=h-1;i>=0;i--){var s='';for(var j=h-1;j>i;j--)s+=' ';for(var k=1;k<=2*i+1;k++){s+=a[c];c++;c%=10;}for(j=h-1;j>i;j--)s+=' ';if(q%2==0)s=m(s);q--;console.log(s);}}function e(h,z){if(z=='u')f(h,0);else g(h,0);}function w(n){var l=n.split("\n");var t=Number(l[0]);for(var x=1;x<=t;x++)l[x].split(" ").reduce(e);}var j="";process.stdin.on("data",function(n){j+=n;});process.stdin.on("end",function(){w(j);});


//*************************************************
// Basically I have done this

//*************************************************
// var a = ['p','u','s','h','e','n','g','a','g','e'];
// var c = 0;
// var t = readline();
//
// while(t--){
//   // taken input height and u or d
//   var h = readline();
//   var x = readline();
//
//   if(x==d){
//     displayDownPyramid(h);
//   }
//   else{
//     displayPyramidUp(h);
//   }
// }
// function reverseString(z) {
//     return z.split("").reverse().join("");
// }
//
// function displayPyramidUp(n) {
//   for (var i = 0; i < n; i++) {
//
//     var str = '';
//
//     for (var j = 1; j < n-i; j++) {
//       str = str + ' ';
//     }
//     for (var k = 1; k <= (2*i+1); k++) {
//       str = str + a[c];
//       c++;
//       c = c % 10;
//     }
//     for (var j = 1; j < n-i; j++) {
//       str = str + ' ';
//     }
//     if(i%2==1){
//        str = reverseString(str);
//
//     }
//     console.log(str);
//   }
// }
//
// function displayDownPyramid(n) {
//   for (var i = n-1; i >= 0; i--) {
//
//     var str = '';
//
//     for (var j = n-1; j > i; j--) {
//       str = str + ' ';
//     }
//
//     for (var k = 1; k <= (2*i+1); k++) {
//       str = str + a[c];
//       c++;
//       c = c % 10;
//     }
//     for (var j = n-1; j > i; j--) {
//       str = str + ' ';
//     }
//
//     console.log(str);
//   }
// }
