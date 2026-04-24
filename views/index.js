const createHomepageTemplate = () => /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Reading List</title>
      <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.10/dist/htmx.min.js" integrity="sha384-H5SrcfygHmAuTDZphMHqBJLc3FhssKjG7w/CeCpFReSfwBWDTKpkzPP8c+cLsK+V" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>

      <div class="search" style="text-align: center;">
        <input
          type="search"
          name="search"
          placeholder="search books by title"
          hx-post="/books/search"
          hx-trigger="keyup changed"
          hx-target=".book-list"
        >
      </div>

        <div class="add-book-form">
            <h2>What do you want to read?</h2>
            <form hx-post="/books"
              hx-target=".book-list ul" 
              hx-swap="afterbegin"
              hx-on::after-request="document.querySelector('form').reset();"
              >
              <input type="text" name="title" placeholder="title" required />
              <input type="text" name="author" placeholder="author" required />
              <button  hx-on:click="console.log('new book added');">Add Book</button>
            </form>
          </div>

          <div class="book-list">
            <button hx-get="/books" hx-target=".book-list">Show books</button>
          </div>

        </main>
      </body>
    </html>
`;

export default createHomepageTemplate;
