import axios from 'axios'
export { };

let url: string = "http://udemy-utils.herokuapp.com/api/v1/articles?token=token123"; 
interface Article {
    id: number;
    title: string;
    description: string;
}
axios.get(url).then(function (response) {
    let data:Article[] = response.data;
   console.log(data) 
});
