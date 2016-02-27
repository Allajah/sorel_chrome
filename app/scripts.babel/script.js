var title = $(".article-header > .tweet-title")
Countable.once(title[0], function(counter) {
  console.log(counter);
});

var article = $(".article-entry > p")
Countable.once(article[0], function(counter) {
  console.log(counter);
});
