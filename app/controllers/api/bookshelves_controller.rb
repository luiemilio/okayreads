class Api::BookshelvesController < ApplicationController
  def index
    @bookshelves = User.find(params[:id]).bookshelves
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params);
    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id])

    if @bookshelf.destroy
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:name, :user_id)
  end

end
