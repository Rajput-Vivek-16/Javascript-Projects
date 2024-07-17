const users = document.querySelector('.user-list');
const userName = document.querySelector('#user');
let useArr = [];

const getUserData = async() => {
    try{
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        //console.log(data);

        if (data){
            users.innerHTML='';
        }
        data.map((user)=>{
            const li = document.createElement('li');
            //console.log(li);
            useArr.push(li);
            li.insertAdjacentHTML('afterbegin',
            `
            <div class="user-data">
                <img src=${user.avatar_url} alt=${user.avatar_url}>
                <div>
                    <p>${user.login}</p>
                    <a href=${user.html_url} target="_blank">${user.html_url}</a>
                </div>
            </div>
            `
            );
            users.appendChild(li);
        })
    }
    catch(error){
        console.log(error);
    }
}


userName.addEventListener('input', (e)=>{
    const val = e.target.value;
    console.log(val);
    
    useArr.filter((currEle)=>{
        //console.log(currEle);
       currEle.innerText.toLowerCase().includes(val.toLowerCase()) ? 
        currEle.classList.remove('hide') : currEle.classList.add('hide');
    })
})
getUserData();