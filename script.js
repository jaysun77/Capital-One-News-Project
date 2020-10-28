const newsList= document.querySelector(".news-list");
function ret(e,topi){
  newsList.innerHTML=''
  if(topi==="Sports"){
    document.querySelector("#area").style.backgroundimage="url("+ "https://www.liberty.edu/champion/wp-content/uploads/2020/03/SPORTS-800x280.jpg" + ")";
  }
  const apikey='78b9d599c4f94f8fa3afb1a5458928d6'
  let topic = topi;
  let x=`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
  //const y = 'http://cors-anywhere.herokuapp.com/';
  const url = `${x}`;
  fetch(url).then((res)=>{
    return res.json()
  }).then((data)=>{
    data.articles.forEach(article=>{
      let li=document.createElement('li');
      let a=document.createElement('a');
      a.setAttribute('href', article.url);
      a.setAttribute('target','_bblank');
      a.textContent=article.title;

      var img = document.createElement('img');
      let au=document.createElement('au');
      au.textContent='Source: '+article.source.name+', Author: '+article.author+', '+article.publishedAt.substring(0, 10);
      img.src = article.urlToImage;
      img.style.height ='100px';
      img.style.width ='150px';

      li.appendChild(a);
      img.appendChild(au);

      newsList.appendChild(li);
      newsList.appendChild(img);
      newsList.appendChild(au);
    })
  })


}
