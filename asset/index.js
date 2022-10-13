let dataBlog = []
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-title").value;
    let date = document.getElementById("input-date").value;
    let content = document.getElementById("input-content").value;
    let image = document.getElementById("input-img").files[0];
    let check = document.getElementById("input-check").value;

    image = URL.createObjectURL(image)
    console.log(image);

    let blog = {
        title,
        date,
        content,
        image,
        check,
        posAt: new Date(),
        author: "Abdullah Alwaqi"
    }

    dataBlog.push(blog)
    console.log(dataBlog);
    renderBlog()
}

function renderBlog() {
    document.getElementById("post").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        const element = (dataBlog[index]);
        
        document.getElementById("post").innerHTML += `
        <h1>My Project</h1>
        <div class="post-content">
            <img src="${dataBlog[index].image}" alt="post">
            <div class="post-time">
                <h2>${dataBlog[index].title}</h2>
                <p>${dataBlog[index].author} | durasi: ${dataBlog[index].posAt}</p>
            
                <p>${dataBlog[index].content}</p>
            </div>
            <ul>
                <li><a href="#"><i class="fa-brands fa-google-play"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-android"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-java"></i></a></li>
            </ul>
            <div class="btn-post">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
        `
    }
}