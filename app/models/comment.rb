# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  bill_id    :integer          not null
#  author_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  validates :body, presence: true

  belongs_to :bills,
  primary_key: :id,
  foreign_key: :bill_id,
  class_name: :Bill

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

end
