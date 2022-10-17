function getFullTime(time) {

    let monthName = ["January", "February", "Maret", "April", "Mei", "Juny", "July", "Agustus", "September", "October", "November", "Desember"];
    console.log(monthName[8]);
    
    let date = time.getDate();
    console.log(date);
    
    let month = time.getMonth()
    console.log(month);
    
    let year = time.getFullYear();
    console.log(year);
    
    let hours = time.getHours();
    let minutes = time.getMinutes();
    
    return `${date} ${monthName[month]} ${year} `
    }

    function getDistanceTime(time) {
        let timeNow = new Date()
        let timePost = time
    
        let distance = timeNow - timePost
        console.log(distance)
    
        let milisecond = 1000
        let secondInHours = 3600
        let hoursInDay = 24 
    
        let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
        let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
        let distanceMinutes = Math.floor(distance / (milisecond * 60))
        let distanceSecond = Math.floor(distance / milisecond)
    
        if (distanceDay > 0) {
            return `${distanceDay} day(s) ago`
        } else if (distanceHours > 0) {
            return `${distanceHours} hour(s) ago`
        } else if (distanceMinutes > 0) {
            return `${distanceMinutes} minute(s) ago`
        } else {
            return `${distanceSecond} second(s) ago`
        }
    }
    setInterval(function() {
        getDistanceTime()
    }, 1000)

    function timeBlog() {
        let posAt = new Date();
        console.log(posAt);

        document.getElementById("head-right").innerHTML = `
        <label>Duration</label>
                <table>
                    <tr>
                        <td><i class="fa-regular fa-calendar"></i></td>
                        <td>${getFullTime(posAt)}</td>
                    </tr>
                    <tr>
                        <td><i class="fa-regular fa-clock"></i></td>
                        <td>${getDistanceTime(posAt)}</td>
                    </tr>
                </table>
                    <label for="">Technology</label>
                    <table>
                        <tr>
                            <td><a href="#"><i class="fa-brands fa-react"></i></a></td>
                            <td><a href="#">React Js</a></td>
                            <td><a href="#"><i class="fa-brands fa-square-js"></i></a></td>
                            <td><a href="#">JavaScript</a></td>
                        </tr>
                        <tr>
                            <td><a href="#"><i class="fa-brands fa-node-js"></i></a></td>
                            <td><a href="#"> Node Js</a></td>
                            <td><a href="#"><i class="fa-brands fa-get-pocket"></i></a></td>
                            <td><a href="#"> Socket IO</a></td>
                        </tr>
                    </table>
                    `
    }
    timeBlog()