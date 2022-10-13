// //ARRAY
// let namaSiswa = ['Fikri', 'Dicky', 'Rahmat']

// console.log(namaSiswa);
// console.log(namaSiswa[0]); //[0] mengambil data dari index ke 0

// let nama = "ade"
// let alamat = "Tangerang"
// let umur = "20"
// console.log(nama, alamat, umur);

// let dataPribadi = {
//     //Object
//     nama : "ade",
//     alamat : "Tangerang",
//     umur : 20
// }
// console.log(dataPribadi);

// // Array of Object (menyimpan banyak object)
// let dataPersonal = [
//     {
//         nama: "Riski",
//         alamat: "Jakarta",
//         umur: 20,
//     },
//     {
//         nama: "ade",
//         alamat: "tangerang",
//         umur: 15,
//     },
//     {
//         nama: "abdullah",
//         alamat: "bandung",
//         umur: 30,
//     },
// ]
// console.log(dataPersonal);
// console.log(dataPersonal[2]);
// console.log(dataPersonal.length); //untuk mengetahui jumlah data dalam sebuah array

// //mengisi data
// let data = []

// function addData() {
//     let person = {
//         title: "harga cabe naik",
//         content: "harga cabe saat ini sedang naik"
//     }

//     data.push(person) //untuk ngepush ke "let data"
//     console.log(data);
// }

//inner HTMl
let dataBlog = []

function addBlog(event) {
     event.preventDefault() //untuk menghindari default dari parameter

    let title = document.getElementById("input-title").value;
    let content = document.getElementById("input-content").value;
    let image = document.getElementById("input-img").value;

    //untuk menampilkan gambar url
    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog = {
        title,
        content,
        image,
        postAt: "13 Juli 2022",
        author: "abdullah",
    }

    dataBlog.push(blog)
    console.log(dataBlog);
    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML += ''

    for (let index = 0; index < dataBlog.length; index++) {
        const element = (dataBlog[index]);
        
        document.getElementById("contents").innerHTML += `
        <div class="blog-content">
                    <div class="btn-group">
                        <button class="btn-edit">Edit Post</button>
                        <button         class="btn-post">Post Blog</button>
                    </div>
                    <h1>
                        <a href="index.html" target="_blank">Pasar Coding sangat menjanjikan di Indonesia</a>
                    </h1>
                    <div class="detail-blog-content">
                        17 Juli 2022, 19:00 WIB | Jakarta Barat
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis qui eaque magni unde veritatis expedita voluptatum sit hic? Tenetur cumque maiores aliquam iste consequatur quos aut porro minus laudantium exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa esse culpa fugiat dicta odit. Repellat rerum, sequi quis hic alias error quibusdam quaerat magni praesentium consequuntur eos iste asperiores?</p>
                    </div>
                </div>
                `
    }
}