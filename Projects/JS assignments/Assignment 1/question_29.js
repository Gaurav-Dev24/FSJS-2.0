// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
let getExtension = (filename) =>{
    let extension = filename.split('.').pop();
    console.log(extension);
}
getExtension('module.html')
// o/p--
// html