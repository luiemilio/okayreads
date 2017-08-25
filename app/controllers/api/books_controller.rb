class Api::BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def show
    debugger
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])

    @book.update(book_params)
  end

  private
  def book_params
    params.require[:book].permit(:title, :author, :image_url, :publiser, :description, bookshelf_ids: [])
  end

end
