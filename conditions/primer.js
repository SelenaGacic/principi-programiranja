var res = '\n';

   for (var i = 0; i < 4; i++) {
       for (var j = 0; j < 4; j++) {
           res += '*\t';
       }
       res += '\n';
   }

   console.log(res);


   var total = 0;
   var data = [undefined, 1, 2, 3, undefined, 4];

   for (i = 0; i < data.length; i++) {
       if (!data[i]) {
           // Can't proceed with undefined data
           continue;
       }
       total += data[i];
   }

   console.log(total);

