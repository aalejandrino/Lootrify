class User < ApplicationRecord
  # validates :user_name, :email, :phone, :img_url, :session_token, :password_digest
  validates :user_name, :email, presence: true


  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  before_validation :ensure_session_token


  def self.find_by_credentials(username, password)
    user = User.find_by(user_name:username)
    user && user.valid_password?(password) ? user : nil
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
