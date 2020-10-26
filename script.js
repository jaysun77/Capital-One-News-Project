        const searchForm=document.querySelector('.button');
        const newsList= document.querySelector(".news-list");
        searchForm.addEventListener('button',ret)

        function ret(e){
          const apikey='a4ededa4314f4054b67f21aae9def76f'
          let topic = 'Sports';
          //let url=`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
          const x = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-26&sortBy=publishedAt&apiKey=a4ededa4314f4054b67f21aae9def76f';
          const y = 'http://cors-anywhere.herokuapp.com/';
          const url = `${y}${x}`;
          fetch(url).then((res)=>{
            return res.json()
          }).then((data)=>{
            console.log(data)
          })
          
          
        }


