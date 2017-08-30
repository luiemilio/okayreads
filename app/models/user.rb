# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  after_create :create_status_record, :create_default_bookshelves

  attr_reader :password

  has_many :bookshelves, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :book_read_statuses, dependent: :destroy

  def create_status_record
    Book.all.ids.each do |id|
      BookReadStatus.create!(user_id: self.id, book_id: id)
    end
  end

  def create_default_bookshelves
    Bookshelf.create!(name: "Fiction", user_id: self.id)
    Bookshelf.create!(name: "Non-Fiction", user_id: self.id)
    Bookshelf.create!(name: "Biography", user_id: self.id)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
