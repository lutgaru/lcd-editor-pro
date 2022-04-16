/* 
* @param {boolean array} LCD characters array
* @returns {String} Returns the code in string. 
*/
// function isEqualarray(array1,array2){
//     if (array1.length !== array2.length) return false

//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}

//     for(let i;i<array1.length;i++){
//         frequencyCounter1[array1[i]] = frequencyCounter1[array1[i]] + 1 || 1;
//         frequencyCounter2[array2[i]] = frequencyCounter2[array2[i]] + 1 || 1;
//     }

//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) return false
    
//         if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false
//       }
    
//       return true
// }

function getCodeString(characters){
    var linetext='';
    var Charsvalids={};
    var Charcount=0;
    for(let LCDcolum=0; LCDcolum<characters.length;LCDcolum++){
        for(let LCDrow=0; LCDrow<characters[LCDcolum].length;LCDrow++){
            if(!Array.isArray(characters[LCDcolum][LCDrow]))continue;//check if char
            if(!characters[LCDcolum][LCDrow].some(item => item !== 0))continue;//check if blank char
            Charsvalids[characters[LCDcolum][LCDrow].toString()]=characters[LCDcolum][LCDrow];
            //console.log(Charsvalids);
        }
    }

    for (let i in Charsvalids){
        //console.log(Charsvalids[i])
        linetext=linetext.concat('byte customChar',Charcount,'[] = {\n')
        Charcount++;
        Charsvalids[i].forEach(line=>{
        linetext=linetext.concat('B',line.join(''));
        linetext=linetext.concat(',\n');
        })
        linetext=linetext.concat('};\n');   
    }
    return [linetext,Object.keys(Charsvalids).length];
}

export default getCodeString
