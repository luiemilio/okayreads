class Api::BookReadStatusesController < ApplicationController

  def index
    @book_read_statuses = User.find(params[:id]).book_read_statuses
  end

  def show
    @book_read_status = BookReadStatus.find(params[:id])
  end

  def create
    @book_read_status = BookReadStatus.new(book_read_status_params)
    if @book_read_status.save
      render :show
    else
      render json: @book_read_status.errors.full_messages, status: 422
    end
  end

  def update
    @book_read_status = BookReadStatus.find(params[:id])
    @book_read_status.update(book_read_status_params)
    render :show
  end

  private
  def book_read_status_params
    params.require(:book_read_status).permit(:book_id, :user_id, :status)
  end
end
