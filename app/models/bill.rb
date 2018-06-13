# == Schema Information
#
# Table name: bills
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  creator_id  :integer          not null
#  total_bill  :integer          not null
#  date        :string           not null
#  split_price :integer
#  num_members :integer
#

class Bill < ApplicationRecord

  validates :title, :total_bill, :date, presence: true

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User

  has_many :billmemberships,
  primary_key: :id,
  foreign_key: :bill_id,
  class_name: :Billmembership

  has_many :members,
  through: :billmemberships,
  source: :member

  has_many :comments,
  primary_key: :id,
  foreign_key: :bill_id,
  class_name: :Comment

end
