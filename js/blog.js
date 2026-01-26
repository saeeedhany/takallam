document.addEventListener('DOMContentLoaded', function() {
    // Show More / Show Less functionality
    const showMoreButtons = document.querySelectorAll('.show-more-btn');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            const grid = document.getElementById(categoryId);
            const hiddenPosts = grid.querySelectorAll('.hidden-post');

            if (this.classList.contains('active')) {
                // Hide posts
                hiddenPosts.forEach(post => {
                    post.style.display = 'none';
                });
                this.classList.remove('active');
            } else {
                // Show posts
                hiddenPosts.forEach(post => {
                    post.style.display = 'block';
                });
                this.classList.add('active');
            }
        });
    });
});

// Filter mechanism 

const filterButtons = document.querySelectorAll(".filter-btn")
const posts = document.querySelectorAll(".blog-card")

filterButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    // active state
    filterButtons.forEach(b => b.classList.remove("active"))
    btn.classList.add("active")

    const filter = btn.dataset.filter

    posts.forEach(post => {

      const category = post.dataset.category

      if (filter === "all" || category === filter) {
        post.style.display = "block"
      } else {
        post.style.display = "none"
      }

    })

  })

})

// More value
document.querySelectorAll(".tag").forEach(tag => {

  tag.addEventListener("click", () => {

    const selected = tag.dataset.tag

    posts.forEach(post => {

      const tags = post.dataset.tags.split(",")

      if (tags.includes(selected)) {
        post.style.display = "block"
      } else {
        post.style.display = "none"
      }

    })

  })

})

