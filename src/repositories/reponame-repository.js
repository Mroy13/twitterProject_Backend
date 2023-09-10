import {modelname} from '../model.js';
const crudRepository=require('./crud-repository.js');
class modelnameRepository extends crudRepository{
    constructor(){
        super();
    }
}

export default modelnameRepository;