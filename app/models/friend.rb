# == Schema Information
#
# Table name: friends
#
#  id        :bigint(8)        not null, primary key
#  user_id   :integer          not null
#  friend_id :integer          not null
#

class Friend  < ApplicationRecord
  validates :user_id, :friend_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :friend,
  primary_key: :id,
  foreign_key: :friend_id,
  class_name: :User

  def self.find_by_ids(userId, friendId)
    user = Friend.find_by(user_id: userId, friend_id: friendId)
    user
  end

end
