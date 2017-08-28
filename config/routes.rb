Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :books, only: [:show, :index, :update]
    resources :bookshelves, only: [:index, :show, :create, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
    resources :book_read_statuses, only: [:index, :show, :create, :update]
  end
end
