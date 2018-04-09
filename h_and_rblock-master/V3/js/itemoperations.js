

const itemOperations = {
    itemArray:[],
    deleteMarkItem(){
        this.itemArray = this.itemArray.filter(itemObject=>itemObject.markForDelete==false)
    },
    addItem(itemObject){
       this.itemArray.push(itemObject); 
    },
    sortItem(){
        this.itemArray.sort(function(a, b) {
            return a.price - b.price;
        });
     },
    searchById(id){
        var result = this.itemArray.filter(itemObject=>itemObject.id == id);
        return result[0];
    },
    countMark(){
        return this.itemArray.filter(itemObject=>itemObject.markForDelete).length;
        // var subArray = this.itemArray.filter(itemObject=>itemObject.markForDelete);
        // return subArray.length;
    },
    mark(id){
        var itemObject = this.searchById(id);
        itemObject.toggle();
    }
}