Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :books, only: [:show, :index]
    resources :bookshelves, only: [:index, :show, :create, :destroy]
    resources :bookshelfbooks, only: [:create, :destroy]
  end
end
