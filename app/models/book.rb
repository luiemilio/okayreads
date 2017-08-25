# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  image_url   :string           not null
#  publisher   :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord
   validates :title, :author, :image_url,
             :publisher, :description, presence: true

  has_many :bookshelfbooks,
    class_name: "Bookshelfbook",
    primary_key: :id,
    foreign_key: :book_id

  has_many :bookshelves,
    through: :bookshelfbooks,
    source: :bookshelf

  has_many :reviews

  has_many :reviewers,
    through: :reviews,
    source: :user

end
