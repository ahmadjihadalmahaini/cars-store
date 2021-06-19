var name = prompt("what is your name?")

alert("welcome to Cars store website "+name)
var car =prompt("what's your favorite car (BMW ,MARSEDES ,DOODGE CHALENGER) ? ")

while(car !="BMW" && car != "MARSEDES" && car != "DOODGE CHALENGER"){car = prompt ("you entered wrong type car please try again ")}

console.log (car)

if (car == "BMW"){
  document.write(	'<div>	<h3>BMW</h3><img src="https://read.os-cdn.com/wp-content/uploads/2019/04/-BMW-M4-e1560849416813.jpg" </div>  '

)

var numberofpicture = prompt("how many times do you want to see a picture of the car? ")

for (var i =1 ; i<= numberofpicture;i++) 
document.write(	'<div>	<h3>BMW</h3><img src="https://read.os-cdn.com/wp-content/uploads/2019/04/-BMW-M4-e1560849416813.jpg" </div>  '

)    

}
else if (car == "MARSEDES"){
  document.write(	'<div>'+'<h3>'+'MARSEDES'+'</h3>'+"<img src='https://www.mercedes-benz-mena.com/ar/passengercars/mercedes-benz-cars/models/e-class/coupe-c238/design/exterior/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20190425140800.jpeg'</div>")


  var numberofpicture = prompt("how many times do you want to see a picture of the car? ")

for (var i =1 ; i<= numberofpicture;i++) 
document.write(	'<div>'+'<h3>'+'MARSEDES'+'</h3>'+"<img src='https://www.mercedes-benz-mena.com/ar/passengercars/mercedes-benz-cars/models/e-class/coupe-c238/design/exterior/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20190425140800.jpeg'</div>")

}


else if (car == "DOODGE CHALENGER"){
  document.write(	'<div><h3>DOODGE CHALENGER</h3><img src="https://saudishift.com/wp-content/uploads/2020/03/2020-dodge-challenger-srt-redeye-tuning-hennessey-13.jpg"</div>')
  var numberofpicture = prompt("how many times do you want to see a picture of the car? ")

for (var i =1 ; i<= numberofpicture;i++) 
document.write(	'<div><h3>DOODGE CHALENGER</h3><img src="https://saudishift.com/wp-content/uploads/2020/03/2020-dodge-challenger-srt-redeye-tuning-hennessey-13.jpg"</div>')


}


else{
  alert("sorry we don't have this type")

}
     

alert("Thank you for visiting my website")

