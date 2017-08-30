class Api::BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end

  def search
    @books = Book.where('lower(title) LIKE ?', "#{params[:search_term].downcase}%")
    render :index
  end

  def update
    @book = Book.find(params[:id])

    @book.update(book_params)
    render :show
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :image_url, :publisher, :description, bookshelf_ids: [])
  end

end
