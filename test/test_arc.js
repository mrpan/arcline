console.log(ArcLine)
var ArcLine=ArcLine.default;

var arcline =new ArcLine({
    fromA:{
        x:10,
        y:1
    },
    toB:{
        x:15,
        y:1
    }
})
console.log(arcline)

var azimuth=arcline.getLineAzimuth();
console.log(azimuth)