# == Schema Information
#
# Table name: billmemberships
#
#  id        :bigint(8)        not null, primary key
#  member_id :integer          not null
#  bill_id   :integer          not null
#

class Billmembership < ApplicationRecord

  belongs_to :members,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: :User

  belongs_to :bills,
  primary_key: :id,
  foreign_key: :bill_id,
  class_name: :Bill

end
