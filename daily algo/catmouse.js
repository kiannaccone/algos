// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
 
    if (Math.abs(x - z )> Math.abs(y - z)) {
        return 'Cat B' 
    } else if (Math.abs(x - z) < Math.abs(y - z)) {
        return 'Cat A'
    } else return 'Mouse C'

}