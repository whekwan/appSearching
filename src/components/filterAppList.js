 //const API = "https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json";
 
 var datas=[];

 export default async function filterAppRecommend(searchText, maxResults) {
     //fetch data from API
     const api = await fetch("https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json")
   .then(results=>results.json());
       datas = api.feed.entry;
       
       //filtering the data
     return datas
     .filter(data => {
         if(searchText===""){
           return true;
       }
       if (data["im:name"].label.toLowerCase().includes(searchText.toLowerCase())||
       data["im:artist"].label.toLowerCase().includes(searchText.toLowerCase())||
       data["summary"].label.toLowerCase().includes(searchText.toLowerCase())||
       data.category.attributes.label.toLowerCase().includes(searchText.toLowerCase())||
       data.category.attributes.term.toLowerCase().includes(searchText.toLowerCase())
         ) {

         return true;
       }
       if (data["im:name"].label.includes(searchText)||
       data["im:artist"].label.includes(searchText)||
       data["summary"].label.includes(searchText)||
       data.category.attributes.label.includes(searchText)||
       data.category.attributes.term.includes(searchText)
       ) {
         return true;
       }
 
       return false;
     })
     .slice(0, maxResults);
     
 }
