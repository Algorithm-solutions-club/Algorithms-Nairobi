//Have your own files in your branch.. obviously this master branch will be mine. 

//example of a question and how to run it in the terminal

//Find maximum number of an array

function largest(arr, n)
{
    arr.sort();
    return arr[n-1];
}
 
    let arr = [10, 324, 45, 90, 100];
    let n = arr.length;
    console.log(largest(arr, n));



//Now to run the terminal, tab on terminal and run (node index.js)