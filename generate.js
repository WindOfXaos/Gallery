for (var i = 1; i < 5; i++) {
    let block = "";
    for (var j = 0; j < 20; j++) {
        block += `
            <div class="block">
                <div class="imgBox">
                    <img src="Img/${Math.floor(Math.random() * 12) + 1}X2.jpg">
                </div>
                <div class="content">
                    <h2 id="text">Image Title</h2>
                    <a href="image.html">
                        <p id="text">Enter your image description here, click to read more</p>
                    </a>
                    <a id="heart" href="#" onclick="return false">
                        <img src="Icons/Heart.svg">
                    </a>
                </div> 
            </div>
        `
    }
    document.getElementById("col" + i).innerHTML += block; 
}

