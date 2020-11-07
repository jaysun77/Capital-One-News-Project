const newsList= document.querySelector(".news-list");
const search=document.querySelector('.search');
const input=document.querySelector('.input');



var topic="";
function ret(s,topi){
  var url;
  newsList.innerHTML=''
  
  const apikey='78b9d599c4f94f8fa3afb1a5458928d6';
  
  if(s==1){
    let inp =input.value;
    url=`https://newsapi.org/v2/top-headlines?q=${inp}&country=us&category=${topic}&apiKey=${apikey}`
  }
  else{
    topic = topi;
    url=`https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=${apikey}`
  }
  
  
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
      if (article.urlToImage!=null)
        img.src = article.urlToImage;
      else
        img.src = "https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2020/05/BREAKING-NEWS-GENERIC-1.jpg?w=1920&h=1080&crop=1";
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

