class Api::BookshelfbooksController < ApplicationController

  def create
    @bookshelfbook = Bookshelfbook.new(bookshelfbook_params);
    if @bookshelfbook.save
      render json: @bookshelfbook
    else
      render json: @bookshelfbook.errors.full_messages, status: 422 unless
    end
  end

  def destroy
    @bookshelfbook = Bookshelfbook.find(params[:id])
    if @bookshelfbook.destroy
      render json: @bookshelfbook
    else
      render json: @bookshelfbook.errors.full_messages, status: 422 unless
    end
  end

  private
  def bookshelfbook_params
    params.require(:bookshelfbook).permit(:bookshelf_id, :book_id)
  end

end
