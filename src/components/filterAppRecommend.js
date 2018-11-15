
   var datas=[];

export default async function filterAppRecommend(searchText, maxResults) {
  //fetch data from the API
    const api = await fetch("https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json")
  .then(results=>results.json());
      datas = api.feed.entry;
      console.log(datas);
      //filtering data
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