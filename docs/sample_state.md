{
  current_user: {
    id: 1,
    username: "jack",
    books: [1, 2],
    shelves: [1, 2]
  },
  books: {
    1: {
      title: "Ubik",
      description: “Mind bending scifi”,
      reviews: [1, 2]
    }
  },
  shelves: {
    1: {
      name: “Fiction”,  
      user_id: 1,
      books: [1, 2]
    }
  },
  reviews: {
    1: {
      title: "h2g2",
      book_id: 1,
      description: "42"
      reviewer: "harry"
    }
   }
   users: {
     id: 2,
     username: "harry"
   }
  }
