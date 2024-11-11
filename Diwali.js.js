const wishes = [
    "May your Diwali be full of brightness and joy!",
    "May this festival of lights bring you peace, prosperity, and happiness.",
    "Wishing you success and joy on this Diwali!",
    "May the light of Diwali remove all darkness from your life.",
    "Sending you warm wishes for a prosperous Diwali!"
  ];
  
  const images = [
    "url('https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg')",
    "url('https://th.bing.com/th/id/OIP.Y1URFSz24WIVjpQ0kS-6egHaHa?rs=1&pid=ImgDetMain')",
    "url('https://static.vecteezy.com/system/resources/previews/000/221/853/original/beautiful-diwali-background-vector.jpg')",
    "url('https://png.pngtree.com/back_origin_pic/04/27/28/fa370ac82fed293d9ba6380347a5c1cc.jpg')",
    "url('https://th.bing.com/th/id/OIP.ETjmQoppjYQFxbAt1624UwHaHa?rs=1&pid=ImgDetMain')"
  ];
  
  function generateWish() {
    const name = document.getElementById("nameInput").value.trim();
    
    if (name) {
      const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
      document.getElementById("wishOutput").innerText = `${randomWish}, ${name}!`;
      
      // Change background to a random image
      document.body.style.backgroundImage = images[Math.floor(Math.random() * images.length)];
      document.body.style.backgroundSize = 'cover';
    } else {
      document.getElementById("wishOutput").innerText = "";
      document.body.style.backgroundImage = "url('path/to/default_image.jpg')"; // default image
      document.body.style.backgroundSize = 'cover';
    }
  }
  