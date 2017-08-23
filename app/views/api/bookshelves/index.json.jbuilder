@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.partial! 'bookshelf', bookshelf: bookshelf
  end
end
