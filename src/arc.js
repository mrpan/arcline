/**
 * var options={
 *   fromA:{
 *     x:103.34,
 *     y:30.45
 *   },
 *  toB:{
 *     x:103.68,
 *     y:32.45
 *  }
 * }

 */
class ArcLine{
    constructor(options){
        this.fromA=options.fromA;
        this.toB=options.toB;
    }
    /**
     *与正北方向的角度
     */
    getLineAzimuth(){
        var dx=this.toB.x-this.fromA.x;
        var dy=this.toB.y-this.fromA.y;
        var theta = Math.atan2(dy, dx);
        var angle = theta * (180 / Math.PI);
        if (dy > 0 && dx <= 0) {
            angle = (90 - angle) + 360;
        } else if (dy <= 0 && dx < 0) {
            angle = angle + 360.;
        } else if (dy < 0 && dx >= 0) {
            angle = (90 - angle);
        }
        angle = Math.round(angle);
        return angle;
    }
}
export default ArcLine;