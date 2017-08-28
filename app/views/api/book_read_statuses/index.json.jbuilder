@book_read_statuses.each do |book_read_status|
  json.set! book_read_status.id do
    json.partial! 'book_read_status', book_read_status: book_read_status
  end
end
