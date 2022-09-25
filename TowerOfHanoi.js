
function towerOfHanoi(n, source, aux, destination){
    if (n === 0){
        return
    }
    if (n === 1) {
        console.log(`Source ${source} to destination ${destination}`)
        return
    }
    towerOfHanoi(n-1, source, destination, aux)
    console.log(`Source ${source} to destination ${destination}`)
    towerOfHanoi(n-1, aux, source, destination)
}

towerOfHanoi(2, 'a', 'b', 'c')