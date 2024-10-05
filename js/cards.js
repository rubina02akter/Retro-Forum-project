const latestCards = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  const data = await res.json()
  const cards = data
  // console.log(cards)
  displayLatestCard(cards);
}

const displayLatestCard = posts => {
 
  posts.forEach(post=>{

    // console.log(post);
    const {cover_image, profile_image, title, description, author} = post;

    const {name , designation , posted_date} = author;

    console.log(author);

    const latestContainer = document.getElementById('latest-post-container')
    const latestDiv = document.createElement('div');
    latestDiv.innerHTML =`<div class="card w-full h-[550px] shadow-md p-6">
        <figure>
          <img class="rounded-lg"
            src= ${cover_image}
            alt="Shoes" />
        </figure>
        <div class=" space-y-3 mt-6">
          <p class="text-gray-400">${posted_date}</p>
          <h2 class="font-bold text-2xl">${title}</h2>
          <p class="">${description}</p>
        </div>
        <div class="py-5">
      
        <div class="flex justify-start ">
         
            <div class="avatar w-16">
              <div class="ring-primary w-12 h-12  rounded-full ring ring-offset-2">
                <img class="" src=${profile_image} />
              </div>
        
          
          </div>
      
          <div class="">
            <h2 class="font-bold text-xl">${name}</h2>
              <p class="text-gray-400">${designation}</p>
          </div>
      
        </div>
    
          </div>
        </div>`
    latestContainer.appendChild(latestDiv);
  });
}

latestCards();