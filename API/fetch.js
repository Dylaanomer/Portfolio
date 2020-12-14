const searchFrom = document.querySelector('.search');
        const input = document.querySelector('.input');
        const newsList = document.querySelector('.news-list');

        searchFrom.addEventListener('submit', retrieve)

        function retrieve(e) {

            if (input.value == ''){
                alert('Input field is empty!')
                return
            }

            newsList.innerHTML = ''

            e.preventDefault()

            const apiKey = '4f1fd3c2d623484cb8aeba9df1e839f0'
            let topic = input.value;

            let url=`http://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

            fetch(url).then((res)=>{
                return res.json()
            }).then((data)=>{
                console.log(data)
                data.articles.forEach(article =>{
                    let li = document.createElement('li');
                    let a = document.createElement('a');
                    a.setAttribute('href', article.url );
                    a.setAttribute('target', '_blank');
                    a.textContent = article.title;
                    li.appendChild(a);
                    newsList.appendChild(li);

                })
            })

            console.log(topic)
        }