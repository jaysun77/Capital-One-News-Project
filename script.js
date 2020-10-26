        const newsList= document.querySelector(".news-list");

        function ret(e,topi){
          newsList.innerHTML=''
          const apikey='a4ededa4314f4054b67f21aae9def76f'
          let topic = topi;
          let x=`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
          const y = 'http://cors-anywhere.herokuapp.com/';
          const url = `${y}${x}`;
          fetch(url).then((res)=>{
            return res.json()
          }).then((data)=>{
            data.articles.forEach(article=>{
              let li=document.createElement('li');
              let a=document.createElement('a');
              a.setAttribute('href', article.url);
              a.setAttribute('target','_bblank');
              a.textContent=article.title;
              li.appendChild(a);
              newsList.appendChild(li);
            })
          })
          
          
        }