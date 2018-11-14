
   var datas=[];
   fetch("https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json")
   .then(results=>{
            return results.json();
       }).then(data=>{
           datas=data.feed.entry;
           console.log("data is equals to"+datas);
       })
export default function filterAppRecommend(searchText, maxResults) {
    console.log("text is "+searchText);
  return datas
    .filter(data => {
        console.log("data name is"+data["im:name"].label);
      if (data["im:name"].label.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (data["im:name"].label.includes(searchText)) {
        return true;
      }
      if(searchText.trim()===""){
          console.log("empty ahhh");
          return true;
      }
      return false;
    })
    .slice(0, maxResults);
}