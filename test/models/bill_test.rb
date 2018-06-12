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

require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
