# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  user_name       :string           not null
#  email           :string           not null
#  phone           :string
#  img_url         :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  # validates :user_name, :email, :phone, :img_url, :session_token, :password_digest
  validates :user_name, :email, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  before_validation :ensure_session_token

  has_many :created_bills,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :Bill

  has_many :billmemberships,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: :Billmembership

  has_many :bills,
  through: :billmemberships,
  source: :bills

  has_many :friendships,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Friend

  has_many :friends,
  through: :friendships,
  source: :friend


  def self.find_by_credentials(username, password)
    user = User.find_by(user_name:username)
    user && user.valid_password?(password) ? user : nil
  end

  def self.search(query)
    users = User.where("user_name LIKE '#{query}%'")
  end

  def self.find_by_id(id)
    user = User.find_by(id: id)
    user
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

  def generate_token
    SecureRandom.urlsafe_base64
  end

end
